import React from 'react'
import { useEffect } from "react";
import gsap from "gsap";
import ContactForm from '../Components/ContactForm'
import ComplaintForm from '../Components/ComplaintForm';

function Contact() {
    const paragraph =
        "“Get in touch with SCRIPTURA and let us help craft your perfect experience”";

    useEffect(() => {
        // Page fade in
        gsap.fromTo(
            '.contact',
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: 'power2.out' }
        );

        // Animate heading word by word
        gsap.fromTo(
            ".hero-word",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
            }
        );
        // Typing effect for paragraph
        gsap.fromTo(
            ".hero-char",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.01,
                stagger: 0.01,
                ease: "power1.inOut",
                delay: 0.8, // starts after heading animation
            }
        );
    }, []);

    return (
        <div className="contact" id='contact'>
            <div
                className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-12"
                style={{ backgroundImage: "url('./assets/contact2.jpg')" }}
            >
                {/* Your form and heading layout here */}
                <div className="bg-black/60 absolute inset-0 z-0" />
                <div className="relative z-10 max-w-4xl px-4 text-center">
                    <h1 className="text-white uppercase font-sans text-[45px] sm:text-[60px] tracking-widest mb-5 hero-title">
                        {["Get", "In", "Touch"].map((word, index) => (
                            <span key={index} className="hero-word inline-block sm:ml-6 ml-3">
                                {word}
                            </span>
                        ))}
                    </h1>

                    <p className="text-white font-sans uppercase text-sm md:text-base tracking-wide max-w-xl mx-auto leading-relaxed hero-text px-2 opacity-70">
                        {paragraph.split("").map((char, index) => (
                            <span key={index} className="hero-char inline-block whitespace-pre italic">
                                {char}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <ContactForm />
            <ComplaintForm />
        </div>
    )
}

export default Contact
