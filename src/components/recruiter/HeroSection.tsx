"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PlayButton from "../PlayButton";
import GithubButton from "../GithubButton";

export default function HeroSection() {
  const slides = [
    {
      subtitle: "Full-Stack Developer",
      description:
        "Crafting high-performance web experiences for 5+ years. Specializing in React, Node.js and scalable system design.",
      thumbnail: "/images/thumb-duck1.jpg",
      background: "/images/UBCInsights/thumb-fullstack.jpg",
    },
    {
      subtitle: "Embedded Systems Engineer",
      description:
        "Building the gap between hardware and software. Specializing in robotics, firmware automation systems.",
      thumbnail: "/images/thumb-duck2.png",
      background: "/images/JetAutoPro/background-embedded.jpg",
    },
    {
      subtitle: "Data Analyst",
      description:
        "Transforming complex datasets into insights. Specializing in Python, machine learning, and visualization tools.",
      thumbnail: "/images/thumb-duck3.jpg",
      background: "/images/AirbnbNYC/thumb-matrix.jpg",
    },
  ];

  //   Swipe Logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [typedDescription, setTypedDescription] = useState("");

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Helper function for slide navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
    );
  };

  // Typing effect for subtitle and description with dynamic auto-rotation
  useEffect(() => {
    setTypedSubtitle("");
    setTypedDescription("");

    let active = true;
    let startTimeout: any;
    let subtitleInterval: any;
    let pauseTimeout: any;
    let descriptionInterval: any;
    let nextSlideTimeout: any;

    // Start typing subtitle after a short slide-in transition delay
    startTimeout = setTimeout(() => {
      if (!active) return;
      let subtitleIdx = 0;
      const subtitleText = slides[currentSlide].subtitle;

      subtitleInterval = setInterval(() => {
        if (!active) return;
        if (subtitleIdx < subtitleText.length) {
          setTypedSubtitle(subtitleText.slice(0, subtitleIdx + 1));
          subtitleIdx++;
        } else {
          clearInterval(subtitleInterval);

          // Pause briefly after subtitle is finished before typing description
          pauseTimeout = setTimeout(() => {
            if (!active) return;
            let descIdx = 0;
            const descriptionText = slides[currentSlide].description;

            descriptionInterval = setInterval(() => {
              if (!active) return;
              if (descIdx < descriptionText.length) {
                setTypedDescription(descriptionText.slice(0, descIdx + 1));
                descIdx++;
              } else {
                clearInterval(descriptionInterval);

                // Hold on current slide after text is fully typed, then advance
                nextSlideTimeout = setTimeout(() => {
                  if (active) {
                    nextSlide();
                  }
                }, 3500); // 3.5 seconds reading time
              }
            }, 20); // Snappy 20ms per character for description
          }, 500); // 500ms pause between text sections
        }
      }, 80); // 80ms per character for subtitle
    }, 400);

    return () => {
      active = false;
      clearTimeout(startTimeout);
      if (subtitleInterval) clearInterval(subtitleInterval);
      clearTimeout(pauseTimeout);
      if (descriptionInterval) clearInterval(descriptionInterval);
      clearTimeout(nextSlideTimeout);
    };
  }, [currentSlide]);

  // Swipe gesture handler
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      nextSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const renderTypedText = (text: string, showCursor: boolean, cursorColorClass: string) => {
    if (!text) {
      return showCursor ? (
        <span className={`w-0.75 h-[0.9em] animate-blink inline-block align-middle ${cursorColorClass}`} />
      ) : null;
    }
    const textWithoutLastChar = text.slice(0, -1);
    const lastChar = text.slice(-1);
    return (
      <>
        {textWithoutLastChar}
        <span className="whitespace-nowrap">
          {lastChar}
          {showCursor && (
            <span className={`w-0.75 h-[0.9em] ml-1.5 animate-blink inline-block align-middle ${cursorColorClass}`} />
          )}
        </span>
      </>
    );
  };

  return (
    <section
      className="relative h-screen flex flex-col justify-end lg:justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Desktop Background */}
            <Image
              src={slide.background}
              alt={`${slide.subtitle} Background`}
              fill
              className="hidden lg:block object-cover"
              priority={index === 0}
            />

            {/* Mobile Thumbnail Background */}
            <Image
              src={slide.thumbnail}
              alt={`${slide.subtitle} Background`}
              fill
              className="lg:hidden object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        {/* Mobile gradient */}
        <div className="lg:hidden absolute inset-0 bg-linear-to-t from-background via-background/90 via-25% to-transparent" />

        {/* Desktop gradient */}
        <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-background from-25% via-background/60 via-50% to-transparent" />
        <div className="hidden lg:block absolute inset-0 bg-linear-to-t from-background via-background/40 via-15% to-transparent" />
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start lg:max-w-[75%] text-primary pb-16 lg:pb-0 lg:pt-24 lg:pl-16 lg:gap-8 z-10 select-none">
        <h1 className="font-bebas text-6xl lg:text-9xl text-primary tracking-wider">
          Kuan
          <span className="lg:hidden"> </span>
          <br className="hidden lg:block" />
          Wei
        </h1>
        <h3 className="font-bebas text-3xl lg:text-6xl text-accent tracking-wider min-h-[1.2em] flex items-center">
          {renderTypedText(typedSubtitle, typedDescription.length === 0, "bg-accent")}
        </h3>
        <p className="hidden lg:block text-base text-secondary tracking-wide max-w-lg lg:text-2xl text-center lg:text-left min-h-[4.8em]">
          {renderTypedText(typedDescription, typedDescription.length > 0, "bg-secondary")}
        </p>

        <div className="flex gap-4 pt-5 lg:pt-0">
          <PlayButton projectOverviewRoute="/projects/JetAutoPro" />
          <GithubButton githubRepoLink="https://github.com/gatory" />
        </div>

        {/* Carousel Indicator (Mobile) */}
        <div className="lg:hidden flex gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-6 bg-accent" : "w-2 bg-primary/60"
              }`}
            />
          ))}
        </div>

        {/* Desktop Thumbnail Strip */}
        <div className="hidden lg:flex items-end absolute bottom-10 right-16 gap-8 z-10">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? "w-32 h-16 ring-2 ring-white opacity-100"
                  : "w-24 h-12 opacity-50 hover:opacity-80 hover:w-26 hover:h-13"
              }`}
            >
              <Image
                src={slide.background}
                alt={slide.subtitle}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s step-end infinite;
        }
      `}</style>
    </section>
  );
}
