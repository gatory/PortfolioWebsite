"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechnicalStackSection from './TechnicalStackSection';

export default function ExperienceSection() {
    return (
        <>
            <section id="experience" className="relative flex w-full h-screen lg:h-auto flex-col items-center">
                {/* Mobile Layout */}
                <div className="lg:hidden relative h-full flex flex-col gap-8 p-8 justify-between">
                    {/* Background */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full -z-25">
                        <Image
                            src="/images/experienceCard-bg.png"
                            alt="Experience Card Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Gradient overlays */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full backdrop-blur-sm" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full bg-linear-to-b from-background via-background/40 to-background -z-20" />


                    {/* Content Container */}
                    <div className="relative z-10 w-full flex flex-col gap-8 h-full">
                        {/* Section Title */}
                        <div className="relative inline-block text-center">
                            <h2 className="font-bebas text-5xl relative z-10">
                                Experience
                            </h2>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-46 h-3 bg-accent z-0" />
                        </div>

                        <div className="relative z-50 w-full h-1/2 rounded-xl">
                            <Image
                                src="/images/experienceCard-thumb.png"
                                alt="Experience Card Thumbnail"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        <div className='relative z-50 w-full h-26'>
                            <Image
                                src="/images/titlecard.png"
                                alt="Experience Card Thumbnail"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Tags */}
                        <div className='relative w-full flex flex-wrap justify-center lg:justify-start items-baseline gap-3 text-xl'>
                            <div className='inline-flex items-baseline gap-2 px-2.5 py-0.5 rounded-full bg-secondary/20 font-barlow font-medium text-primary'>
                                <Image src="/images/icons/star-icon.png" alt="Star Icon" width={20} height={20} className="self-center shrink-0" />
                                <span>9.6</span>
                            </div>

                            <div className='inline-flex items-baseline gap-2 px-2.5 py-0.5 rounded-full bg-secondary/20 font-barlow font-medium text-primary'>
                                <Image src="/images/icons/clock-icon.png" alt="Clock Icon" width={20} height={20} className="self-center shrink-0" />
                                <span>2022 - Present</span>
                            </div>

                            <div className='inline-flex items-baseline gap-2 px-2.5 py-0.5 rounded-full bg-secondary/20 font-barlow font-medium text-primary'>
                                <span>1 Season</span>
                            </div>
                        </div>

                        {/* Watch Now! */}
                        <div className="grow w-full flex items-center justify-center">
                            <Link
                                href="/recruiter/experience"
                                className="w-48 h-12 md:w-56 md:h-14 flex items-center justify-center gap-3 rounded-lg bg-white text-black hover:bg-white/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-xl"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="black"
                                    className="w-6 h-6 md:w-8 md:h-8"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                <span className="font-bebas text-xl md:text-2xl tracking-widest">Watch Now!</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className='hidden lg:flex w-full h-full flex-col p-10 pb-0'>
                    {/* Section Title */}
                    <div className="relative text-left">
                        <h2 className="font-bebas relative z-10 text-6xl">
                            Experience
                        </h2>
                        <div className="absolute bottom-0 left-6 translate-x-0 bg-accent z-0 w-56 h-4" />
                    </div>

                    {/* Card Container */}
                    <div className="group relative w-full max-w-5xl h-125 rounded-2xl overflow-hidden self-start my-20 mx-auto border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(255,255,255,0.08)]">

                        {/* Background image */}
                        <Image
                            src="/images/experienceCard-bg.png"
                            alt="Experience Card Background"
                            fill
                            className="object-cover object-right transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Gradient overlay — dark on left for text readability */}
                        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 via-50% to-background/45" />

                        {/* Content layer */}
                        <div className="absolute inset-0 flex flex-row gap-12 p-10 z-10 items-center">

                            {/* Left — portrait thumbnail */}
                            <div className="relative w-75 rounded-xl overflow-hidden shrink-0 self-stretch">
                                <Image src="/images/experienceCard-thumb.png" alt="Experience" fill className="object-cover" />
                            </div>

                            {/* Right — text content */}
                            <div className="flex flex-col justify-center gap-7 flex-1">

                                {/* Title */}
                                <div>
                                    <Image src="/images/titlecard-left-aligned.png" alt="Title Card" width={300} height={300} className="object-contain" />
                                </div>

                                {/* Tags */}
                                <div className="flex items-center gap-3 flex-wrap">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 font-barlow font-medium text-base lg:text-lg text-primary">
                                        <Image src="/images/icons/star-icon.png" alt="Star" width={18} height={18} className="self-center shrink-0" />
                                        <span className="text-yellow-400 font-bold">9.6</span>
                                    </div>
                                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 font-barlow font-medium text-base lg:text-lg text-primary">
                                        <span>1 Season</span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 font-barlow font-medium text-base lg:text-lg text-primary">
                                        <Image src="/images/icons/clock-icon.png" alt="Clock Icon" width={20} height={20} className="self-center shrink-0" />
                                        <span>2022 - Present</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="font-barlow text-primary text-lg leading-relaxed max-w-md">
                                    Kuan Wei starts his career writing firmware for hardware nobody
                                    else wanted to touch. As his skills grow, so does his ambition
                                    — taking on full-stack products, data pipelines, and eventually
                                    leading teams. Five seasons of late nights, hard problems, and
                                    systems built from scratch.
                                </p>

                                {/* Watch Now! */}
                                <div className="grow w-full flex items-center justify-start">
                                    <Link
                                        href="/recruiter/experience"
                                        className="w-48 h-12 md:w-56 md:h-14 flex items-center justify-center gap-3 rounded-lg bg-white text-black hover:bg-white/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-xl"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="black"
                                            className="w-6 h-6 md:w-8 md:h-8"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                        <span className="font-bebas text-xl md:text-2xl tracking-widest">Watch Now!</span>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <TechnicalStackSection />
        </>
    )
}