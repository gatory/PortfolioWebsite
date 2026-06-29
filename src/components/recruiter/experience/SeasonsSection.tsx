"use client";

import { useState } from "react";
import Image from "next/image";
import { TAG_COLORS, DEFAULT_TAG_COLOR } from "@/data/tagDictionary";
import { seasonsData } from "@/data/experience";

export default function SeasonsSection() {
    const [selectedSeason, setSelectedSeason] = useState(seasonsData[0]?.number || 1);

    const activeSeason = seasonsData.find((s) => s.number === selectedSeason) || seasonsData[0];

    return (
        <>
            <section className="flex flex-col w-full text-foreground bg-background lg:my-10 lg:px-8">
                <div className="px-6">
                    <h2 className="text-2xl lg:text-3xl mb-3 font-medium tracking-wide text-primary">Careers Series Collection</h2>

                    {/* Season Tabs */}
                    <div className="flex border-b border-zinc-800 mb-8 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-none gap-x-6">
                        {seasonsData.map((season) => (
                            <button
                                key={season.number}
                                onClick={() => setSelectedSeason(season.number)}
                                className={`py-2 text-md lg:text-lg font-semibold border-b-0.75 transition-colors duration-300 -mb-0.75 focus:outline-hidden ${selectedSeason === season.number
                                        ? "border-accent border-b-4 lg:border-b-6 text-primary font-bold"
                                        : "border-transparent text-secondary hover:text-primary"
                                    }`}
                            >
                                Season {season.number}: {season.title}
                            </button>
                        ))}
                    </div>

                    {/* Episode Cards */}
                    <div className="flex flex-col gap-y-8">
                        {activeSeason.episodes.map((episode) => (
                            <div
                                key={episode.id}
                                className="flex gap-x-4 lg:gap-x-6 items-start pb-6 border-b border-zinc-800 last:border-b-0"
                            >
                                {/* Left column: Episode number and Thumbnail */}
                                <div className="flex items-center gap-x-3 shrink-0">
                                    {/* Episode Number */}
                                    <span className="font-bebas text-2xl lg:text-3xl text-primary w-6 text-right select-none">
                                        {episode.id}
                                    </span>
                                    {/* Thumbnail Box */}
                                    <div className="relative w-20 h-14 lg:w-28 lg:h-18 rounded-lg bg-[#111625] border border-slate-800 flex items-center justify-center overflow-hidden">
                                        {episode.icon ? (
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={episode.icon}
                                                    alt={`${episode.title} logo`}
                                                    fill
                                                    className="object-contain p-2"
                                                    sizes="(max-width: 1024px) 80px, 112px"
                                                />
                                            </div>
                                        ) : (
                                            <span className="text-2xl lg:text-3xl select-none">{episode.emoji}</span>
                                        )}
                                        {/* Progress bar if current */}
                                        {episode.isCurrent && episode.progress && (
                                            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-slate-950">
                                                <div
                                                    className="h-full bg-accent transition-all duration-500"
                                                    style={{ width: `${episode.progress}%` }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right column: Episode content */}
                                <div className="flex-1 flex flex-col gap-y-1">
                                    {/* Header row */}
                                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 w-full justify-between">
                                        <h3 className="font-bold text-md lg:text-xl text-primary leading-snug">
                                            {episode.link ? (
                                                <a
                                                    href={episode.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-accent hover:underline inline-flex items-center gap-x-1 transition-colors duration-300"
                                                >
                                                    {episode.title}
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 shrink-0 opacity-65">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                    </svg>
                                                </a>
                                            ) : (
                                                episode.title
                                            )}
                                        </h3>
                                        {episode.isCurrent ? (
                                            <span className="bg-accent text-white text-[10px] lg:text-[12px] font-bold px-1.5 py-0.5 rounded-xs tracking-wider uppercase leading-none self-center mr-10 whitespace-nowrap">
                                                CURRENT
                                            </span>
                                        ) : (
                                            <span className="text-sm lg:text-md text-secondary/60 whitespace-nowrap font-light mr-10">
                                                {episode.date}
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm lg:text-lg text-secondary leading-relaxed font-light mt-1">
                                        {episode.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {episode.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${TAG_COLORS[tag] ?? DEFAULT_TAG_COLOR
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}