import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaChevronUp,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    useEffect(() => {
        gsap.fromTo(
            ".footer-icons",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".footer-icons",
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black text-white px-6 md:px-24 py-16 text-sm relative" id="contact">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
                <div>
                    <h2 className="text-lg font-semibold mb-4 uppercase tracking-widest">
                        Stay Connected to SCRIPTURA
                    </h2>
                    <div className="flex space-x-4">
                        <div className="footer-icons"><Icon><FaFacebookF /></Icon></div>
                        <div className="footer-icons"><Icon><FaInstagram /></Icon></div>
                        <div className="footer-icons"><Icon><FaLinkedinIn /></Icon></div>
                        <div className="footer-icons"><Icon><FaYoutube /></Icon></div>
                    </div>

                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-lg font-semibold mb-4 uppercase tracking-widest">
                        Subscribe to our Newsletter
                    </h2>
                    <form className="flex w-full">
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="flex-grow px-4 py-2 bg-black border border-white text-white placeholder-gray-400 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black px-4 py-2 font-semibold"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 my-10" />

            {/* Logos & Links */}
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
                <div className="flex items-center space-x-10">
                    <div className="text-left space-y-1">
                        <p className="text-lg font-bold">SCRIPTURA</p>
                        <p className="text-xs tracking-wider">ETERNALLY DIFFERENT</p>
                    </div>
                    <div className="text-left">
                        <p className="text-xs">Locations<br />Lahore · Islamabad · Karachi</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-white font-semibold text-sm">
                    <div className="space-y-2 flex flex-col">
                        <FooterLink to="/contact">Contact</FooterLink>
                        <FooterLink to="/location">Visit</FooterLink>
                    </div>
                    <div className="space-y-2 flex flex-col">
                        <FooterLink to="/join">Join Us</FooterLink>
                        <FooterLink to="/archives">Events and Projects</FooterLink>
                    </div>
                    <div className="space-y-2 flex flex-col">
                        <FooterLink to="/partners">Partners and Support</FooterLink>
                    </div>
                </div>

            </div>

            {/* Divider */}
            <hr className="border-gray-700 my-6" />

            {/* Bottom Legal */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 tracking-widest">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-center md:text-left">
                    <Link to="/legal">LEGAL INFORMATION</Link>
                    <Link to="/privacy">PERSONAL DATA</Link>
                    <Link to="/accessibility">COMPLIANTS</Link>
                </div>

            </div>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-200 transition z-50"
            >
                <FaChevronUp />
            </button>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <Link
        to={to}
        className="relative w-fit after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
    >
        {children}
    </Link>
);



const Icon = ({ children }) => (
    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition">
        {children}
    </div>
);

export default Footer;
