'use client'

import { useState } from "react";
import { Project } from "@/types/project";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function RecommendationSection({ project }: { project: Project }) {
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);
    const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);

    // Find other projects in the same category
    const similarProjects = projects.filter(
        (p) => p.id !== project.id && p.category === project.category
    );

    // Mobile grid is 2 cols. 2 rows = 4 items.
    const visibleMobileProjects = isMobileExpanded
        ? similarProjects
        : similarProjects.slice(0, 4);

    // Desktop grid is 4 cols. 2 rows = 8 items.
    const visibleDesktopProjects = isDesktopExpanded
        ? similarProjects
        : similarProjects.slice(0, 8);

    return (
        <>
            {/* Mobile View */}
            <section className="lg:hidden flex flex-col w-full text-foreground px-6 py-10 bg-background border-t border-zinc-800/50">
                <h2 className="text-3xl mb-6 font-bebas tracking-wide text-left text-white">Recommendation & Similar</h2>
                {similarProjects.length === 0 ? (
                    <p className="text-zinc-400 text-sm font-sans font-light">No similar projects found.</p>
                ) : (
                    <div className="flex flex-col items-center gap-y-6">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center w-full">
                            {visibleMobileProjects.map((proj) => (
                                <ProjectCard
                                    key={proj.id}
                                    projectName={proj.projectName}
                                    route={proj.route}
                                    githubUrl={proj.githubUrl}
                                    thumbnail={proj.thumbnail}
                                    background={proj.background}
                                    bgColor={proj.bgColor}
                                    icon={proj.icon}
                                    status={proj.status}
                                    description={proj.description}
                                    tags={proj.cast.map(c => c.name)}
                                />
                            ))}
                        </div>
                        {similarProjects.length > 4 && (
                            <button
                                onClick={() => setIsMobileExpanded(!isMobileExpanded)}
                                className="mt-2 px-6 py-2 border border-white/20 rounded-full text-xs font-semibold hover:bg-white/5 transition-colors uppercase tracking-wider font-sans text-white"
                            >
                                {isMobileExpanded ? "See Less" : "See More"}
                            </button>
                        )}
                    </div>
                )}
            </section>

            {/* Desktop View */}
            <section className="hidden lg:flex flex-col w-full text-foreground px-15 py-16 bg-background border-t border-zinc-800/50">
                <h2 className="text-4xl mb-4 font-bebas tracking-wide text-left text-primary font-medium">Recommendation & Similar</h2>
                {similarProjects.length === 0 ? (
                    <p className="text-zinc-400 text-base font-sans font-light">No similar projects found in this category.</p>
                ) : (
                    <div className="flex flex-col items-center gap-y-8">
                        <div className="flex flex-wrap gap-x-2 xl:gap-x-4 gap-y-8 w-full mx-auto">
                            {visibleDesktopProjects.map((proj) => (
                                <ProjectCard
                                    key={proj.id}
                                    projectName={proj.projectName}
                                    route={proj.route}
                                    githubUrl={proj.githubUrl}
                                    thumbnail={proj.thumbnail}
                                    background={proj.background}
                                    bgColor={proj.bgColor}
                                    icon={proj.icon}
                                    status={proj.status}
                                    description={proj.description}
                                    tags={proj.cast.map(c => c.name)}
                                />
                            ))}
                        </div>
                        {similarProjects.length > 8 && (
                            <button
                                onClick={() => setIsDesktopExpanded(!isDesktopExpanded)}
                                className="mt-4 px-8 py-2.5 border border-white/20 rounded-full text-sm font-semibold hover:bg-white/5 transition-colors uppercase tracking-wider font-sans text-white"
                            >
                                {isDesktopExpanded ? "See Less" : "See More"}
                            </button>
                        )}
                    </div>
                )}
            </section>
        </>
    );
}