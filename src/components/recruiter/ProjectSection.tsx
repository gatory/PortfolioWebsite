'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import ProgressCard from '../ProgressCard'

const FILTER = ['all', 'full-stack', 'data', 'embedded', 'ai', 'misc']
const CARD_WIDTH = 220 // w-55 in Tailwind = 220px
const CARD_GAP = 16   // gap-4 = 16px
const VISIBLE_COUNT = 6

export default function ProjectSection() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [featuredIndex, setFeaturedIndex] = useState(0)

    const featuredProjects = projects.filter(p => p.featured)
    const currentlyBuilding = projects.filter(p => p.currentlyBuilding)


    const filteredProjects = activeFilter === 'all'
        ? featuredProjects
        : featuredProjects.filter(p => p.category === activeFilter)

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
        setFeaturedIndex(0)
    }

    const canScrollLeft = featuredIndex > 0
    const canScrollRight = featuredIndex + VISIBLE_COUNT < filteredProjects.length

    const scrollLeft = () => setFeaturedIndex(prev => Math.max(0, prev - 1))
    const scrollRight = () => setFeaturedIndex(prev =>
        Math.min(filteredProjects.length - VISIBLE_COUNT, prev + 1)
    )

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
                <div className="flex justify-between items-center w-full gap-4 flex-wrap">
                    <div className="flex gap-2 flex-wrap">
                        {FILTER.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-1.5 text-base font-bold uppercase tracking-widest transition-colors rounded-sm cursor-pointer border ${activeFilter === filter
                                    ? 'bg-accent text-white border-accent'
                                    : 'bg-transparent text-secondary border-secondary/40 hover:border-white hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2 shrink-0">
                        <button
                            onClick={scrollLeft}
                            disabled={!canScrollLeft}
                            suppressHydrationWarning
                            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all text-sm ${
                                canScrollLeft
                                    ? 'border-white/40 text-white hover:border-white hover:bg-white/10'
                                    : 'border-white/10 text-white/20 cursor-not-allowed'
                            }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={scrollRight}
                            disabled={!canScrollRight}
                            suppressHydrationWarning
                            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all text-sm ${
                                canScrollRight
                                    ? 'border-white/40 text-white hover:border-white hover:bg-white/10'
                                    : 'border-white/10 text-white/20 cursor-not-allowed'
                            }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Cards Row */}
                <div className="overflow-hidden py-10 -my-8 px-4 -mx-4 pointer-events-none">
                    <div
                        className="flex gap-4 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${featuredIndex * (CARD_WIDTH + CARD_GAP)}px)`
                        }}
                    >
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <div key={project.id} className="shrink-0">
                                    <ProjectCard
                                        projectName={project.projectName}
                                        route={project.route}
                                        githubUrl={project.githubUrl}
                                        thumbnail={project.thumbnail}
                                        background={project.background}
                                        status={project.status}
                                        description={project.description}
                                        tags={project.tags}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="font-barlow text-secondary text-sm py-8">
                                No projects in this category yet.
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Currently Building */}
            <div className="flex flex-col gap-4">
                <h3 className="font-bebas text-3xl">Currently Building</h3>
                <div className="relative flex flex-nowrap overflow-x-auto gap-4 py-8 -my-8 px-4 -mx-4 pointer-events-none">
                    
                    {projects.filter(p => p.currentlyBuilding).map((project) => (
                        <ProgressCard
                            key={project.id}
                            projectName={project.projectName}
                            route={project.route}
                            background={project.background}
                        />
                        // <ProgressCard />
                    ))}
                </div>
            </div>

        </section>
    )
}
