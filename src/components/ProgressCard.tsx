"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
    route = "/",
    progress = 20,
    background,
    bgColor = "#7B46B4",
    icon = "/images/icons/default-icon.png",
}: ProgressCardProps) {
    return (
        <div className="relative w-50 h-30 shrink-0 lg:w-70 lg:h-50 group">
            <Link
                href={route}
                className="absolute inset-0 rounded-xl overflow-hidden shadow-md block ring-0 group-hover:ring-2 group-hover:ring-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
                <div className="relative w-full h-full select-none">
                    {/* Background */}
                    <div
                        className="absolute inset-0"
                        style={{ backgroundColor: background ? undefined : bgColor }}
                    >
                        {background && (
                            <Image src={background} alt={projectName} fill className="object-cover opacity-40" />
                        )}
                    </div>

                    {/* Icon for no thumbnail */}
                    {!background && icon && (
                        <div className="relative flex w-full h-full justify-center items-center">
                            <Image src={icon}
                                alt={`${projectName} icon`}
                                width={96}
                                height={96}
                                className="w-16 h-16 lg:w-24 lg:h-24" />
                        </div>
                    )}

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 lg:via-black/80 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-3 left-3 right-3 z-20">
                        <h2 className="font-bebas text-accent text-md uppercase text-bold tracking-wider leading-none lg:text-xl">
                            In Progress
                        </h2>

                        <h3 className="font-bold text-white uppercase text-xl -mt-1 lg:text-2xl">
                            {projectName}
                        </h3>

                        <div className="flex items-center justify-between w-full mt-1">
                            <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_2px_rgba(239,68,68,0.8)]" />

                            <span className="font-barlow text-xs font-semibold text-white/60 uppercase tracking-wider">
                                {progress}% Complete
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
                        <div
                            className="h-full bg-accent transition-all duration-700"
                            style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
}