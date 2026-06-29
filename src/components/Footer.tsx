"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface FooterLink {
    label: string;
    href: string;
    isExternal?: boolean;
    inactive?: boolean;
}

export default function Footer() {
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("English");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = ["English", "中文"];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const linkColumns: FooterLink[][] = [
        [
            { label: "Profile Selection", href: "/" },
            { label: "Recruiter Profile", href: "/recruiter" },
            { label: "Teammate Profile (TBD)", href: "/teammate", inactive: true },
            { label: "Stalker Profile (TBD)", href: "/stalker", inactive: true },
        ],
        [
            { label: "Projects", href: "/recruiter#projects" },
            { label: "Experience", href: "/recruiter#experience" },
            { label: "Technical Stack", href: "/recruiter#experience" }, // Navigates close to the stack
            { label: "Resume / CV", href: "/images/experience/Kuan_Wei_Resume.pdf", isExternal: true }, // Interactive call to action
        ],
        [
            { label: "Contact Me", href: "#contact" },
            { label: "Gmail", href: "mailto:kuandev06@gmail.com", isExternal: true },
            { label: "GitHub Profile", href: "https://github.com/gatory", isExternal: true },
            { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/kuan-wei-315b4a344/", isExternal: true },

        ],
    ];

    return (
        <footer className="w-full bg-[#000000] border-t border-white/5 text-zinc-400 py-10 px-8 lg:px-10 font-barlow selection:bg-accent selection:text-white relative z-20">
            <div className="flex flex-col gap-6">

                {/* Contact Questions Header */}
                <div className="text-zinc-300 text-base lg:text-lg">
                    Questions? Contact me at{" "}
                    <a
                        href="mailto:kuandev06@gmail.com"
                        className="hover:underline hover:text-accent font-semibold transition-colors duration-200"
                    >
                        kuandev06@gmail.com
                    </a>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {linkColumns.map((column, colIdx) => (
                        <div
                            key={colIdx}
                            className="flex flex-col items-center gap-2 border border-white/10 rounded-xl p-4 w-fit min-w-45 sm:min-w-55 mx-auto bg-zinc-950/40 hover:border-accent/30 hover:bg-zinc-950/60 transition-all duration-300 text-center"
                        >
                            {column.map((link, linkIdx) => (
                                <div key={linkIdx} className="w-full text-center">
                                    {link.inactive ? (
                                        <span className="text-xs lg:text-sm text-zinc-600 block text-center cursor-not-allowed select-none">
                                            {link.label}
                                        </span>
                                    ) : link.isExternal ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs lg:text-sm text-zinc-400 hover:text-white hover:underline transition-colors duration-200 block text-center"
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-xs lg:text-sm text-zinc-400 hover:text-white hover:underline transition-colors duration-200 block text-center"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Language Selection & Brand / Copyright */}
                <div className="flex flex-col gap-4 mt-2">

                    {/* Custom Netflix-inspired Language Dropdown */}
                    <div className="relative inline-block self-start" ref={dropdownRef}>
                        <button
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            className="flex items-center gap-2 bg-background/80 border border-zinc-600 hover:border-zinc-400 hover:bg-[#121214] text-zinc-200 px-4 py-2 rounded-md text-xs lg:text-sm focus:outline-none transition-all duration-300 cursor-pointer shadow-lg"
                            aria-haspopup="true"
                            aria-expanded={isLangDropdownOpen}
                        >
                            {/* Globe Icon */}
                            <svg
                                className="w-4 h-4 text-zinc-300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.64-.788-7.994-2.166m15.686 0A11.95 11.95 0 0122 12c0 1.013-.124 1.996-.36 2.93m-17.64 0A11.95 11.95 0 012 12c0-1.013.124-1.996.36-2.93M21.64 14.93a11.953 11.953 0 01-19.28 0m19.28 0a8.996 8.996 0 01-1.683 4.135m-15.914 0a8.996 8.996 0 01-1.683-4.135"
                                />
                            </svg>
                            <span>{selectedLang}</span>
                            {/* Dropdown Chevron */}
                            <svg
                                className={`w-3.5 h-3.5 text-zinc-300 transition-transform duration-300 ${isLangDropdownOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Options */}
                        {isLangDropdownOpen && (
                            <div className="absolute bottom-full left-0 mb-1.5 w-32 bg-zinc-950/95 border border-zinc-800 rounded-md shadow-2xl py-1 z-50 animate-fade-in-up">
                                {languages.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            setSelectedLang(lang);
                                            setIsLangDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-1.5 text-xs lg:text-sm transition-colors duration-150 cursor-pointer ${selectedLang === lang
                                            ? "bg-accent/15 text-accent font-semibold"
                                            : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                                            }`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Copyright Info & Code Brand */}
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-t border-white/5 pt-4 gap-3">
                        <div className="font-bebas text-lg lg:text-xl text-zinc-500 tracking-wider">
                            Kuan.Code
                        </div>
                        <div className="text-xs text-zinc-500 font-medium">
                            © {new Date().getFullYear()} Kuan Wei. All rights reserved. Developed with 🍿
                        </div>
                    </div>

                </div>

            </div>

            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </footer>
    );
}
