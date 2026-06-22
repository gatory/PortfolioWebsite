export interface TechItem {
    name: string;
    icon: string;
    brandColor: string;
    faintColor: string;
    glowColor: string;
    invert?: boolean;
}

export const techItems: TechItem[] = [
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", brandColor: "#ffffff", faintColor: "rgba(255, 255, 255, 0.02)", glowColor: "rgba(255, 255, 255, 0.15)" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", brandColor: "#61dafb", faintColor: "rgba(97, 218, 251, 0.02)", glowColor: "rgba(97, 218, 251, 0.15)" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", brandColor: "#3178c6", faintColor: "rgba(49, 120, 198, 0.02)", glowColor: "rgba(49, 120, 198, 0.15)" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", brandColor: "#38bdf8", faintColor: "rgba(56, 189, 248, 0.02)", glowColor: "rgba(56, 189, 248, 0.15)" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", brandColor: "#339933", faintColor: "rgba(51, 153, 51, 0.02)", glowColor: "rgba(51, 153, 51, 0.15)" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", brandColor: "#ffd343", faintColor: "rgba(255, 211, 67, 0.02)", glowColor: "rgba(255, 211, 67, 0.15)" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", brandColor: "#336791", faintColor: "rgba(51, 103, 145, 0.02)", glowColor: "rgba(51, 103, 145, 0.15)" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", brandColor: "#2496ed", faintColor: "rgba(36, 150, 237, 0.02)", glowColor: "rgba(36, 150, 237, 0.15)" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", brandColor: "#00599c", faintColor: "rgba(0, 89, 156, 0.02)", glowColor: "rgba(0, 89, 156, 0.15)" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", brandColor: "#f89820", faintColor: "rgba(248, 152, 32, 0.02)", glowColor: "rgba(248, 152, 32, 0.15)" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", brandColor: "#f05032", faintColor: "rgba(240, 80, 50, 0.02)", glowColor: "rgba(240, 80, 50, 0.15)" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", brandColor: "#fcc624", faintColor: "rgba(252, 198, 36, 0.02)", glowColor: "rgba(252, 198, 36, 0.15)" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", brandColor: "#f7df1e", faintColor: "rgba(247, 223, 30, 0.02)", glowColor: "rgba(247, 223, 30, 0.15)" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", brandColor: "#e34f26", faintColor: "rgba(227, 79, 38, 0.02)", glowColor: "rgba(227, 79, 38, 0.15)" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", brandColor: "#1572b6", faintColor: "rgba(21, 114, 182, 0.02)", glowColor: "rgba(21, 114, 182, 0.15)" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", brandColor: "#764abc", faintColor: "rgba(118, 74, 188, 0.02)", glowColor: "rgba(118, 74, 188, 0.15)" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", brandColor: "#e10098", faintColor: "rgba(225, 0, 152, 0.02)", glowColor: "rgba(225, 0, 152, 0.15)" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", brandColor: "#47a248", faintColor: "rgba(71, 162, 72, 0.02)", glowColor: "rgba(71, 162, 72, 0.15)" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", brandColor: "#dc382d", faintColor: "rgba(220, 56, 45, 0.02)", glowColor: "rgba(220, 56, 45, 0.15)" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", brandColor: "#4479a1", faintColor: "rgba(68, 121, 161, 0.02)", glowColor: "rgba(68, 121, 161, 0.15)" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", brandColor: "#ff9900", faintColor: "rgba(255, 153, 0, 0.02)", glowColor: "rgba(255, 153, 0, 0.15)" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg", brandColor: "#ffca28", faintColor: "rgba(255, 202, 40, 0.02)", glowColor: "rgba(255, 202, 40, 0.15)" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", brandColor: "#a8b9cc", faintColor: "rgba(168, 185, 204, 0.02)", glowColor: "rgba(168, 185, 204, 0.15)" },
    { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg", brandColor: "#ff5500", faintColor: "rgba(255, 85, 0, 0.02)", glowColor: "rgba(255, 85, 0, 0.15)" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", brandColor: "#00add8", faintColor: "rgba(0, 173, 216, 0.02)", glowColor: "rgba(0, 173, 216, 0.15)" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", brandColor: "#326ce5", faintColor: "rgba(50, 108, 229, 0.02)", glowColor: "rgba(50, 108, 229, 0.15)" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", brandColor: "#cc6699", faintColor: "rgba(204, 102, 153, 0.02)", glowColor: "rgba(204, 102, 153, 0.15)" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", brandColor: "#f24e1e", faintColor: "rgba(242, 78, 30, 0.02)", glowColor: "rgba(242, 78, 30, 0.15)" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", brandColor: "#00979d", faintColor: "rgba(0, 151, 157, 0.02)", glowColor: "rgba(0, 151, 157, 0.15)" },
    { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", brandColor: "#c51a4a", faintColor: "rgba(197, 26, 74, 0.02)", glowColor: "rgba(197, 26, 74, 0.15)" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", brandColor: "#ffffff", faintColor: "rgba(255, 255, 255, 0.02)", glowColor: "rgba(255, 255, 255, 0.15)" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", brandColor: "#092e20", faintColor: "rgba(9, 46, 32, 0.02)", glowColor: "rgba(9, 46, 32, 0.15)" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", brandColor: "#009688", faintColor: "rgba(0, 150, 136, 0.02)", glowColor: "rgba(0, 150, 136, 0.15)" },
    { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", brandColor: "#c21325", faintColor: "rgba(194, 19, 37, 0.02)", glowColor: "rgba(194, 19, 37, 0.15)" },
];
