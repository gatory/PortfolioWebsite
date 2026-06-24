import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "eggcellent-pomodoro",
        category: "misc",
        featured: true,
        currentlyBuilding: true,
        projectName: "Eggcellent Pomodoro",
        route: "/projects/eggcellent-pomodoro",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        thumbnail: "/images/thumb-duck1.jpg",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        year: 2020,
        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'Java', role: 'Backend' },
            { name: 'Java Swing', role: 'Frontend' },
            { name: 'JUnit', role: 'Testing' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
        directorNote: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`
    },
    {
        id: "full-stack",
        category: "full-stack",
        featured: true,
        currentlyBuilding: false,
        projectName: "Full-Stack Development",
        route: "/projects/full-stack",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'React', role: 'Frontend' },
            { name: 'Node.js', role: 'Backend' },
            { name: 'PostgreSQL', role: 'Database' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },
    {
        id: "2",
        category: "embedded",
        featured: true,
        currentlyBuilding: true,
        projectName: "embedded",
        route: "/projects/2",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'C++', role: 'Firmware' },
            { name: 'Arduino', role: 'Microcontroller' },
            { name: 'Raspberry Pi', role: 'Host Interface' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },

    {
        id: "3",
        category: "ai / machine learning",
        featured: true,
        currentlyBuilding: true,
        projectName: "ai / machine-learning",
        route: "/projects/3",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        background: "",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'Python', role: 'Model Training' },
            { name: 'Jupyter Notebook', role: 'Analysis' },
            { name: 'FastAPI', role: 'API Deployment' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },

    {
        id: "4",
        category: "data",
        featured: true,
        currentlyBuilding: false,
        projectName: "Data",
        route: "/projects/4",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'Python', role: 'Data Processing' },
            { name: 'PostgreSQL', role: 'Database' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },

    {
        id: "5",
        category: "full-stack",
        featured: true,
        currentlyBuilding: true,
        projectName: "Portfolio Website",
        route: "/projects/5",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'Next.js', role: 'Framework' },
            { name: 'TypeScript', role: 'Languages' },
            { name: 'Tailwind CSS', role: 'Styling' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },

    {
        id: "6",
        category: "data",
        featured: true,
        currentlyBuilding: false,
        projectName: "Data",
        route: "/projects/6",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'Python', role: 'Data Processing' },
            { name: 'PostgreSQL', role: 'Database' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },
    {
        id: "7",
        category: "data",
        featured: true,
        currentlyBuilding: false,
        projectName: "Data",
        route: "/projects/7",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'Python', role: 'Data Analysis' },
            { name: 'MySQL', role: 'Database' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },
    {
        id: "8",
        category: "data",
        featured: true,
        currentlyBuilding: false,
        projectName: "Data",
        route: "/projects/8",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'Python', role: 'Data Analysis' },
            { name: 'MySQL', role: 'Database' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },
    {
        id: "9",
        category: "data",
        featured: true,
        currentlyBuilding: false,
        projectName: "Data",
        route: "/projects/9",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'Python', role: 'Data Analysis' },
            { name: 'MySQL', role: 'Database' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },
    {
        id: "10",
        category: "data",
        featured: true,
        currentlyBuilding: false,
        projectName: "Data",
        route: "/projects/10",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        icon: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-icon.png",

        overview: `A reliable digital desktop timer built to help users beat procrastination 
        and stay focused using the Pomodoro study method, which cycles between 
        dedicated work intervals and short breaks. Targeted to students and helps 
        boost productivity.`,
        runtime: "4 Months",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        cast: [
            { name: 'Python', role: 'Data Analysis' },
            { name: 'MySQL', role: 'Database' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },
]