"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export interface ProgressCardProps {
    projectName?: string;
    route?: string;
    progress?: number;
    background?: string;
    bgColor?: string;
    icon?: string;
}

export default function ProgressCard({
    projectName = "Upcoming Project",
    route,
    progress = 20,
    background,
    bgColor = "#2B0B0B",
    icon = "/images/icons/default-icon.png",
}: ProgressCardProps) {
    const router = useRouter();
    const cardRef = useRef<HTMLDivElement>(null);
    const [originClass, setOriginClass] = useState("origin-center");
    const [isHovered, setIsHovered] = useState(false);
    const bgImage = background;

    const handleMouseEnter = () => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const padding = 64; // Increased safe padding buffer

        if (rect.left < padding) {
            setOriginClass("origin-left");
        } else if (window.innerWidth - rect.right < padding) {
            setOriginClass("origin-right");
        } else {
            setOriginClass("origin-center");
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        if (route) {
            router.push(route);
        }
    };

    return (
        <div 
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className={`group relative flex flex-col justify-between w-60 h-40 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/10 transition-all duration-500 pointer-events-auto shrink-0 z-10 hover:z-50 ${isHovered ? "scale-120" : ""} ${originClass} ${
                route ? "cursor-pointer hover:border-white/40" : ""
            }`}
            style={{ backgroundColor: bgImage ? "#000000" : bgColor }}
        >
            {bgImage && (
                <Image
                    src={bgImage}
                    alt={`${projectName} background`}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
            )}

            {!bgImage && icon && (
                <>
                    <Image
                        src={icon}
                        alt={`${projectName} icon`}
                        width={64}
                        height={64}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                </>
            )}

            <div className="relative z-10 p-5 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-3 overflow-hidden">
                        {icon && (
                            <Image 
                                src={icon} 
                                alt={`${projectName} icon`} 
                                width={24} 
                                height={24} 
                                className="object-contain shrink-0"
                            />
                        )}
                        <h3 className="font-bebas text-2xl text-primary leading-tight truncate">
                            {projectName}
                        </h3>
                    </div>
                </div>

                {/* Progress Details */}
                <div className="mt-auto flex justify-between items-end pb-1">
                    <span className="font-barlow text-xs font-semibold text-white/60 uppercase tracking-widest">
                        Progress
                    </span>
                    <span className="font-bebas text-lg text-accent leading-none">
                        {progress}%
                    </span>
                </div>
            </div>

            {/* Progress Bar Bottom */}
            <div className="relative z-10 w-full h-1.5 bg-black/50">
                <div 
                    className="h-full bg-accent transition-all duration-1000 ease-out"
                    style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
                />
            </div>
        </div>
    );
}