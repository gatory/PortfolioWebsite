import Image from "next/image"
import Link from "next/link";

export interface GithubButtonProps {
    githubRepoLink: string
    size?: "sm" | "md"
}

export default function GithubButton({ githubRepoLink, size = "md" }: GithubButtonProps) {
    return (
        <Link
            href={githubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#FCB406] rounded-2xl flex items-center justify-center hover:scale-105 transition-transform ${size === "sm"
                    ? "p-2"
                    : "w-45 h-10"
                }`}
        >
            <Image src="/images/icons/github.svg" alt="github icon" width={size === "sm" ? 16 : 26} height={size === "sm" ? 16 : 26} className="mr-1.5" />
            <h2 className={`font-barlow font-medium text-black ${size === "sm" ? "text-sm" : "text-2xl"}`}>
                GitHub Repo
            </h2>
        </Link>
    )
}