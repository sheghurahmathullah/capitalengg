"use client";
import { Button } from "../../../components/ui/button";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SideMenu from "@/components/headers/component/SideMenu";
import MobileNav from "@/components/headers/component/MobileNav";
import MobileMenuSocials from "@/components/headers/component/MobileMenuSocials";
import Nav from "@/components/headers/component/Nav";
import { useEffect } from "react";
import Link from "next/link";

const HeroWithNavbar = () => {
  // Navbar state
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Hero section state
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const clientsRef = useRef(null);
  const videoRef = useRef(null);
  const bgLayerRef = useRef(null);

  // Navbar effects
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const menuWrapper = document.querySelector(".mobile-menu-wrapper");
      const menuContainer = document.querySelector(".mobile-menu-area");

      if (
        menuWrapper &&
        menuContainer &&
        !menuContainer.contains(event.target) &&
        menuWrapper.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Hide navbar when scrolled beyond hero section
      const heroHeight = window.innerHeight;
      setIsNavbarVisible(scrollPosition < heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hero animations
  useGSAP(() => {
    const textTl = gsap.timeline();

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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navbar - Only visible in hero section */}
      <header
        className={`fixed w-full z-50 transition-opacity duration-300 ${isNavbarVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Mobile Menu */}
        <div
          className={`mobile-menu-wrapper ${
            mobileMenuOpen ? "body-visible" : ""
          } `}
        >
          <div className="mobile-menu-area">
            <button
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="mobile-logo">
              <Link scroll={false} href="/">
                <Image
                  height={30}
                  width={150}
                  style={{ width: "150px", height: "30px" }}
                  src="/new-logo.png"
                  alt="Ovation"
                />
              </Link>
            </div>
            <div className="mobile-menu">
              <ul>
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/expertise">OUR EXPERTISE</Link>
                </li>
                <li>
                  <Link href="/sectors">SECTORS</Link>
                </li>
                <li>
                  <Link href="/newsroom">NEWSROOM</Link>
                </li>
                <li>
                  <Link href="/careers">CAREERS</Link>
                </li>
                <li>
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
            <div className="sidebar-wrap">
              <h6>Unit 2109, 21st floor Regal Tower, Business Bay,</h6>
              <h6>Dubai, UAE</h6>
            </div>
            <div className="sidebar-wrap">
              <h6>
                <a href="tel:1800123654987">+971 42546155 </a>
              </h6>
              <h6>
                <a href="mailto:info@capitalengg.com">info@capitalengg.com</a>
              </h6>
            </div>
            <div className="social-btn style3">
              <MobileMenuSocials />
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`nav-header header-layout3 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
          <div
            className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""}`}
          >
            <div className="menu-area">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="header-logo">
                      <Link scroll={false} href="/">
                        <Image
                          width={250}
                          height={44}
                          src={
                            isScrolled
                              ? "/assets/img/capital-logo-blue.webp"
                              : "/new-logo.png"
                          }
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-auto ms-auto">
                    <nav className="main-menu d-none d-lg-inline-block">
                      <ul>
                        <li>
                          <Link
                            href="/"
                            className={isScrolled ? "text-black" : "text-white"}
                          >
                            HOME
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link
                            href="/expertise"
                            className={isScrolled ? "text-black" : "text-white"}
                          >
                            OUR EXPERTISE
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/architecture-and-landscape">
                                Architecture & Landscape
                              </Link>
                            </li>
                            <li>
                              <Link href="/fitout-and-interior-design">
                                Fit Out & Interior Design
                              </Link>
                            </li>
                            <li>
                              <Link href="/power-and-infrastructure">
                                Power & Infrastructure
                              </Link>
                            </li>
                            <li>
                              <Link href="/bim-service">BIM Services</Link>
                            </li>
                            <li>
                              <Link href="/mep-design">
                                MEP Design and Services
                              </Link>
                            </li>
                            <li>
                              <Link href="/structural-engineering">
                                Structural Engineering
                              </Link>
                            </li>
                            <li>
                              <Link href="/oil-and-gas-marine">
                                Oil & Gas and Marine & Ports
                              </Link>
                            </li>
                            <li>
                              <Link href="/project-management-consultancy">
                                Project Management Consultancy
                              </Link>
                            </li>
                            <li>
                              <Link href="/environmental-solutions">
                                Environmental Solutions
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link
                            href="/sectors"
                            className={isScrolled ? "text-black" : "text-white"}
                          >
                            SECTORS
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/commercial">Commercial</Link>
                            </li>
                            <li>
                              <Link href="/education">Education</Link>
                            </li>
                            <li>
                              <Link href="/railways">Railways</Link>
                            </li>
                            <li>
                              <Link href="/shelters">Shelters</Link>
                            </li>
                            <li>
                              <Link href="/oil-and-gas">Oil & Gas</Link>
                            </li>
                            <li>
                              <Link href="/power-and-energy">
                                Power & Energy
                              </Link>
                            </li>
                            <li>
                              <Link href="/marine-and-ports">
                                Marine & Ports
                              </Link>
                            </li>
                            <li>
                              <Link href="/healthcare-and-hospitality">
                                Healthcare & Hospitality
                              </Link>
                            </li>
                            <li>
                              <Link href="/industrial-and-logistics">
                                Industrial & Logistics
                              </Link>
                            </li>
                            <li>
                              <Link href="/roads-and-infrastructure">
                                Roads & Infrastructure
                              </Link>
                            </li>
                            <li>
                              <Link href="/wtp-ro-and-desalination">
                                WTP, RO & Desalination Plants
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            href="/newsroom"
                            className={isScrolled ? "text-black" : "text-white"}
                          >
                            NEWSROOM
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/careers"
                            className={isScrolled ? "text-black" : "text-white"}
                          >
                            CAREERS
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className={isScrolled ? "text-black" : "text-white"}
                          >
                            CONTACT
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="navbar-right d-inline-flex d-lg-none">
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className={`menu-toggle sidebar-btn ${isScrolled ? "text-black" : "text-white"}`}
                      >
                        <span
                          className={`line ${isScrolled ? "bg-black" : "bg-white"}`}
                        ></span>
                        <span
                          className={`line ${isScrolled ? "bg-black" : "bg-white"}`}
                        ></span>
                        <span
                          className={`line ${isScrolled ? "bg-black" : "bg-white"}`}
                        ></span>
                      </button>
                    </div>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <div className="header-button">
                      <Link
                        scroll={false}
                        href="/contact"
                        style={{
                          background: "#071E53",
                          padding: "15px",
                          borderRadius: "15px",
                        }}
                        className="btn"
                      >
                        <span className="link-effect">
                          <span className="effect-1">GET IN TOUCH</span>
                          <span className="effect-1">GET IN TOUCH</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="h-screen w-full flex items-center justify-center">
        <div className="container mx-auto h-full flex flex-col md:flex-col lg:flex-row lg:gap-5 items-center relative overflow-hidden">
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
          <div className="flex flex-col gap-3 md:gap-6 lg:gap-8 p-5 md:p-8 lg:p-5 relative z-40 w-full lg:w-1/2 mt-28 md:mt-32 lg:mt-10">
            <p
              ref={titleRef}
              className="text-5xl md:text-5xl lg:text-6xl font-[500] w-11/12 md:w-11/12 lg:w-full text-white 
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
            >
              Your Premier Partner in Engineering & Construction
            </p>
            <p
              ref={descRef}
              className="text-base md:text-lg lg:text-2xl font-[400] w-full md:w-4/5 lg:w-full text-white 
              drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
            >
              Capital Engineering Consultancy provides innovative design and
              engineering solutions to meet global construction demands
            </p>
            <Link href="/about">
              <Button
                ref={buttonRef}
                className="bg-red-600 text-white p-3 md:p-3 hover:bg-red-700 w-40 md:w-40 mb-10 md:mb-16 lg:mb-10 
                drop-shadow-md text-lg"
              >
                Know More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithNavbar;
