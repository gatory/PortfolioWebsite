import { TechItem } from "@/data/techStack";
import Image from "next/image";

export interface FilmStripProps {
    techItem: TechItem;
}

export default function FilmStrip({ techItem }: FilmStripProps) {
    return (
        <div
            className="group flex flex-col items-center justify-between w-28 h-24 lg:w-46 lg:h-36 bg-[#111] hover:bg-[#181818] p-1.5 lg:p-3 select-none cursor-default transition-all duration-300"
            style={{
                ['--brand' as any]: techItem.brandColor || '#555',
            }}
        >
            {/* Top Sprockets */}
            <div className="flex justify-between w-full px-1">
                <div className="w-4 h-1 lg:w-6 lg:h-2 bg-white" />
                <div className="w-4 h-1 lg:w-6 lg:h-2 bg-white" />
                <div className="w-4 h-1 lg:w-6 lg:h-2 bg-white" />
                <div className="w-4 h-1 lg:w-6 lg:h-2 bg-white" />
            </div>

            {/* Content Area */}
            <div className="w-[90%] flex flex-col items-center justify-center flex-1 my-1.5 rounded-sm py-1.5 px-1 transition-colors duration-300"
                style={{
                    backgroundColor: `color-mix(in srgb, ${techItem.brandColor} 15%, transparent)`
                }}
            >
                <div className="relative flex items-center justify-center w-10 h-10 lg:w-16 lg:h-16">
                    {/* Glow behind the icon */}
                    <div className="absolute w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-(--brand) opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300 pointer-events-none" />

                    <Image
                        src={techItem.icon}
                        alt={techItem.name}
                        width={48}
                        height={48}
                        className="relative z-10 w-8 h-8 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
                        style={techItem.invert ? { filter: 'invert(1)' } : undefined}
                    />
                </div>
                <span className="text-[10px] lg:text-[14px] font-semibold tracking-wider uppercase text-center line-clamp-1 text-white/45 group-hover:text-(--brand) transition-colors duration-200">
                    {techItem.name}
                </span>
            </div>

            {/* Bottom Sprockets */}
            <div className="flex justify-between w-full px-1">
                <div className="w-4 h-1 lg:w-6 lg:h-2 bg-white" />
                <div className="w-4 h-1 lg:w-6 lg:h-2 bg-white" />
                <div className="w-4 h-1 lg:w-6 lg:h-2 bg-white" />
                <div className="w-4 h-1 lg:w-6 lg:h-2 bg-white" />
            </div>
        </div>
    );
}