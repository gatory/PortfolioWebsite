"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import StatusBadge from "@/components/StatusBadge";
import GithubButton from "@/components/GithubButton";
import { techItems } from "@/data/techStack";

const categoryLabels: Record<Project["category"], string> = {
    "full-stack": "Full-Stack",
    "embedded": "Embedded",
    "data": "Data",
    "ai / machine learning": "AI / Machine Learning",
    "misc": "Misc"
};

const isVideo = (path: string) => {
    return /\.(mp4|webm|ogg|mov)$/i.test(path);
};

export default function HeroSection({ project }: { project: Project }) {
    const default_bgColor = "#7B46B4"
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextSlide = () => {
        if (!project.scenes) return;
        setCurrentIndex((prev) => (prev + 1) % project.scenes!.length);
    };

    const prevSlide = () => {
        if (!project.scenes) return;
        setCurrentIndex((prev) => (prev - 1 + project.scenes!.length) % project.scenes!.length);
    };

    return (
        <>
            {/* Mobile View */}
            <section className="lg:hidden flex flex-col w-full text-foreground">
                {/* Screen 1: Hero Cover */}
                <div className="relative w-full min-h-dvh flex flex-col">
                    {/* Background Image Container */}
                    <div className="relative w-full h-[35vh] min-h-55 shrink-0">
                        {project.background ? (
                            <Image src={project.background}
                                alt={`${project.projectName} background`}
                                fill
                                className="object-cover" />
                        ) : (
                            <div
                                className="absolute inset-0"
                                style={{ backgroundColor: project.bgColor || default_bgColor }}
                            />
                        )}
                        <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/40 to-background" />

                        {/* Thumbnail Container */}
                        <div className="absolute w-55 h-87 z-25 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,1)] border border-white/20">
                            {/* Background */}
                            <div
                                className="absolute inset-0"
                                style={{ backgroundColor: project.thumbnail ? undefined : project.bgColor || default_bgColor }}
                            >
                                {project.thumbnail && (
                                    <Image src={project.thumbnail} alt={project.projectName} fill className="object-cover" />
                                )}
                            </div>

                            {/* Icon for no thumbnail */}
                            {!project.thumbnail && project.icon && (
                                <div className="absolute left-1/2 top-25 -translate-x-1/2">
                                    <Image
                                        src={project.icon}
                                        alt={`${project.projectName} icon`}
                                        width={96}
                                        height={96}
                                        className="w-28 h-28"
                                    />
                                </div>
                            )}

                            {/* Gradient */}
                            <div className={`absolute inset-0 ${project.thumbnail
                                ? 'bg-linear-to-t from-black/95 via-black/25 to-transparent'
                                : 'bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.6)_100%)]'
                                }`} />
                        </div>
                    </div>

                    {/* Content Container (fills remaining viewport height) */}
                    <div className="flex-1 flex flex-col justify-center items-center pt-45 pb-8 px-6 gap-y-5 text-center w-full">
                        {/* Category Tag */}
                        <p className="text-lg font-semibold tracking-wide text-accent ring-2 ring-accent rounded-sm px-2">
                            {project.year
                                ? `${categoryLabels[project.category]} · ${project.year}`
                                : categoryLabels[project.category]}
                        </p>
                        {/* Title */}
                        <div className="px-6 text-center font-bebas z-25">
                            <h2 className="text-5xl leading-tight line-clamp-2">{project.projectName}</h2>
                        </div>
                        {/* Status Badge & Run Time */}
                        <div className="flex items-center w-max gap-x-6">
                            <StatusBadge status={project.status} className="relative z-10 w-fit text-lg px-2" />
                            {/* Run Time */}
                            {project.runtime && (
                                <div className="flex items-center gap-x-1.5 text-lg font-medium text-primary">
                                    {/* clock icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>{project.runtime}</span>
                                </div>
                            )}
                        </div>
                        {/* Action Buttons */}
                        <div className="flex flex-row justify-center gap-4 z-20">
                            {project.writingSample && (
                                <Link
                                    href={project.writingSample}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Read more!"
                                    className="group bg-[#3183FF] hover:bg-[#3183FF]/90 rounded-2xl flex items-center justify-center hover:scale-105 transition-all w-36 h-9 sm:w-45 sm:h-10 gap-x-1.5 sm:gap-x-2 shadow-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="black"
                                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    <span className="font-barlow font-medium text-black text-lg sm:text-2xl leading-none pt-0.5">
                                        Read more!
                                    </span>
                                </Link>
                            )}
                            {project.githubUrl && <GithubButton githubRepoLink={project.githubUrl} />}
                        </div>
                    </div>
                </div>

                {/* Screen 2: Details / Cast & Credits */}

                <div className="w-full flex flex-col px-6 py-10 gap-y-4">
                    <div className="w-full">
                        <h2 className="text-3xl mb-3 font-medium">Overview</h2>
                        <p className="text-lg text-secondary leading-relaxed font-light">
                            {project.overview}
                        </p>
                    </div>

                    {/* Scene Carousel */}
                    {project.scenes && project.scenes.length > 0 ? (
                        <div className="w-full flex flex-col gap-y-3">
                            <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 group shadow-lg">
                                {/* Expand Fullscreen Button */}
                                <button
                                    onClick={() => setIsLightboxOpen(true)}
                                    className="absolute right-3 bottom-3 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 backdrop-blur-xs transition-colors z-30"
                                    aria-label="View Fullscreen"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                                    </svg>
                                </button>

                                {/* Images Row */}
                                <div
                                    className="flex w-full h-full transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                >
                                    {project.scenes.map((scene, idx) => (
                                        <div
                                            key={idx}
                                            className="relative w-full h-full shrink-0 flex items-center justify-center cursor-zoom-in"
                                            onClick={() => !isVideo(scene) && setIsLightboxOpen(true)}
                                        >
                                            {isVideo(scene) ? (
                                                <video
                                                    src={scene}
                                                    controls
                                                    className="w-full h-full object-contain"
                                                    playsInline
                                                    preload="metadata"
                                                />
                                            ) : (
                                                <Image
                                                    src={scene}
                                                    alt={`${project.projectName} scene ${idx + 1}`}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 100vw, 80vw"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                {project.scenes.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevSlide}
                                            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-black/60 text-secondary rounded-full p-2 backdrop-blur-xs transition-colors z-10"
                                            aria-label="Previous scene"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-black/60 text-secondary rounded-full p-2 backdrop-blur-xs transition-colors z-10"
                                            aria-label="Next scene"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                {/* Indicators */}
                                {project.scenes.length > 1 && (
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                        {project.scenes.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentIndex(idx)}
                                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-accent" : "w-2 bg-white/40"
                                                    }`}
                                                aria-label={`Go to scene ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col gap-y-3">
                            <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-950/40 border border-white/5 flex flex-col items-center justify-center gap-3 text-center p-6 shadow-inner">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-12 h-12 text-zinc-600 animate-pulse"
                                >
                                    <path d="m22 8-6 4 6 4V8Z" />
                                    <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                                </svg>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-bebas text-xl tracking-wide text-zinc-500">
                                        No Scenes Available
                                    </h4>
                                    <p className="font-barlow text-xs text-zinc-600 max-w-xs">
                                        Behind-the-scenes captures or demos are currently not available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="w-full pt-4 flex flex-col items-start">
                        <h2 className="text-3xl mb-3 font-medium">Casts & Credits</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            {project.cast && project.cast.length > 0 ? (
                                project.cast.map((member) => {
                                    const techInfo = techItems.find(t => t.name.toLowerCase() === member.name.toLowerCase());
                                    const iconSrc = techInfo ? techInfo.icon : member.icon;

                                    return (
                                        <div key={member.name} className="flex items-center gap-x-4">
                                            <div className="relative w-14 h-14 shrink-0">
                                                <Image
                                                    src={iconSrc || "/images/icons/default-icon.png"}
                                                    alt={`${member.name} logo`}
                                                    fill
                                                    className="object-contain"
                                                    sizes="24px"
                                                />
                                            </div>
                                            <div className="flex flex-col text-left">
                                                <span className="tracking-wider font-medium text-white leading-none">
                                                    {member.name}
                                                </span>
                                                <span className="text-xs text-zinc-400 font-light mt-1.5 leading-none">
                                                    {member.role}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-secondary text-sm">No cast specified.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Desktop View */}
            <section className="relative hidden lg:flex flex-col w-full h-fit text-foreground overflow-hidden">
                {/* Background Image Container */}
                <div className="absolute inset-0 w-full h-screen z-0">
                    {project.background ? (
                        <Image src={project.background}
                            alt={`${project.projectName} background`}
                            fill
                            className="object-cover" />
                    ) : (
                        <div
                            className="absolute inset-0"
                            style={{ backgroundColor: project.bgColor || default_bgColor }}
                        />
                    )}
                    <div className="absolute inset-0 bg-linear-to-b from-background/44 to-background" />
                </div>

                {/* Foreground Container (Flex Row for content layout) */}
                <div className="relative z-10 w-full mx-auto px-26 md:px-15 h-full flex flex-row items-start justify-between gap-16 pt-40">

                    {/* 1. Thumbnail Container */}
                    <div className="relative w-68 aspect-2/3 shrink-0 overflow-hidden rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,1)] border border-white/20">
                        {/* Background */}
                        <div
                            className="absolute inset-0"
                            style={{ backgroundColor: project.thumbnail ? undefined : project.bgColor || default_bgColor }}
                        >
                            {project.thumbnail && (
                                <Image src={project.thumbnail} alt={project.projectName} fill className="object-cover" />
                            )}
                        </div>

                        {/* Icon for no thumbnail */}
                        {!project.thumbnail && project.icon && (
                            <div className="absolute left-1/2 top-25 -translate-x-1/2">
                                <Image
                                    src={project.icon}
                                    alt={`${project.projectName} icon`}
                                    width={96}
                                    height={96}
                                    className="w-28 h-28"
                                />
                            </div>
                        )}

                        {/* Gradient */}
                        <div className={`absolute inset-0 ${project.thumbnail
                            ? 'bg-linear-to-t from-black/95 via-black/25 to-transparent'
                            : 'bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.6)_100%)]'
                            }`} />
                    </div>

                    {/* 2. Content Container */}
                    <div className="flex-1 flex flex-col items-start gap-y-6 text-start">
                        <div className="relative flex flex-col gap-y-2">
                            {/* Category Tag */}
                            <span className="w-fit text-2xl font-medium tracking-wider text-accent ring-2 ring-accent rounded-sm px-2.5 py-0.5">
                                {project.year
                                    ? `${categoryLabels[project.category]} · ${project.year}`
                                    : categoryLabels[project.category]}
                            </span>
                            {/* Title */}
                            <h2 className="text-7xl font-bebas tracking-wide leading-none">{project.projectName}</h2>

                            {/* Status Badge & Run Time */}
                            <div className="flex items-center gap-x-6 -mt-1">
                                <StatusBadge status={project.status} className="text-xl px-2" />
                                {project.runtime && (
                                    <div className="flex items-center gap-x-1.5 text-2xl font-medium text-primary leading-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <span>{project.runtime}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {project.writingSample && (
                                <Link
                                    href={project.writingSample}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Read more!"
                                    className="group bg-[#3183FF] hover:bg-[#3183FF]/90 rounded-2xl flex items-center justify-center hover:scale-105 transition-all w-36 h-9 sm:w-45 sm:h-10 gap-x-1.5 sm:gap-x-2 shadow-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="black"
                                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    <span className="font-barlow font-medium text-black text-lg sm:text-2xl leading-none pt-0.5">
                                        Read more!
                                    </span>
                                </Link>
                            )}
                            {project.githubUrl && <GithubButton githubRepoLink={project.githubUrl} />}
                        </div>

                        {/* Project Overview */}
                        <div className="flex flex-col gap-y-2">
                            <span className="text-3xl tracking-wider text-start font-medium">Overview</span>
                            {project.overview && (
                                <p className="text-xl text-secondary font-light max-w-2xl leading-relaxed">
                                    {project.overview}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* 3. Cast & Credits (Tools) Container */}
                    <div className="w-80 shrink-0 flex flex-col items-start bg-black/35 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h3 className="text-3xl font-medium mb-4">Cast & Credits</h3>
                        <div className="flex flex-col gap-y-5 w-full">
                            {project.cast && project.cast.length > 0 ? (
                                project.cast.map((member) => {
                                    const techInfo = techItems.find(t => t.name.toLowerCase() === member.name.toLowerCase());
                                    const iconSrc = techInfo ? techInfo.icon : member.icon;

                                    return (
                                        <div key={member.name} className="flex items-center gap-x-5">
                                            <div className="relative w-14 h-14 shrink-0">
                                                <Image
                                                    src={iconSrc || "/images/icons/default-icon.png"}
                                                    alt={`${member.name} logo`}
                                                    fill
                                                    className="object-contain"
                                                    sizes="56px"
                                                />
                                            </div>
                                            <div className="flex flex-col text-left">
                                                <span className="text-2xl tracking-wider font-medium text-primary leading-none">
                                                    {member.name}
                                                </span>
                                                <span className="text-base font-sans text-secondary mt-2 leading-none">
                                                    {member.role}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-secondary text-sm">No cast specified.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="relative w-full px-25 mt-15 mb-4">
                    <div className="flex items-center gap-16">
                        {/* Director Notes */}
                        <div className="w-[30%] shrink-0 pl-10 flex flex-col justify-center self-stretch">
                            <h2 className="text-medium text-4xl text-primary mb-2">
                                {"Director's Note"}
                            </h2>

                            <p className="text-xl text-secondary leading-relaxed">
                                {project.directorNote ? project.directorNote : "No director's note specified."}
                            </p>
                        </div>

                        {/* Carousel */}
                        <div className="flex-1 min-w-0 px-20">
                            {project.scenes && project.scenes.length > 0 ? (
                                <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 group shadow-lg">
                                    {/* Expand Fullscreen Button */}
                                    <button
                                        onClick={() => setIsLightboxOpen(true)}
                                        className="absolute right-4 bottom-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 backdrop-blur-xs transition-colors z-30 opacity-0 group-hover:opacity-100 duration-300"
                                        aria-label="View Fullscreen"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                                        </svg>
                                    </button>

                                    {/* Images Row */}
                                    <div
                                        className="flex w-full h-full transition-transform duration-500 ease-in-out"
                                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                    >
                                        {project.scenes.map((scene, idx) => (
                                            <div
                                                key={idx}
                                                className="relative w-full h-full shrink-0 flex items-center justify-center cursor-zoom-in"
                                                onClick={() => !isVideo(scene) && setIsLightboxOpen(true)}
                                            >
                                                {isVideo(scene) ? (
                                                    <video
                                                        src={scene}
                                                        controls
                                                        className="w-full h-full object-contain"
                                                        playsInline
                                                        preload="metadata"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={scene}
                                                        alt={`${project.projectName} scene ${idx + 1}`}
                                                        fill
                                                        className="object-contain"
                                                        sizes="(max-width: 1200px) 80vw, 50vw"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Navigation Arrows */}
                                    {project.scenes.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevSlide}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 backdrop-blur-xs transition-colors z-10 opacity-0 group-hover:opacity-100 duration-300"
                                                aria-label="Previous scene"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextSlide}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 backdrop-blur-xs transition-colors z-10 opacity-0 group-hover:opacity-100 duration-300"
                                                aria-label="Next scene"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </button>
                                        </>
                                    )}

                                    {/* Indicators */}
                                    {project.scenes.length > 1 && (
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                            {project.scenes.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentIndex(idx)}
                                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-accent" : "w-2 bg-white/40 hover:bg-white/60"
                                                        }`}
                                                    aria-label={`Go to scene ${idx + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-950/40 border border-white/5 flex flex-col items-center justify-center gap-4 text-center p-6 shadow-inner">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-16 h-16 text-zinc-600 animate-pulse"
                                    >
                                        <path d="m22 8-6 4 6 4V8Z" />
                                        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                                    </svg>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="font-bebas text-2xl tracking-wide text-zinc-500">
                                            No Scenes Available
                                        </h4>
                                        <p className="font-barlow text-sm text-zinc-600 max-w-xs">
                                            Behind-the-scenes captures or demos are currently not available for this project.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </section>

            {/* Lightbox Modal (Fullscreen zoom) */}
            {isLightboxOpen && project.scenes && project.scenes.length > 0 && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm animate-fade-in">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50"
                        aria-label="Close fullscreen"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Lightbox Navigation (Previous) */}
                    {project.scenes.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50"
                            aria-label="Previous scene"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    )}

                    {/* Active Content container */}
                    <div className="relative w-full max-w-5xl lg:max-w-3xl h-full flex items-center justify-center" onClick={() => setIsLightboxOpen(false)}>
                        <div className="relative w-full h-[80vh] lg:h-[60vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            {isVideo(project.scenes[currentIndex]) ? (
                                <video
                                    src={project.scenes[currentIndex]}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain rounded-lg"
                                    playsInline
                                />
                            ) : (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={project.scenes[currentIndex]}
                                        alt={`${project.projectName} scene ${currentIndex + 1}`}
                                        fill
                                        className="object-contain rounded-lg"
                                        priority
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Lightbox Navigation (Next) */}
                    {project.scenes.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50"
                            aria-label="Next scene"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    )}
                </div>
            )}
        </>
    );
}