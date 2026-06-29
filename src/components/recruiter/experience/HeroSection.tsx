"use client"

import GithubButton from "@/components/GithubButton";
import Image from "next/image";
import { Company, companiesData as companies } from "@/data/experience";

export default function HeroSection() {
    return (
        <>
            {/* Mobile */}
            <section className="lg:hidden flex flex-col w-full text-foreground">
                {/* Screen 1: Hero Cover */}
                <div className="relative w-full min-h-dvh flex flex-col">
                    {/* Background Image Container */}
                    <div className="relative w-full h-[35vh] min-h-55 shrink-0">
                        <Image src="/images/experienceCard-bg.png"
                            alt={`experience background`}
                            fill
                            className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/40 to-background" />

                        {/* Thumbnail Container */}
                        <div className="absolute w-55 h-87 z-25 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,1)]">
                            {/* Background */}
                            <div
                                className="absolute inset-0"
                            >
                                <Image src="/images/experienceCard-thumb.png" alt="experience thumbnail" fill className="object-cover" />
                            </div>

                        </div>
                    </div>

                    {/* Content Container (fills remaining viewport height) */}
                    <div className="flex-1 flex flex-col justify-center items-center pt-45 pb-8 px-6 gap-y-5 text-center w-full">
                        {/* Category Tag */}
                        <p className="text-lg font-semibold tracking-wide text-accent ring-2 ring-accent rounded-sm px-2">
                            Career Series
                        </p>
                        {/* Title */}
                        <div className="px-6 text-center font-bebas z-25">
                            <Image src="/images/titlecard.png" alt="titlecard" width={250} height={25} />
                        </div>

                        {/* Run Time And Info */}
                        <div className="flex items-center w-max gap-x-4 flex-wrap justify-center">
                            {/* Star Rating */}
                            <div className="flex items-center gap-x-1.5 text-lg font-medium text-primary bg-white/10 rounded-full px-3 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.321 21.28c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <span className="text-yellow-400 font-bold">9.6</span>
                            </div>

                            {/* Run Time */}
                            <div className="flex items-center gap-x-1.5 text-lg font-medium text-primary bg-white/10 rounded-full px-3 py-1">
                                {/* clock icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span>2022.07 - Present</span>
                            </div>

                            {/* Seasons */}
                            <div className="flex items-center gap-x-1.5 text-lg font-medium text-primary bg-white/10 rounded-full px-3 py-1">
                                <span>1 Season</span>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-row items-center gap-4 mt-2">
                            <GithubButton githubRepoLink="https://github.com/gatory" labelText="GitHub Profile" />
                            <a
                                href="/images/experience/Kuan_Wei_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-36 h-9 sm:w-45 sm:h-10 flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:scale-105 transition-transform"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5"
                                >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                                <h2 className="font-barlow font-medium text-white text-lg sm:text-2xl">
                                    Get Resume
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col px-6 py-10 gap-y-4">
                    <div className="w-full">
                        <h2 className="text-3xl mb-3 font-medium">About Me</h2>
                        <p className="text-lg text-secondary leading-relaxed font-light">
                            Hey I'm Kuan! I'm a full-stack developer and an AI enthusiast from the University of British Columbia CS program based in Vancouver Canada. I love building
                            user-centric applications that can make lives easier and always on the look out for potential startup ideas. I'm a big believer in only building tools that I would use
                            personally. I work primarily with TypeScript, React, and Python but I am always on the look out for new technologies to learn and experiment with. Most Recently, I have been
                            exploring the world of AI and am particularly interested in how it can be used to help enhance productivity and creativity and I am excited to see how it evolves in the coming years.
                        </p>
                    </div>

                    <div className="w-full pt-4 flex flex-col items-start">
                        <h2 className="text-3xl mb-3 font-medium">Cast & Credits</h2>
                        <div className="flex flex-wrap justify-start gap-x-6 gap-y-5 w-full">
                            {companies && companies.length > 0 ? (
                                companies.map((company) => (
                                    <div key={company.name} className="flex items-center gap-x-3 w-[calc(50%-12px)] min-w-35">
                                        <div className="relative w-10 h-10 shrink-0">
                                            <Image
                                                src={company.icon || "/images/icons/default-icon.png"}
                                                alt={`${company.name} logo`}
                                                fill
                                                className="object-contain"
                                                sizes="40px"
                                            />
                                        </div>
                                        <div className="flex flex-col text-left min-w-0">
                                            <span className="tracking-wider text-sm font-medium text-white truncate w-full leading-tight">
                                                {company.name}
                                            </span>
                                            <span className="text-xs font-sans text-zinc-400 font-light mt-1 truncate w-full leading-tight">
                                                {company.role}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-secondary text-sm">No companies specified.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Desktop View */}
            <section className="relative hidden lg:flex flex-col w-full h-fit text-foreground overflow-hidden">
                {/* Background Image Container */}
                <div className="absolute inset-0 w-full h-screen z-0">
                    <Image src="/images/experienceCard-bg.png"
                        alt="experience background"
                        fill
                        className="object-cover -translate-y-32" />
                    <div className="absolute inset-0 bg-linear-to-b from-background/44 via-background/80 to-background" />
                </div>

                {/* Foreground Container (Flex Row for content layout) */}
                <div className="relative z-10 w-full mx-auto px-26 lg:px-15 h-full flex flex-row items-start justify-between gap-16 pt-40">

                    {/* 1. Thumbnail Container */}
                    <div className="relative w-69 aspect-2/3 shrink-0 overflow-hidden rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,1)]">
                        {/* Background */}
                        <div
                            className="absolute inset-0"
                        >
                            <Image src="/images/experienceCard-thumb.png" alt="experience thumbnail" fill className="object-cover" />
                        </div>
                    </div>

                    {/* 2. Content Container */}
                    <div className="flex-1 flex flex-col items-start self-center gap-y-6 text-start">
                        <div className="relative flex flex-col gap-y-2 lg:gap-y-4">
                            {/* Category Tag */}
                            <span className="w-fit text-xl font-medium tracking-wider text-accent ring-2 ring-accent rounded-sm px-2.5 py-0.5">
                                Career Series
                            </span>
                            {/* Title */}
                            <Image src="/images/titlecard-left-aligned.png" alt="experience title" width={350} height={70} />

                            {/* Run Time And Info */}
                            <div className="flex items-center w-max gap-x-4 flex-wrap justify-center">
                                {/* Star Rating */}
                                <div className="flex items-center gap-x-1.5 text-lg font-medium text-primary bg-white/20 rounded-full px-3 py-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.321 21.28c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-yellow-400 font-bold">9.6</span>
                                </div>

                                {/* Run Time */}
                                <div className="flex items-center gap-x-1.5 text-lg font-medium text-primary bg-white/20 rounded-full px-3 py-1">
                                    {/* clock icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>2022.07 - Present</span>
                                </div>

                                {/* Seasons */}
                                <div className="flex items-center gap-x-1.5 text-lg font-medium text-primary bg-white/20 rounded-full px-3 py-1">
                                    <span>1 Season</span>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-row items-center gap-4 mt-2">
                            <GithubButton githubRepoLink="https://github.com/gatory" labelText="GitHub Profile" />
                            <a
                                href="/images/experience/Kuan_Wei_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-36 h-9 sm:w-45 sm:h-10 flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:scale-105 transition-transform"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5"
                                >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                                <h2 className="font-barlow font-medium text-white text-lg sm:text-2xl">
                                    Get Resume
                                </h2>
                            </a>
                        </div>
                    </div>

                    {/* 3. Cast & Credits Container */}
                    <div className="w-80 shrink-0 flex flex-col items-start bg-black/35 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                        <h3 className="text-3xl font-medium mb-4">Cast & Credits</h3>
                        <div className="flex flex-col gap-y-5 w-full">
                            {companies && companies.length > 0 ? (
                                companies.map((company) => (
                                    <div key={company.name} className="flex items-center gap-x-5">
                                        <div className="relative w-14 h-14 shrink-0">
                                            <Image
                                                src={company.icon || "/images/icons/default-icon.png"}
                                                alt={`${company.name} logo`}
                                                fill
                                                className="object-contain"
                                                sizes="56px"
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-2xl tracking-wider font-medium text-primary leading-none">
                                                {company.name}
                                            </span>
                                            <span className="text-base font-sans text-secondary mt-2 leading-none">
                                                {company.role}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-secondary text-sm">No companies specified.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* About Me Section (below the main row banner, spanning the full content grid width) */}
                <div className="hidden lg:flex relative z-10 w-full mx-auto px-26 lg:px-15 py-6 flex-col gap-y-4">
                    <h3 className="text-3xl tracking-wider text-start font-medium text-primary">About Me</h3>
                    <p className="text-xl text-secondary leading-relaxed">
                        Hey I'm Kuan! I'm a full-stack developer and an AI enthusiast from the University of British Columbia CS program based in Vancouver Canada. I love building
                        user-centric applications that can make lives easier and always on the look out for potential startup ideas. I'm a big believer in only building tools that I would use
                        personally. I work primarily with TypeScript, React, and Python but I am always on the look out for new technologies to learn and experiment with. Most Recently, I have been
                        exploring the world of AI and am particularly interested in how it can be used to help enhance productivity and creativity and I am excited to see how it evolves in the coming years.
                    </p>
                </div>
            </section>
        </>
    );
}