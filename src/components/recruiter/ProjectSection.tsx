'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import ProgressCard from '../ProgressCard'

const FILTER = ['all', 'full-stack', 'data', 'embedded', 'ai / machine learning', 'misc']
const CARD_WIDTH = 200
const CARD_GAP = 16
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
        <section className="w-full min-h-full flex flex-col gap-8 p-8 items-center lg:items-start lg:p-10">
            {/* Section Title */}
            <div className="relative inline-block text-center lg:text-left">
                <h2 className="font-bebas text-5xl relative z-10 lg:text-6xl">
                    Projects
                </h2>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 w-36 h-3 bg-accent z-0 lg:w-46 lg:h-4" />
            </div>

            {/* Featured Projects */}
            <div className="flex flex-col gap-4 w-full lg:items-start">
                {/* Title */}
                <div className="flex items-baseline gap-2">
                    <Image
                        src="/images/icons/fire-icon.png"
                        alt="fire icon"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                    <h2 className="font-bebas text-2xl text-left lg:text-3xl">Featured Projects</h2>
                </div>

                {/* Filter Bar */}
                <div className="flex w-full items-center justify-between gap-4">

                    {/* Filter Tabs — scrollable */}
                    <div className="flex gap-2 flex-nowrap overflow-x-auto scrollbar-none fade flex-1">
                        {FILTER.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => handleFilterChange(filter)}
                                className={`px-4 py-1.5 text-base font-bold uppercase tracking-widest transition-colors rounded-sm cursor-pointer border whitespace-nowrap ${activeFilter === filter
                                    ? 'bg-accent text-white border-accent'
                                    : 'bg-transparent text-secondary border-secondary/40 hover:border-white hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Arrow Buttons */}
                    <div className="hidden lg:flex gap-2 shrink-0">
                        <button
                            onClick={scrollLeft}
                            disabled={!canScrollLeft}
                            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${canScrollLeft
                                ? 'border-white/30 text-white hover:border-white hover:bg-white/10'
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
                            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${canScrollRight
                                ? 'border-white/30 text-white hover:border-white hover:bg-white/10'
                                : 'border-white/10 text-white/20 cursor-not-allowed'
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                </div>

                {/* Project Cards */}
                <div className="w-full overflow-y-visible">

                    {/* Mobile — native horizontal scroll */}
                    <div className='lg:hidden flex gap-4 flex-nowrap overflow-x-auto scrollbar-none py-4 -my-4'>
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="shrink-0">
                                <ProjectCard
                                    projectName={project.projectName}
                                    route={project.route}
                                    githubUrl={project.githubUrl}
                                    thumbnail={project.thumbnail}
                                    background={project.background}
                                    bgColor={project.bgColor}
                                    icon={project.icon}
                                    status={project.status}
                                    description={project.description}
                                    tags={project.tags}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Desktop — arrow controlled translateX */}
                    <div
                        className="hidden lg:flex gap-4 flex-nowrap pointer-events-none py-12 -my-12 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${featuredIndex * (CARD_WIDTH + CARD_GAP)}px)`
                        }}
                    >
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="pointer-events-auto shrink-0">
                                <ProjectCard
                                    projectName={project.projectName}
                                    route={project.route}
                                    githubUrl={project.githubUrl}
                                    thumbnail={project.thumbnail}
                                    background={project.background}
                                    bgColor={project.bgColor}
                                    icon={project.icon}
                                    status={project.status}
                                    description={project.description}
                                    tags={project.tags}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Currently Building */}
            <div className="flex flex-col gap-4 w-full lg:items-start">
                {/* Title */}
                <div className="flex items-baseline gap-2">
                    <Image
                        src="/images/icons/WIP-icon.png"
                        alt="Work in Progress icon"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                    <h2 className="font-bebas text-2xl text-left lg:text-3xl">Currently Building</h2>
                </div>

                {/* Progress Cards */}
                <div className='flex w-full gap-4 flex-nowrap overflow-x-auto scrollbar-none fade lg:py-6 lg:-my-6 lg:px-6 lg:-mx-6'>
                    {currentlyBuilding.map((project) => (
                        <ProgressCard
                            key={project.id}
                            projectName={project.projectName}
                            route={project.route}
                            background={project.background}
                            bgColor={project.bgColor}
                            icon={project.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
