export default function ExperienceSection() {
    return (
        <section className="w-full flex flex-col gap-8 p-8 pt-18 items-center lg:items-start lg:p-10">
            {/* Section Title */}
            <div className="relative inline-block text-center lg:text-left">
                <h2 className="font-bebas text-5xl relative z-10">
                    Experience
                </h2>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 w-46 h-3 bg-accent z-0" />
            </div>
        </section>
    )
}