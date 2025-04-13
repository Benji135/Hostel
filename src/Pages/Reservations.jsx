import { useEffect } from "react";
import gsap from "gsap";
import Booking from "../Components/Booking";

const Reservations = () => {
    const paragraph =
        "“Book your stay at SCRIPTURA and unlock a world of comfort, elegance, and unforgettable moments.”";

    useEffect(() => {
        // Page fade in
        gsap.fromTo(
            '.reservations',
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
    }, []);useEffect(() => {
        // Page fade in
        gsap.fromTo(
            '.reservations',
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
        <div className="reservations" id="start-your-journey">
            <section
                className="w-full h-screen bg-cover bg-center relative flex items-center justify-center text-white text-center"
                style={{
                    backgroundImage: `url('./assets/reservations.jpg')`,
                }}
            >
                {/* Overlay */}
                <div className="bg-black/40 absolute inset-0 z-0" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl px-4">
                    <h1 className="text-white uppercase font-sans text-[45px] sm:text-[60px] tracking-widest mb-10 hero-title">
                        {["Begin", "Your", "Journey"].map((word, index) => (
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
            </section>
            <Booking />
        </div>
    );
};

export default Reservations;
