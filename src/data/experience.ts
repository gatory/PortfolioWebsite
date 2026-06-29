export interface Episode {
    id: string;
    title: string;
    isCurrent?: boolean;
    date: string;
    description: string;
    emoji?: string;
    icon?: string;
    progress?: number;
    tags: string[];
    link?: string;
}

export interface Season {
    number: number;
    title: string;
    episodes: Episode[];
}

export const seasonsData: Season[] = [
    // {
    //     number: 2,
    //     title: "Freelance Era",
    //     episodes: [
    //         {
    //             id: "2.1",
    //             title: "Math Tutor - Connect Me Free Tutoring & Mentoring",
    //             date: "Sep 2021 - May 2022",
    //             description: "Worked one on one with students to help them with their math skills.",
    //             emoji: "",
    //             tags: ["Communication", "Education", "Tutoring"]
    //         },
    //     ]
    // },
    {
        number: 1,
        title: "Age of Academia",
        episodes: [
            {
                id: "1.1",
                title: "Bachelor's of Science - UBC",
                date: "Sep 2024 - Present",
                description: "Majoring Computer Science Honours with Specialization in Artificial Intelligence, focusing on robust software systems, statistical modelling, machine learning, and large-scale data analysis.",
                emoji: "🎓",
                tags: ["Java", "Python", "Algorithms", "Machine Learning"]
            },
            {
                id: "1.2",
                title: "Software Developer - Connect Me Free Tutoring & Mentoring",
                link: "https://connectmego.org/leadership-teams/",
                date: "Sep 2025 - Present",
                description: "Helping as a software developer on the software subteam for the non-profit organization Connect Me Free Tutoring & Mentoring, building a platform to connect students with tutors and mentors.",
                icon: "/images/experience/connectme-logo.png",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"]
            },
            {
                id: "1.3",
                title: "Data Science Sub-team Member - UBC Data Science Society",
                date: "Sep 2025 - May 2026",
                description: "Help worked on LeHooper - An ML project that predicts the odds of basketball shots based on player biometrics and physics.",
                emoji: "🤖",
                tags: ["Python", "ML", "Data Analysis"]
            },
        ]
    }
];

export interface Company {
    name: string;
    role: string;
    emoji: string;
    icon?: string;
}

export const companiesData: Company[] = [
    {
        name: "Connect Me Free Tutoring & Mentoring",
        role: "Software Developer",
        emoji: "🤝",
        icon: "/images/experience/connectme-logo.png"
    }
];
