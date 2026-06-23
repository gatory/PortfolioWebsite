"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StatusBadge, { StatusBadgeProps } from "./StatusBadge";
import PlayButton from "./PlayButton";
import GithubButton from "./GithubButton";
import { TAG_COLORS, DEFAULT_TAG_COLOR } from '@/data/tagDictionary'

export interface ProjectCardProps {
    projectName?: string;
    route?: string;
    githubUrl?: string;
    thumbnail?: string;
    background?: string;
    bgColor?: string;
    icon?: string;
    status?: StatusBadgeProps["status"];
    description?: string;
    tags?: string[];
}

export default function ProjectCard({
    projectName = "Project Name",
    route = "/",
    githubUrl = "",
    thumbnail,
    background,
    bgColor = "#7B46B4",
    icon = "/images/icons/default-icon.png",
    status = "completed",
    description = "Project Description",
    tags = ['Next.js'],
}: ProjectCardProps) {
    const router = useRouter();
    const cardRef = useRef<HTMLDivElement>(null);
    const [originClass, setOriginClass] = useState("origin-center");

    const handleMouseEnter = () => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const padding = 48; // Safe padding buffer to detect edges

        if (rect.left < padding) {
            setOriginClass("origin-left");
        } else if (window.innerWidth - rect.right < padding) {
            setOriginClass("origin-right");
        } else {
            setOriginClass("origin-center");
        }
    };

    const CardFront = () => (
        <div className="relative w-full h-full selection:cursor-not-allowed">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: thumbnail ? undefined : bgColor }}
            >
                {thumbnail && (
                    <Image src={thumbnail} alt={projectName} fill className="object-cover" />
                )}
            </div>

            {/* Icon for no thumbnail */}
            {!thumbnail && icon && (
                <div className="absolute left-1/2 bottom-24 lg:bottom-38 -translate-x-1/2">
                    <Image
                        src={icon}
                        alt={`${projectName} icon`}
                        width={96}
                        height={96}
                        className="w-16 h-16 lg:w-24 lg:h-24"
                    />
                </div>
            )}

            {/* Gradient */}
            <div className={`absolute inset-0 ${thumbnail
                ? 'bg-linear-to-t from-black via-black/60 to-transparent'
                : 'bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.6)_100%)]'
                }`} />

            {/* Status Badge */}
            <StatusBadge status={status} />

            {/* Title */}
            <div className="absolute bottom-5 left-0 w-full px-2 text-center z-20 font-bebas">
                <h2 className="text-lg leading-tight line-clamp-2 lg:text-3xl">{projectName}</h2>
                {tags.length > 0 && (
                    <p className="text-sm lg:text-xl tracking-wide text-secondary mt-1 line-clamp-1">
                        {tags.slice(0, 3).join(' · ')}
                    </p>
                )}
            </div>
        </div>
    );
    return (
        <div className="relative w-35 h-55 shrink-0 lg:w-50 lg:h-80">
            {/* Mobile */}
            <Link
                href={route}
                className="lg:hidden absolute inset-0 rounded-lg overflow-hidden shadow-md block">
                <CardFront />
            </Link>


            {/* Desktop */}
            {/* Scale wrapper */}
            <div
                ref={cardRef}
                onMouseEnter={handleMouseEnter}
                className={`hidden lg:block group relative w-full h-full hover:scale-120 rounded-xl transition-transform duration-500 cursor-pointer z-10 hover:z-100 ${originClass} pointer-events-auto`}
            >
                {/* Perspective + flip wrapper */}
                <div
                    className="relative w-full h-full transition-transform duration-500 group-hover:transform-[rotateY(180deg)]"
                    style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                    }}
                >
                    {/* Front Face */}
                    <div
                        className="absolute inset-0 overflow-hidden font-bebas rounded-xl group-hover:ring-2 group-hover:ring-white"
                        style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateY(0deg) translateZ(0)',
                            backgroundColor: thumbnail ? undefined : bgColor,
                        }}
                    >
                        <CardFront />
                    </div>

                    {/* Back Face */}
                    <div
                        className="absolute inset-0 overflow-hidden rounded-xl group-hover:ring-2 group-hover:ring-white"
                        style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg) translateZ(0)',
                            backgroundColor: background ? undefined : bgColor,
                        }}
                    >
                        {/* Background */}
                        {background && (
                            <Image src={background} alt={projectName} fill className="object-cover" />
                        )}

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/70" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full p-6">
                            <h3 className="font-bebas text-2xl leading-tight mb-1">{projectName}</h3>
                            <p className="font-barlow text-md text-secondary line-clamp-3 mb-3">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-3">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${TAG_COLORS[tag] ?? DEFAULT_TAG_COLOR}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-auto">
                                <PlayButton projectOverviewRoute={route} />
                                {githubUrl && <GithubButton githubRepoLink={githubUrl} size="sm" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}