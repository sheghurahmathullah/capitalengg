"use client";
import { Button } from "../../../components/ui/button";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useScroll } from "../lib/use-scroll";

const About = () => {
  const sectionRef = useRef(null);
  const redShapeRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const { state } = useScroll();
  useGSAP(() => {
    // Initial state - hide elements
    gsap.set([redShapeRef.current, imageRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        descriptionRef.current,
        buttonRef.current,
      ],
      {
        opacity: 0,
        y: 30,
      }
    );

    // Create timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "center center",
        scrub: true,
        markers: false,
      },
    });

    tl.to(redShapeRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
    })
      .to(
        imageRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, [state]);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto relative overflow-hidden my-20 md:my-32 p-4 md:p-4"
    >
      {/* Red Shape */}
      <div
        ref={redShapeRef}
        className="absolute opacity-0 lg:-top-6 top-2 -right-[29rem] lg:-right-[20rem] w-[12rem] h-[12rem] md:w-[31rem] md:h-[31rem] bg-red-500 rounded-bl-[6rem] rotate-[55deg]"
      ></div>

      {/* Main Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-0 mt-12 lg:mt-20 relative z-10">
        {/* Left Side - Image */}
        <div
          ref={imageRef}
          className="container mx-auto bg-black rounded-xl h-96 lg:h-[35rem] relative md:w-1/2 lg:w-[35rem]"
        >
          <div className="relative w-full h-96 lg:h-[35rem] lg:w-[35rem]">
            <Image
              src="/about.png"
              alt="About Image"
              className="p-5 rounded-3xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* H1 on top of the image for mobile screens */}
          <h1 className="absolute -top-[3rem] left-3 text-black font-bold text-4xl lg:hidden">
            Our Company
          </h1>
        </div>

        {/* Right Side - Text */}
        <div
          ref={contentRef}
          className="container mx-auto flex flex-col lg:gap-2 p-2 -mt-10 lg:py-10 md:w-1/2"
        >
          <h1
            ref={titleRef}
            className="hidden lg:block text-black font-semibold text-5xl py-3"
          >
            Our Company
          </h1>
          <p
            ref={subtitleRef}
            className="text-2xl lg:text-2xl w-96 font-medium py-2 lg:py-0"
          >
            Building Excellence, Engineering the Future.
          </p>
          <p
            ref={descriptionRef}
            className="text-xs lg:text-sm font-normal w-80 md:w-[80%] lg:w-[72%] mt-1 lg:mt-4"
          >
            Capital Engineering Consultancy is a highly respected firm operating
            since 2006, with offices across the UAE, Oman, India, KSA, and the
            UK. Specializing in Engineering Consultancy, Residential &
            Commercial Design, Industrial Developments, Infrastructure, Oil &
            Gas, Environmental Solutions, and BIM services, we take pride in our
            bold and innovative approach. Our commitment to excellence has
            earned us a prestigious clientele, including the Sharjah Ruler’s
            Office, real estate developers, corporations, contractors, and
            individuals. From schools and villas to industrial plants and
            large-scale projects, our designs are known for their uniqueness,
            precision, and responsiveness to client needs.
          </p>
          <div ref={buttonRef}>
            <Button className="bg-white text-black border border-black hover:text-white hover:bg-red-600 rounded-full mt-4">
              Know more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
