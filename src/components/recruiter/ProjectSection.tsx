'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectSection() {
    const [activeFilter, setActiveFilter] = useState('all')

    const filters = ['all', 'full-stack', 'data', 'embedded', 'ai/machine-learning', 'misc']

    const featuredProjects = projects.filter(p => p.featured)

    const filteredProjects = activeFilter === 'all'
        ? featuredProjects
        : featuredProjects.filter(p => p.category === activeFilter)
    return (
        <section className="w-full min-h-screen flex flex-col gap-8 p-8">

            {/* Section Title */}
            <div className="relative inline-block">
                <h2 className="font-bebas text-5xl relative z-10">Projects</h2>
                <div className="absolute bottom-0 left-6 w-36 h-3 bg-accent z-0" />
            </div>

            {/* Featured Projects */}
            <div className="flex flex-col gap-4">
                <h3 className="font-bebas text-3xl">Featured Projects</h3>

                {/* Filter Tabs */}
                <div className="flex gap-2 flex-wrap">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-1.5 text-base font-bold uppercase tracking-widest transition-colors rounded-sm cursor-pointer border ${
                                activeFilter === filter
                                    ? 'bg-accent text-white border-accent'
                                    : 'bg-transparent text-secondary border-secondary/40 hover:border-white hover:text-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Cards Row */}
                <div className="relative flex flex-nowrap overflow-x-auto gap-4 py-10 -my-8 px-4 -mx-4 pointer-events-none">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            projectName={project.projectName}
                            route={project.route}
                            icon={project.icon}
                            githubUrl={project.githubUrl}
                            thumbnail={project.thumbnail}
                            background={project.background}
                            status={project.status}
                            description={project.description}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>

            {/* Currently Building */}
            <div className="flex flex-col gap-4">
                <h3 className="font-bebas text-3xl">Currently Building</h3>
                <div className="relative flex flex-nowrap overflow-x-auto gap-4 py-8 -my-8 px-4 -mx-4 pointer-events-none">
                    {projects.filter(p => p.currentlyBuilding).map((project) => (
                        <ProjectCard
                            key={project.id}
                            projectName={project.projectName}
                            route={project.route}
                            githubUrl={project.githubUrl}
                            thumbnail={project.thumbnail}
                            background={project.background}
                            status={project.status}
                            description={project.description}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}
