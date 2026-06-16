import ProjectCard from "@/components/ProjectCard";
import StatusBadge from "@/components/StatusBadge";

export default function ComponentsPreview() {
    return (
        <main className="flex min-h-screen items-center justify-center gap-8">
            <ProjectCard thumbnail="/images/thumb-duck1.jpg" stack={["Next.js", "Tailwind"]} background="/images/UBCInsights/thumb-fullstack.jpg"
                description="description descriptiondescriptiondescription description description description description description"
                githubUrl="github.com" />
            <ProjectCard thumbnail="/images/thumb-duck1.jpg" stack={["Next.js", "Tailwind"]} background="/images/UBCInsights/thumb-fullstack.jpg"
                description="description descriptiondescriptiondescription description description description description description"
                githubUrl="github.com" />
            <ProjectCard />
        </main>
    )
}
