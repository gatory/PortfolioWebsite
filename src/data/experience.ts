export interface Episode {
    id: string;
    title: string;
    isCurrent?: boolean;
    date: string;
    description: string;
    emoji: string;
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
    {
        number: 3,
        title: "Startup XYZ",
        episodes: [
            {
                id: "3.1",
                title: "Promoted to Engineering Lead",
                isCurrent: true,
                date: "Jan 2024 - Now",
                description: "Took ownership of a team of 5 engineers. Led the migration of the core platform from a monolith to microservices, reducing deploy time by 70%.",
                emoji: "🚀",
                progress: 70,
                tags: ["React", "Node.js", "System Design", "Leadership"],
                link: "https://example.com/startup-xyz"
            },
            {
                id: "3.2",
                title: "Built Internal Analytics Platform",
                date: "Jun 2023",
                description: "Designed and shipped a real-time analytics dashboard used by 200+ internal users. Replaced a third-party tool saving $40k/year.",
                emoji: "📊",
                tags: ["D3.js", "PostgreSQL", "AWS"]
            },
            {
                id: "3.3",
                title: "Overhauled Auth & Permissions System",
                date: "Jan 2023",
                description: "Re-architected the entire auth layer to support multi-tenancy. Zero downtime migration across 50k active users.",
                emoji: "🔐",
                tags: ["OAuth 2.0", "RBAC", "Security"]
            }
        ]
    },
    {
        number: 2,
        title: "Freelance Era",
        episodes: [
            {
                id: "2.1",
                title: "Full-Stack E-commerce Platform",
                date: "Sep 2021 - May 2022",
                description: "Developed a custom e-commerce solution for a retail client, integrating Shopify API and Stripe.",
                emoji: "🛒",
                tags: ["Next.js", "TypeScript", "Tailwind CSS"]
            },
            {
                id: "2.2",
                title: "Mobile Gym Planner App",
                date: "Jan 2021 - Aug 2021",
                description: "Designed and built a React Native workout tracker app with offline-first synchronization.",
                emoji: "🏋️‍♂️",
                tags: ["React", "SQLite"]
            }
        ]
    },
    {
        number: 1,
        title: "Age of Academia",
        episodes: [
            {
                id: "1.1",
                title: "Computer Science Degree - UBC",
                date: "Sep 2017 - May 2021",
                description: "Graduated with honors. Specialized in Intelligent Systems and Software Engineering.",
                emoji: "🎓",
                tags: ["Java", "Python", "Algorithms"]
            },
            {
                id: "1.2",
                title: "Research Assistant - Robotics Lab",
                date: "May 2020 - Dec 2020",
                description: "Programmed microcontrollers for obstacle avoidance algorithms on autonomous ground vehicles.",
                emoji: "🤖",
                tags: ["C++", "ROS"]
            }
        ]
    }
];
