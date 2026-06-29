import Image from "next/image"
import Link from "next/link";

export interface GithubButtonProps {
    githubRepoLink: string
    size?: "sm" | "md"
    labelText?: string
}

export default function GithubButton({ githubRepoLink, size = "md", labelText = "GitHub Repo" }: GithubButtonProps) {
    return (
        <Link
            href={githubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#FCB406] rounded-2xl flex items-center justify-center hover:scale-105 transition-transform ${size === "sm"
                    ? "p-2"
                    : "w-36 h-9 sm:w-45 sm:h-10"
                }`}
        >
            <Image 
                src="/images/icons/github.svg" 
                alt="github icon" 
                width={size === "sm" ? 16 : 26} 
                height={size === "sm" ? 16 : 26} 
                className={size === "sm" ? "mr-1.5" : "w-5 h-5 sm:w-6 sm:h-6 mr-1.5"} 
            />
            <h2 className={`font-barlow font-medium text-black ${size === "sm" ? "text-sm" : "text-lg sm:text-2xl"}`}>
                {labelText}
            </h2>
        </Link>
    )
}