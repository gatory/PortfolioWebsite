import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "0",
        title: "Eggcellent Pomodoro",
        description: `A desktop Pomodoro study timer built for students to beat procrastination.`,
        thumbnail: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-thumb.png",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        category: "misc",
        tags: ['Java', 'Java Swing', 'JUnit'],
        pageUrl: "/projects/0-eggcellent-pomodoro",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        featured: true,
        currentlyBuilding: false,
        overview: `A reliable digital desktop timer built to help users beat procrastination 
                        and stay focused using the Pomodoro study method, which cycles between 
                        dedicated work intervals and short breaks. Targeted to students and helps 
                        boost productivity.`,
        runtime: "4 Months",
        cast: [
            { name: 'Java', role: 'Backend', icon: '/images/icon/java.svg' },
            { name: 'Java Swing', role: 'Frontend', icon: '/images/icon/java.svg' },
            { name: 'JUnit', role: 'Testing', icon: '/images/icon/junit.svg' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },
    {
        id: "1",
        title: "Stock Sense",
        description: `A discord chatbot made to help investors stay informed.`,
        thumbnail: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-thumb.png",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        category: "ai",
        tags: ['Python', 'ChromaDB', 'Ollama', 'HuggingFace'],
        pageUrl: "/projects/1-stock-sense",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        featured: true,
        currentlyBuilding: false,
        overview: `An intelligent assistant built inside the Discord chat app that helps users 
        instantly get accurate, up-to-date information about stock market trends and financial news. 
        Synthesized from dense market information and transformed into small digestible chunks.`,
        runtime: "2 Months",
        cast: [
            { name: 'Python', role: 'Backend', icon: '/images/icon/java.svg' },
            { name: 'Ollama', role: 'LLM', icon: '/images/icon/java.svg' },
            { name: 'HuggingFace', role: 'tokenizer', icon: '/images/icon/java.svg' },
            { name: 'ChromaDB', role: 'Database', icon: '/images/icon/java.svg' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },
    {
        id: "2",
        title: "NYC Airbnb Predictor",
        description: `An analysis model that helps guide NYC Airbnb landlords in optimizing their listings.`,
        thumbnail: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-thumb.png",
        background: "/images/Eggcellent-Pomodoro/eggcellent-pomodoro-bg.png",
        status: "completed",
        category: "data/ml",
        tags: ['Jupyter Notebook', 'Kraggle', 'Python', 'Scikit-Learn'],
        pageUrl: "/projects/2-nyc-airbnb-predictor",
        githubUrl: "https://github.com/gatory/Eggcellent-Pomodoro.git",
        featured: true,
        currentlyBuilding: false,
        overview: `A data science tool that analyzes 48,000+ NYC Airbnb listings to predict rental popularity.
                     It automatically cleans messy data and uses visual maps to reveal exactly what locations, 
                     prices, and features drive the highest customer engagement.`,
        runtime: "1 Months",
        cast: [
            { name: 'Jupyter Notebook', role: "", icon: '/images/icon/java.svg' },
            { name: 'Python', role: '', icon: '/images/icon/java.svg' },
            { name: 'Scikit-Learn', role: '', icon: '/images/icon/java.svg' },
        ],
        scenes: [
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene1.png',
            '/images/Eggcellent-Pomodoro/eggcellent-pomodoro-scene2.png',
        ],
    },
]