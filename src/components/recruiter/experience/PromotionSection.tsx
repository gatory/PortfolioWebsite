import Lightfall from "@/components/effects/Lightfall";

export default function PromotionSection() {
    return (
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-16 bg-background text-foreground">
            {/* Background effect */}
            <div className="absolute inset-0 z-0">
                <Lightfall
                    backgroundColor="#09090b"
                    colors={["#F84C4C", "#E11D48", "#F43F5E"]}
                    opacity={0.6}
                    speed={0.4}
                    streakCount={3}
                    mouseRadius={0.5}
                    glow={1.5}
                />
            </div>

            {/* Fade Overlays */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-background to-transparent z-5 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent z-5 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full pointer-events-none">
                {/* End of Season Header */}
                {/* <p className="text-accent font-semibold tracking-widest text-sm lg:text-md uppercase">
                    End of Season 2
                </p> */}

                {/* Main Bebas Heading */}
                <h2 className="font-bebas text-5xl lg:text-6xl text-primary tracking-wider leading-tight mt-3 flex flex-col select-none">
                    <span>Season 1</span>
                    <span>is currently being</span>
                    <span className="text-accent">written</span>
                </h2>

                {/* Description Paragraph */}
                <p className="text-secondary text-md lg:text-xl max-w-sm lg:max-w-lg leading-relaxed font-light mt-6 px-4">
                    This show is still in production. If you want to <span className="text-primary font-medium">co-produce the next chapter</span> — whether as a collaborator, employer, or a fellow builder — Kuan would love to hear from you.
                </p>

                {/* Available Green Pill */}
                <div className="inline-flex items-center gap-x-2 bg-emerald-950/40 border border-emerald-800/60 rounded-full px-4 py-1.5 text-md lg:text-lg text-emerald-400 font-medium mt-8 select-none">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    Available for new roles - Vancouver, BC
                </div>

                {/* Career Focus Area Badges */}
                <div className="flex flex-wrap gap-3 justify-center max-w-sm lg:max-w-lg mt-8 px-2">
                    {["Full-Stack", "Data", "Embedded", "AI/Machine Learning"].map((focus) => (
                        <div
                            key={focus}
                            className="border border-zinc-800 bg-zinc-900/40 rounded-md px-4 py-2 font-bebas text-base lg:text-lg tracking-wider text-primary select-none hover:border-accent hover:text-accent transition-colors duration-300 pointer-events-auto"
                        >
                            {focus.toUpperCase()}
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <a
                    href="/recruiter#contact"
                    className="mt-10 bg-white hover:bg-amber-400 text-black font-bebas text-lg lg:text-xl tracking-widest px-8 py-3 rounded-lg font-bold hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_25px_rgba(245,158,11,0.25)] pointer-events-auto"
                >
                    Contact Him TODAY!
                </a>
            </div>
        </section>
    );
}