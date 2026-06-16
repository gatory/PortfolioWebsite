"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StatusBadge, { StatusBadgeProps } from "./StatusBadge";
import PlayButton from "./PlayButton";
import GithubButton from "./GithubButton";

export interface ProjectCardProps {
    projectName?: string;
    route?: string;
    githubUrl?: string;
    thumbnail?: string;
    background?: string;
    bgColor?: string;
    icon?: string;
    stack?: string[];
    status?: StatusBadgeProps["status"];
    description?: string;
    tags?: string[];
}

const TAG_COLORS = [
    "bg-blue-500/20 text-blue-200 border-blue-500/30",
    "bg-purple-500/20 text-purple-200 border-purple-500/30",
    "bg-emerald-500/20 text-emerald-200 border-emerald-500/30",
    "bg-amber-500/20 text-amber-200 border-amber-500/30",
    "bg-rose-500/20 text-rose-200 border-rose-500/30",
];

export default function ProjectCard({
    projectName = "Project Name",
    route = "/",
    githubUrl = "",
    thumbnail,
    background,
    bgColor = "#7B46B4",
    icon = "/images/icons/default-icon.png",
    stack = [],
    status = "complete",
    description = "Project Description",
    tags = ['Next.js'],
}: ProjectCardProps) {
    const router = useRouter();

    return (
        <div
            className="group relative w-40 h-60 hover:w-64 hover:h-72 rounded-xl transition-all duration-500 cursor-pointer z-10 hover:z-20"
            style={{ perspective: "1000px" }}
        >
            <div
                className="relative w-full h-full transition-transform duration-500 group-hover:transform-[rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 overflow-hidden font-bebas rounded-xl z-20 transition-shadow duration-500 group-hover:ring-2 group-hover:ring-white"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(0deg) translateZ(0)",
                        backgroundColor: thumbnail ? undefined : bgColor,
                    }}
                    onClick={() => {
                        if (typeof window !== "undefined") {
                            const isMobile = window.matchMedia('(hover: none)').matches || window.innerWidth <= 768;
                            if (isMobile && route) {
                                router.push(route);
                            }
                        }
                    }}
                >
                    {thumbnail && (
                        <Image
                            src={thumbnail}
                            alt={projectName}
                            fill
                            className="object-cover"
                        />
                    )}

                    {/* Front Gradient */}
                    <div
                        className={`absolute inset-0 ${thumbnail
                            ? "bg-linear-to-t from-black via-black/60 to-transparent"
                            : "bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.6)_100%)]"
                            }`}
                    />

                    {/* Status Badge */}
                    <StatusBadge status={status}/>

                    {/* Icon Logic for non-thumbnail */}
                    {!thumbnail && (
                        <Image
                            src={icon}
                            alt={`${projectName} icon`}
                            width={64}
                            height={64}
                            className="absolute top-16 left-1/2 -translate-x-1/2"
                        />
                    )}

                    {/* Front Title */}
                    <div className="absolute bottom-0 left-0 w-full px-2 pb-3 text-center">
                        <h2 className="text-xl leading-tight line-clamp-2">
                            {projectName}
                        </h2>
                        {stack && stack.length > 0 && (
                            <p className="text-xs tracking-wide text-secondary mt-1">
                                {stack.join(" · ")}
                            </p>
                        )}
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 overflow-hidden p-4 flex flex-col justify-center items-center rounded-xl shadow-xl z-10 transition-shadow duration-500 group-hover:ring-2 group-hover:ring-white"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg) translateZ(0)",
                        backgroundColor: background ? undefined : bgColor,
                    }}
                >
                    {background && (
                        <Image
                            src={background}
                            alt={`${projectName} background`}
                            fill
                            className="object-cover"
                        />
                    )}

                    {/* Icon Logic for non-thumbnail */}
                    {!thumbnail && (
                        <Image
                            src={icon}
                            alt={`${projectName} icon`}
                            width={64}
                            height={64}
                            className="absolute justify-center items-center"
                        />
                    )}

                    <div
                        className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/80"
                    />
                    
                    <div className="relative z-10 flex flex-col w-full h-full text-left">
                        {/* Text Content */}
                        <div className="flex flex-col justify-start gap-2">
                            <h3 className="font-bebas text-xl text-primary mb-1 leading-tight">
                                {projectName}
                            </h3>

                            {description && (
                                <p className="font-barlow text-base text-secondary line-clamp-3 mb-4">
                                    {description}
                                </p>
                            )}
                        </div>
                        

                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap justify-start gap-1.5 mb-4">
                                {tags.map((tag, index) => (
                                    <span key={tag} className={`text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${TAG_COLORS[index % TAG_COLORS.length]}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex justify-start gap-3 mt-auto pb-2">
                            {route && (
                                <PlayButton projectOverviewRoute={route} />
                            )}
                            {githubUrl && (
                                <GithubButton githubRepoLink={githubUrl} size="sm"/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
