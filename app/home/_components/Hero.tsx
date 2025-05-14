"use client";
import { Button } from "../../../components/ui/button";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const clientsRef = useRef(null);
  const videoRef = useRef(null);
  const bgLayerRef = useRef(null);

  useGSAP(() => {
    // Text animations timeline (keeping only text animations)
    const textTl = gsap.timeline();

    // Set initial states for text elements
    gsap.set(
      [
        titleRef.current,
        descRef.current,
        buttonRef.current,
        clientsRef.current,
      ],
      {
        y: 100,
        autoAlpha: 0,
      }
    );

    // Animate text elements only
    textTl
      .to(titleRef.current, {
        duration: 1,
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
      })
      .to(
        descRef.current,
        { duration: 1, y: 0, autoAlpha: 1, ease: "power3.out" },
        "-=0.7"
      )
      .to(
        buttonRef.current,
        { duration: 0.8, y: 0, autoAlpha: 1, ease: "power3.out" },
        "-=0.7"
      )
      .to(
        clientsRef.current,
        { duration: 0.8, y: 0, autoAlpha: 1, ease: "power3.out" },
        "-=0.5"
      );
  }, []);

  return (
    <>
      <div className="p-4 md:p-4 lg:p-0 lg:flex md:overflow-visible lg:justify-center lg:items-center lg:h-full lg:mt-4 mt-6">
        <div className="container mx-auto flex flex-col md:flex-col lg:flex-row lg:gap-5 items-center rounded-[20px] md:m-0 lg:m-5 pt-8 md:pt-8 relative md:h-[700px] lg:h-[600px] overflow-hidden">
          {/* Background Video Layer */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-100"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Layer */}
          <div ref={bgLayerRef} className="absolute inset-0 bg-black/50 z-20" />

          {/* Text Content Layer - Static */}
          <div className="flex flex-col gap-3 md:gap-6 lg:gap-8 p-5 md:p-8 lg:p-5 relative z-40 w-full lg:w-1/2">
            <p
              ref={titleRef}
              className="text-4xl md:text-4xl lg:text-5xl font-[500] w-10/12 md:w-10/12 lg:w-5/6 text-white 
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
            >
              Your Premier Partner in Engineering & Construction
            </p>
            <p
              ref={descRef}
              className="text-sm md:text-sm lg:text-xl font-[400] w-full md:w-3/4 lg:w-full text-white 
              drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
            >
              Capital Engineering Consultancy provides innovative design and
              engineering solutions to meet global construction demands
            </p>
            <Button
              ref={buttonRef}
              className="bg-red-600 text-white p-2 md:p-2 rounded-lg hover:bg-red-700 w-36 md:w-36 mb-10 md:mb-16 lg:mb-10 
              drop-shadow-md"
            >
              Know More
            </Button>
          </div>

          {/* Clients Section - Static but animated in */}
          <div
            ref={clientsRef}
            className="absolute w-48 md:w-48 lg:w-1/3 -bottom-1 -right-1 bg-white p-2 md:p-2 lg:p-4 rounded-tl-xl flex items-center gap-10 md:gap-10 lg:gap-40 z-50"
          >
            <div className="absolute w-12 h-12 lg:w-9 lg:h-9 z-50 bottom-9 lg:bottom-20 right-0">
              <Image
                src={"/hero-curve.svg"}
                alt="Hero Curve"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute w-10 h-10 lg:w-14 lg:h-14 z-40 bottom-0 -left-9 lg:-left-14">
              <Image
                src={"/hero-curve.svg"}
                alt="Hero Curve"
                fill
                className="object-cover"
              />
            </div>

            {/* Client Avatars */}
            <div className="flex -space-x-2 md:-space-x-2">
              {[
                "/client1.png",
                "/client2.png",
                "/client3.png",
                "/client4.png",
                "/client5.png",
              ].map((src, index) => (
                <Image
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt={`Client ${index + 1}`}
                  className="w-6 md:w-6 lg:w-16 h-6 md:h-6 lg:h-12 rounded-full border-2 shadow-md shadow-black border-white"
                  width={50}
                  height={50}
                />
              ))}
            </div>
            {/* Review Stars & Text */}
            <div className="flex flex-col gap-1 lg:gap-2 w-3/4 md:w-3/4 lg:w-full">
              <div className="flex flex-row gap-0 md:gap-0">
                {[...Array(5)].map((_, i) => (
                  <IoStar
                    key={i}
                    className="text-black w-3 md:w-3 lg:w-5 h-4 md:h-4 lg:h-5"
                  />
                ))}
              </div>
              <p className="text-[6px] lg:text-sm w-20 md:w-20 lg:w-48 text-black font-semibold">
                10k+ Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
