import ProjectCard from "@/components/ProjectCard";
import StatusBadge from "@/components/StatusBadge";

export default function ComponentsPreview() {
    return (
        <main className="flex min-h-screen items-center justify-center gap-8">
            <ProjectCard thumbnail="/images/thumb-duck1.jpg" stack={["Next.js", "Tailwind"]} />
            <ProjectCard />
            <div className="flex flex-col gap-2">
                {/* <StatusBadge status="live"/>
                <StatusBadge status="complete"/>
                <StatusBadge status="in-dev"/>
                <StatusBadge status="upcoming"/> */}
            </div>
        </main>
    )
}
