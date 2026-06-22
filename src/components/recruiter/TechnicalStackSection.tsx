'use client'

import { techItems, TechItem } from '@/data/techStack'
import Image from 'next/image'
import FilmStrip from '@/components/FilmStrip'

// Split items into 3 rows, cycling through them so every row is full
function splitIntoRows(items: TechItem[], rows: number): TechItem[][] {
    return Array.from({ length: rows }, (_, i) =>
        items.filter((_, idx) => idx % rows === i)
    )
}

interface ScrollRowProps {
    items: TechItem[]
    direction: 'left' | 'right'
    duration: number // seconds
}

function ScrollRow({ items, direction, duration }: ScrollRowProps) {
    // Duplicate for seamless loop
    const doubled = [...items, ...items]

    const animationName = direction === 'left' ? 'scroll-left' : 'scroll-right'

    return (
        <div className="relative overflow-hidden w-full">
            <div
                className="flex gap-3 w-max hover:[animation-play-state:paused] transition-all duration-300"
                style={{
                    animationName,
                    animationDuration: `${duration}s`,
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                }}
            >
                {doubled.map((tech, idx) => (
                    <FilmStrip key={`${tech.name}-${idx}`} techItem={tech} />
                ))}
            </div>
        </div>
    )
}

export default function TechnicalStackSection() {
    const rows = splitIntoRows(techItems, 3)

    return (
        <section className="w-full flex flex-col gap-6 p-8 lg:p-10 lg:pt-0 select-none">
            {/* Title */}
            <div className="flex items-center gap-2">
                <Image
                    src="/images/icons/computer-icon.png"
                    alt="computer icon"
                    width={25}
                    height={25}
                    className="object-contain"
                />
                <h2 className="font-bebas text-2xl text-left lg:text-3xl">Technical Stack</h2>
            </div>

            {/* Scrolling film strips container with gradient fade edges */}
            <div className="flex flex-col gap-3 mask-[linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
                <ScrollRow items={rows[0]} direction="left" duration={36} />
                <ScrollRow items={rows[1]} direction="right" duration={36} />
                <ScrollRow items={rows[2]} direction="left" duration={36} />
            </div>

            <style>{`
                @keyframes scroll-left {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </section>
    )
}