"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
  timestamp?: number;
  errorFields?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

function logUser(success: boolean, name: string, email: string, timestamp: number, subject: string, message: string) {
  const pstTime = new Date(timestamp).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
  });
  
  console.log(`[Contact Form Submission]`);
  console.log(`Success: ${success}`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log(`Timestamp: ${pstTime}`);
}

export async function sendEmail(prevState: any, formData: FormData): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Server-side validation
  const errors: Record<string, string> = {};
  if (!name || name.trim() === "") errors.name = "Name is required";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Valid email is required";
  if (!subject || subject.trim() === "") errors.subject = "Subject is required";
  if (!message || message.trim() === "") errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errorFields: errors,
    };
  }

  // Log the submission with a local PST timestamp
  const submissionTimestamp = Date.now();
  
  // Check for Resend API key in environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.CONTACT_EMAIL || "kuan@example.com";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact Form <onboarding@resend.dev>",
          to: targetEmail,
          subject: `[Portfolio Contact] ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          `,
        }),
      });

      if (!res.ok) {
        let errorMessage = "Failed to send email via mail service. Please try direct email.";
        try {
          const errorData = await res.json();
          if (errorData && errorData.message) {
            errorMessage = `Email service error: ${errorData.message}`;
          }
        } catch (e) {
          // ignore JSON parse errors
        }
        console.error("Resend API error:", errorMessage);
        
        // Log failure
        logUser(false, name, email, submissionTimestamp, subject, message);

        return {
          success: false,
          message: errorMessage,
        };
      }

      // Log success
      logUser(true, name, email, submissionTimestamp, subject, message);

      return {
        success: true,
        message: "Your message has been sent successfully!",
        timestamp: Date.now(),
      };
    } catch (err) {
      console.error("Error sending email via Resend:", err);
      
      // Log failure
      logUser(false, name, email, submissionTimestamp, subject, message);
      
      return {
        success: false,
        message: "An unexpected error occurred. Please try direct email.",
        timestamp: Date.now(),
      };
    }
  }

  // Fallback: If no API key, we simulate a successful send (but log to console)
  // This helps when running locally or on static hosting without environment variables.
  
  // Log success
  logUser(true, name, email, submissionTimestamp, subject, message);

  return {
    success: true,
    message: "Message received! (Dev mode: logged to server console)",
    timestamp: Date.now(),
  };
}
