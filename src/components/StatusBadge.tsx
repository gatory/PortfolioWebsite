export interface StatusBadgeProps {
    status: "completed" | "live" | "in-dev" | "upcoming";
    customLetterColor?: string;
    customBackgroundColor?: string;
}

export default function StatusBadge({
    status,
    customLetterColor,
    customBackgroundColor,
}: StatusBadgeProps) {
    const colorClasses = {
        completed: "bg-blue-900 text-blue-400",
        live: "bg-green-900 text-green-400",
        "in-dev": "bg-yellow-900 text-yellow-400",
        upcoming: "bg-purple-900 text-purple-400",
    }[status];

    return (
        <div
            className={`absolute top-2 right-2 z-10 w-fit rounded-sm uppercase tracking-widest text-center font-medium
                text-[12px] px-1.5 py-px
                lg:text-[15px] lg:px-2 lg:py-0.5
                ${colorClasses}`}
            style={{
                backgroundColor: customBackgroundColor,
                color: customLetterColor,
            }}
        >
            {status}
        </div>
    );
}