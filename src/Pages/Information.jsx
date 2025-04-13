import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaChevronUp } from "react-icons/fa";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InformationSec from '../Components/InformationSec';

gsap.registerPlugin(ScrollTrigger);

const Information = () => {
    useEffect(() => {
        // Page fade in
        gsap.fromTo(
            '.information',
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: 'power2.out' }
        );

        // Hero text animation
        const words = document.querySelectorAll('.hero-text span');

        gsap.fromTo(
            words,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.03,
                duration: 0.6,
                ease: 'power3.out',
            }
        );

        // Scroll text animation
        gsap.utils.toArray('.scrub-text').forEach((el) => {
            gsap.fromTo(
                el,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        end: '60% 60%',
                        scrub: true,
                        markers: false,
                    },
                }
            );
        });
    }, []);

    return (
        <div className="information font-serif">
            <div className="relative h-[95vh] sm:h-[100vh] overflow-hidden" id='front'>
                <img
                    src="./assets/bg2.webp"
                    alt="Fontevraud Abbey"
                    className="w-full h-full object-cover"
                />
                <div className="bg-black/40 absolute inset-0 z-0" />
                {/* Top Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent opacity-90 z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent opacity-90 z-10"></div>

                {/* Centered Hero Text */}
                <div className="absolute inset-0 flex items-center justify-center z-20 px-2 text-center">
                    <h1 className="hero-text text-white uppercase font-sans text-[35px] sm:text-[60px] tracking-widest flex flex-wrap justify-center">
                        <span className="inline-block sm:ml-0 ml-2">
                            {"Practical".split("").map((char, i) => (
                                <span key={`p-${i}`} className="inline-block">
                                    {char}
                                </span>
                            ))}
                        </span>
                        <span className="inline-block ml-2 sm:ml-3">
                            {"Information".split("").map((char, i) => (
                                <span key={`i-${i}`} className="inline-block">
                                    {char}
                                </span>
                            ))}
                        </span>
                    </h1>

                </div>
                {/* Bottom center icon */}
                <div className="chevron-icon absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
                    <FaChevronUp size={24} />
                </div>
            </div>

            <div
                className="lg:px-50 md:px-30 sm:px-20 px-10 py-16 flex justify-end items-center min-h-[40vh] bg-[#fff4f4]"
            >
                <p
                    className="scrub-text italic uppercase font-sans text-sm md:text-lg leading-[30px] tracking-widest max-w-2xl text-left text-[#4a4a4a]"
                >
                    Prices and opening times for the Royal Abbey and the Museum of Modern Art vary according to the season and the programme.
                    To help you plan your visit, find out below all the useful information and benefits you can enjoy as you explore Europe’s largest monastic city.
                </p>
            </div>

            <div className="sticky top-[4rem] flex items-center justify-center z-10 bg-white px-10 text-sm uppercase font-sans shadow-sm">
                <div className="flex justify-start items-center gap-x-6 py-4 px-0 overflow-x-auto whitespace-nowrap">
                    <a href="#opening-times" className="text-gray-500 hover:text-black cursor-pointer duration-500 transition-all">OPENING TIMES</a>
                    <a href="#prices" className="text-gray-500 hover:text-black cursor-pointer duration-500 transition-all">PRICES</a>
                    <a href="#where-to-park" className="text-gray-500 hover:text-black cursor-pointer duration-500 transition-all">WHERE TO PARK?</a>
                    <a href="#services-equipment" className="text-gray-500 hover:text-black cursor-pointer duration-500 transition-all">SERVICES AND EQUIPMENT AVAILABLE</a>
                    <a href="#conditions-rules" className="text-gray-500 hover:text-black cursor-pointer duration-500 transition-all">CONDITIONS AND RULES</a>
                </div>
            </div>

            <InformationSec />
        </div>
    );
};

export default Information;
