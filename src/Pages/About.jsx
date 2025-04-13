import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        gsap.utils.toArray('.fade-up').forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    return (
        <div className="about-page text-white font-serif">
            <section
                id="welcome"
                className="min-h-screen px-10 py-20 bg-[#111827] flex flex-col justify-center fade-up"
            >
                <h2 className="text-5xl font-light mb-6 tracking-wide">Welcome to SCRIPTURA</h2>
                <p className="text-xl max-w-3xl leading-relaxed text-gray-300">
                    Nestled in the heart of the city, SCRIPTURA offers a refined hostel experience where comfort, calm, and connection are always in focus.
                </p>
            </section>

            <section
                id="mission"
                className="min-h-screen px-10 py-20 bg-[#1E293B] flex flex-col justify-center fade-up"
            >
                <h2 className="text-4xl font-light mb-6 tracking-wide">Our Mission</h2>
                <p className="text-lg max-w-3xl leading-relaxed text-gray-300">
                    To provide an elegant and affordable home-away-from-home, blending thoughtful hospitality with contemporary design and cultural harmony.
                </p>
            </section>

            <section
                id="experience"
                className="min-h-screen px-10 py-20 bg-[#0F766E] flex flex-col justify-center fade-up"
            >
                <h2 className="text-4xl font-light mb-6 tracking-wide">The SCRIPTURA Experience</h2>
                <p className="text-lg max-w-3xl leading-relaxed text-gray-100">
                    From peaceful rooms to shared moments in our stylish lounges, every space is curated to inspire rest, creativity, and conversation.
                </p>
            </section>

            <section
                id="team"
                className="min-h-screen px-10 py-20 bg-[#F1F5F9] text-black flex flex-col justify-center fade-up"
            >
                <h2 className="text-4xl font-light mb-6 tracking-wide">Meet the People Behind SCRIPTURA</h2>
                <p className="text-lg max-w-3xl leading-relaxed text-gray-700">
                    Our dedicated team is passionate about making your stay memorable — with genuine hospitality, local insight, and a personal touch.
                </p>
            </section>

            <section
                id="history"
                className="min-h-screen px-10 py-20 bg-[#E5E7EB] text-black flex flex-col justify-center fade-up"
            >
                <h2 className="text-4xl font-light mb-6 tracking-wide">Our Story</h2>
                <p className="text-lg max-w-3xl leading-relaxed text-gray-700">
                    Inspired by timeless charm and modern simplicity, SCRIPTURA emerged as a space where travelers, creatives, and explorers can truly feel at home.
                </p>
            </section>
        </div>
    );
};

export default About;
