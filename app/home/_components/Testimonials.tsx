"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ImageCarousel from "../../../components/animata/carousel";
import { testimonials } from "./testimonialsData";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const carouselRef = useRef(null);
  const backgroundRef = useRef(null);

  useGSAP(() => {
    // Background animation with more complex movement
    gsap.to(backgroundRef.current, {
      backgroundPosition: "50% 50%",
      backgroundSize: "200% 200%",
      ease: "power1.inOut",
      duration: 7,
      repeat: -1,
      yoyo: true,
    });

    // Initial state
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.set(carouselRef.current, {
      opacity: 0,
      y: 50,
    });

    // Create timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    });

    // Animate elements with staggered effect
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        carouselRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <div ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Advanced Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-[-2] 
        bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 
        bg-[length:200%_200%] opacity-50"
      />

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-[-1] opacity-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute"
        >
          <defs>
            <pattern
              id="geometric-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 0 L50 50 L100 0 Z" fill="rgba(0,0,0,0.02)" />
              <path d="M0 100 L50 50 L100 100 Z" fill="rgba(0,0,0,0.02)" />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#geometric-pattern)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900 
            bg-clip-text text-transparent bg-gradient-to-br from-gray-700 to-gray-900"
            style={{ fontFamily: "camber-md" }}
          >
            Voices of Trust
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg lg:text-xl text-gray-600 mb-12 font-light"
            style={{ fontFamily: "camber-rg" }}
          >
            Discover the authentic experiences of our valued clients
          </p>
        </div>

        <div ref={carouselRef} className="mt-8">
          <ImageCarousel items={testimonials} />
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-[-1]" />
    </div>
  );
}
