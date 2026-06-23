"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendEmail, ContactFormState } from "@/app/actions/sendEmail";
import { useRouter } from "next/navigation";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form when success is true
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset()
      setShowSuccess(true)
    }
  }, [state.success, state.message, state.timestamp])

  useEffect(() => {
    if (isPending) {
      setShowSuccess(false)
    }
  }, [isPending])
  
  // Construct mailto fallback url
  const handleMailtoFallback = () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const emailBody = `Hi Kuan,\n\n${message}\n\nBest,\n${name}\n${email}`;
    const mailtoUrl = `mailto:kuandev06@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact Inquiry"
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative w-full py-20 px-8 lg:px-10 select-none">
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Section Heading */}
        <div className="relative text-left">
          <h2 className="font-bebas text-5xl lg:text-6xl relative z-10 tracking-wider">
            Get In Touch
          </h2>
          <div className="absolute bottom-0 left-4 bg-accent z-0 w-44 h-4" />
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-4">

          {/* Info Side (Cols: 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-bebas text-3xl tracking-wide text-primary">
              Let's build something epic
            </h3>
            <p className="font-barlow text-secondary text-lg leading-relaxed max-w-md">
              Have a role you're recruiting for, a hackathon project idea, or just want to chat about engineering? Dropping a message is the best way to get in touch. I'll get back to you within 24 hours.
            </p>

            {/* Direct contact channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

              {/* Email channel */}
              <a
                href="mailto:kuandev06@gmail.com"
                className="group flex flex-col p-5 bg-zinc-950/40 border border-white/5 hover:border-accent/40 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(248,76,76,0.08)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-bebas text-lg tracking-wider text-secondary group-hover:text-primary transition-colors">Email</span>
                </div>
                <span className="font-barlow text-sm text-zinc-400 group-hover:text-zinc-300 truncate">kuandev06@gmail.com</span>
              </a>

              {/* LinkedIn channel */}
              <a
                href="https://www.linkedin.com/in/kuan-wei-315b4a344/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-5 bg-zinc-950/40 border border-white/5 hover:border-accent/40 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(248,76,76,0.08)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="font-bebas text-lg tracking-wider text-secondary group-hover:text-primary transition-colors">LinkedIn</span>
                </div>
                <span className="font-barlow text-sm text-zinc-400 group-hover:text-zinc-300 truncate">linkedin.com/in/kuan</span>
              </a>

              {/* GitHub channel */}
              <a
                href="https://github.com/gatory"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-5 bg-zinc-950/40 border border-white/5 hover:border-accent/40 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(248,76,76,0.08)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                  </div>
                  <span className="font-bebas text-lg tracking-wider text-secondary group-hover:text-primary transition-colors">GitHub</span>
                </div>
                <span className="font-barlow text-sm text-zinc-400 group-hover:text-zinc-300 truncate">github.com/gatory</span>
              </a>

              {/* Location channel */}
              <div
                className="group flex flex-col p-5 bg-zinc-950/40 border border-white/5 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-bebas text-lg tracking-wider text-secondary">Location</span>
                </div>
                <span className="font-barlow text-sm text-zinc-400">Vancouver, BC, Canada</span>
              </div>

            </div>
          </div>

          {/* Form Side (Cols: 7) */}
          <div className="lg:col-span-7">

            {/* Glassmorphic Form Card */}
            <div className="relative overflow-hidden bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-10 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(248,76,76,0.1)] transition-all duration-500">

              {/* Success Screen */}
              {showSuccess ? (
                <div className="flex flex-col items-center text-center py-10 gap-6 animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bebas text-3xl text-primary tracking-wide">Message Sent!</h4>
                    <p className="font-barlow text-secondary text-lg max-w-sm">
                      {state.message}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowSuccess(false);
                    }}
                    className="mt-2 font-bebas text-lg tracking-wider border border-white/20 hover:border-white hover:bg-white hover:text-black py-2.5 px-6 rounded-lg transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} action={formAction} className="flex flex-col gap-6">

                  {/* Inputs row (Name / Email) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-bebas text-sm tracking-widest text-zinc-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={isPending}
                        placeholder="John Doe"
                        className="w-full bg-zinc-950/60 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent rounded-lg py-3 px-4 text-primary font-barlow text-base placeholder:text-zinc-600 outline-none transition-all duration-300 disabled:opacity-50"
                      />
                      {state.errorFields?.name && (
                        <span className="text-xs text-accent mt-0.5 font-medium">{state.errorFields.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-bebas text-sm tracking-widest text-zinc-400">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={isPending}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-950/60 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent rounded-lg py-3 px-4 text-primary font-barlow text-base placeholder:text-zinc-600 outline-none transition-all duration-300 disabled:opacity-50"
                      />
                      {state.errorFields?.email && (
                        <span className="text-xs text-accent mt-0.5 font-medium">{state.errorFields.email}</span>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="font-bebas text-sm tracking-widest text-zinc-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      disabled={isPending}
                      placeholder="Collaboration opportunity / Hello!"
                      className="w-full bg-zinc-950/60 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent rounded-lg py-3 px-4 text-primary font-barlow text-base placeholder:text-zinc-600 outline-none transition-all duration-300 disabled:opacity-50"
                    />
                    {state.errorFields?.subject && (
                      <span className="text-xs text-accent mt-0.5 font-medium">{state.errorFields.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-bebas text-sm tracking-widest text-zinc-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={isPending}
                      placeholder="Hi Kuan, I loved your portfolio website and would love to chat about..."
                      className="w-full bg-zinc-950/60 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent rounded-lg py-3 px-4 text-primary font-barlow text-base placeholder:text-zinc-600 outline-none transition-all duration-300 resize-none disabled:opacity-50"
                    />
                    {state.errorFields?.message && (
                      <span className="text-xs text-accent mt-0.5 font-medium">{state.errorFields.message}</span>
                    )}
                  </div>

                  {/* Global Message Feedback (only on error/failure) */}
                  {state.message && !state.success && (
                    <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg text-accent font-barlow text-sm flex items-start gap-2 animate-shake">
                      <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div className="flex-1">
                        <span>{state.message}</span>
                        {state.errorFields && Object.keys(state.errorFields).length > 0 && (
                          <ul className="mt-1.5 list-disc list-inside text-sm opacity-90 flex flex-col gap-0.5">
                            {Object.entries(state.errorFields).map(([field, errMsg]) => (
                              errMsg && <li key={field}>{errMsg}</li>
                            ))}
                          </ul>
                        )}
                        <div className="mt-2 flex gap-3 items-center">
                          <button
                            type="button"
                            onClick={handleMailtoFallback}
                            className="underline font-semibold hover:text-white transition-colors"
                          >
                            Send via native Email App instead
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submission Row */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isPending}
                      className="flex-1 sm:flex-initial min-w-44 bg-white text-black font-bebas text-xl md:text-2xl tracking-widest py-3 px-8 rounded-lg hover:bg-accent hover:text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-xl disabled:opacity-50 disabled:scale-100 disabled:hover:bg-white disabled:hover:text-black flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isPending ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <span>SEND MESSAGE</span>
                      )}
                    </button>

                    {/* Quick Fallback Link */}
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      disabled={isPending}
                      className="text-zinc-500 hover:text-zinc-300 font-barlow text-sm font-medium transition-colors text-center py-2 underline hover:no-underline disabled:opacity-50"
                    >
                      Send directly using Email App
                    </button>

                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Styles for animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 2;
        }
      `}</style>
    </section>
  );
}
