"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PlayButton from "../PlayButton";
import GithubButton from "../GithubButton";
import TextType from "../effects/TextType";

export default function HeroSection() {
  const slides = [
    {
      subtitle: "Full-Stack Software Developer",
      description:
        "From pencil scratches to production-ready products. Building software that solves real-world problems and scales with them.",
      thumbnail: "/images/heros/fullstack-hero-mobile.jpg",
      background: "/images/heros/fullstack-hero-desktop.jpg",
    },
    {
      subtitle: "AI & ML Developer",
      description:
        "Discovering patterns and reducing human redundancy. Embedding intelligence where it matters most.",
      thumbnail: "/images/heros/ai-ml-hero-mobile.jpg",
      background: "/images/heros/ai-ml-hero-desktop.jpg",
    },
    {
      subtitle: "Data Analyst",
      description:
        "Transforming raw data into clear, executable recommendations. Turning numbers into narratives that drive big decisions.",
      thumbnail: "/images/heros/data-analyst-hero-mobile.jpg",
      background: "/images/heros/data-analyst-hero-desktop.jpg",
    },
    {
      subtitle: "Systems & Embedded Developer",
      description: "Crafting high-performance, low-level code that bridges the gap between hardware and software.",
      thumbnail: "/images/heros/embedded-hero-mobile.jpg",
      background: "/images/heros/embedded-hero-desktop.jpg",
    }
  ];

  //   Swipe Logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDescSlide, setActiveDescSlide] = useState<number | null>(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Helper function for slide navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setActiveDescSlide(null);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
    );
    setActiveDescSlide(null);
  };

  // Derived state for subtitle cursor visibility
  const showSubtitleCursor = activeDescSlide !== currentSlide;

  // Typing effect for subtitle and description with dynamic auto-rotation
  useEffect(() => {
    const subtitleText = slides[currentSlide].subtitle;
    const descriptionText = slides[currentSlide].description;

    const subtitleDuration = 400 + subtitleText.length * 80;
    const pauseBeforeDesc = 500;
    const descStartDelay = subtitleDuration + pauseBeforeDesc;

    const descDuration = descriptionText.length * 20;
    const pauseAfterDesc = 3500;
    const nextSlideDelay = descStartDelay + descDuration + pauseAfterDesc;

    const descTimeout = setTimeout(() => {
      setActiveDescSlide(currentSlide);
    }, descStartDelay);

    const slideTimeout = setTimeout(() => {
      nextSlide();
    }, nextSlideDelay);

    return () => {
      clearTimeout(descTimeout);
      clearTimeout(slideTimeout);
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

  return (
    <section
      id="home"
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
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
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
          <TextType
            key={`sub-${currentSlide}`}
            text={slides[currentSlide].subtitle}
            as="span"
            typingSpeed={80}
            initialDelay={400}
            loop={false}
            showCursor={showSubtitleCursor}
            cursorCharacter=""
            cursorClassName="w-[3px] h-[0.9em] ml-1.5 inline-block align-middle bg-accent"
          />
        </h3>
        <p className="hidden lg:block text-base text-secondary tracking-wide max-w-lg lg:text-2xl text-center lg:text-left min-h-[4.8em]">
          {activeDescSlide === currentSlide && (
            <TextType
              key={`desc-${currentSlide}`}
              text={slides[currentSlide].description}
              as="span"
              typingSpeed={20}
              initialDelay={0}
              loop={false}
              showCursor={true}
              cursorCharacter=""
              cursorClassName="w-[3px] h-[0.9em] ml-1.5 inline-block align-middle bg-secondary"
            />
          )}
        </p>

        <div className="flex gap-4 pt-5 lg:pt-0">
          <PlayButton projectOverviewRoute="#projects" />
          <GithubButton githubRepoLink="https://github.com/gatory" labelText="GitHub Profile" />
        </div>

        {/* Carousel Indicator (Mobile) */}
        <div className="lg:hidden flex gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setActiveDescSlide(null);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-6 bg-accent" : "w-2 bg-primary/60"
                }`}
            />
          ))}
        </div>

        {/* Desktop Thumbnail Strip */}
        <div className="hidden lg:flex items-end absolute bottom-10 right-16 gap-8 z-10">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setActiveDescSlide(null);
              }}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${index === currentSlide
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
    </section>
  );
}
