import React, { useState, useEffect } from 'react';
import './Styles/DropdownNavbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dropdownData = {
    menu: [
        {
            title: "Home",
            items: [
                { name: "Discover", bookmark: "/home#discover" },
                { name: "Welcome", bookmark: "/home#welcome" },
                { name: "Stay Your Way", bookmark: "/home#stay-your-way" },
            ],
        },
        {
            title: "Plan Your Visit",
            items: [
                { name: "Practical Information", bookmark: "/information#front" },
                { name: "Your Guide to SCRIPTURA", bookmark: "/information#opening-times" },
                { name: "Services And Equipments", bookmark: "/information#services-equipment" },
                { name: "Conditions and Rules", bookmark: "/information#conditions-rules" },
            ],
        },
        {
            title: "Reservations",
            items: [
                { name: "Begin Your Journey", bookmark: "/reservations#start-your-journey" },
                { name: "Make a Reservation", bookmark: "/reservations#make-a-reservation" },
            ],
        },
        {
            title: "Get in Touch",
            items: [
                { name: "Get in Touch", bookmark: "/contact#contact" },
                { name: "Contact US", bookmark: "/contact#contact-form" },
                { name: "Got a Complaint", bookmark: "/contact#complaint-form" },
                { name: "Visit Us", bookmark: "/location" },
            ],
        },
    ],
};

const MenuDropdown = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const el = document.querySelector('.menu-dropdown-panel');
        if (isOpen) {
            gsap.fromTo(
                el,
                { top: '-100%', opacity: 0, display: 'none' },
                { top: 0, opacity: 1, display: 'flex', duration: 0.5, ease: 'power2.out' }
            );
        } else {
            gsap.to(el, {
                top: '-100%',
                opacity: 0,
                duration: 0.4,
                ease: 'power2.inOut',
                onComplete: () => gsap.set(el, { display: 'none' }),
            });
        }
    }, [isOpen]);

    const handleScroll = (section) => {
        onClose();

        if (section.startsWith('/')) {
            const [path, hash] = section.split('#');
            if (location.pathname !== path) {
                navigate(path);
                setTimeout(() => {
                    if (hash) {
                        const el = document.getElementById(hash);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else if (hash) {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate(path);
            }
        } else if (section.startsWith('#')) {
            const el = document.querySelector(section);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="menu-dropdown-panel absolute top-0 left-0 w-full bg-white text-black shadow-lg hidden flex-col py-10 lg:px-50 md:px-30 px-15 max-h-screen overflow-y-auto overscroll-contain">
            <div className="flex justify-start mb-10 -ml-6">
                <button
                    onClick={onClose}
                    aria-label="Close Menu"
                    className="group text-lg font-medium text-gray-700 flex items-center gap-2 relative overflow-hidden cursor-pointer"
                >
                    ✕
                    <span className="relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gray-700 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        CLOSE
                    </span>
                </button>
            </div>

            {/* Dropdown for larger screens */}
            <div className="menu-dropdown hidden lg:flex justify-between gap-6 flex-wrap">
                {dropdownData.menu.map((col, index) => (
                    <div key={index} className="flex-1 min-w-[220px] flex flex-col gap-3">
                        <h4 className="font-bold sm:text-lg text-[14px] text-gray-700 mb-3">{col.title}</h4>
                        {col.items.map((item, i) => (
                            <a
                                href={item.bookmark}
                                key={i}
                                className="text-black sm:text-[1.1rem] text-[14px] font-light hover:text-gray-500 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll(item.bookmark);
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                ))}
            </div>

            {/* Dropdown for smaller screens */}
            <div className="lg:hidden flex flex-col gap-3">
                {dropdownData.menu.map((col, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <h4 className="font-bold sm:text-lg text-[14px] text-gray-700 mb-3">{col.title}</h4>
                        <select
                            className="text-black sm:text-[1.1rem] text-[14px] font-light hover:text-gray-500 transition-colors"
                            onChange={(e) => handleScroll(e.target.value)}
                        >
                            <option value="" disabled selected>Select an option</option>
                            {col.items.map((item, i) => (
                                <option key={i} value={item.bookmark}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </section>
    );
};

// The rest of the code remains the same...


const TicketingDropdown = ({ isOpen, onClose }) => {
    useEffect(() => {
        const el = document.querySelector('.ticketing-dropdown-panel');
        if (isOpen) {
            gsap.fromTo(
                el,
                { top: '-100%', opacity: 0, display: 'none' },
                { top: 0, opacity: 1, display: 'flex', duration: 0.5, ease: 'power2.out' }
            );
        } else {
            gsap.to(el, {
                top: '-100%',
                opacity: 0,
                duration: 0.4,
                ease: 'power2.inOut',
                onComplete: () => gsap.set(el, { display: 'none' }),
            });
        }
    }, [isOpen]);

    const ticketingItems = [
        {
            id: 1,
            title: "Dormitory",
            description: "Affordable shared space with multiple beds, perfect for solo travelers.",
            image: "./assets/car_img_1.jpeg",
            link: "/book/daily"
        },
        {
            id: 2,
            title: "Private Room",
            description: "Enjoy your own private space, ideal for individuals or couples.",
            image: "./assets/car_img_2.jpeg",
            link: "/book/group"
        },
        {
            id: 3,
            title: "En-Suite Room",
            description: "Room with a private bathroom for extra comfort and privacy.",
            image: "./assets/car_img_3.jpeg",
            link: "/book/school"
        },
        {
            id: 4,
            title: "Female-Only Room",
            description: "Secure, comfortable room exclusively for female guests.",
            image: "./assets/car_img_4.jpeg",
            link: "/book/guided-tour"
        },
    ];

    return (
        <section className="ticketing-dropdown-panel absolute top-0 left-0 w-full bg-white text-black p-8 shadow-none hidden flex-col max-h-screen overflow-y-auto overscroll-contain">
            <div className="flex justify-start mb-3 px-30 py-5">
                <button
                    onClick={onClose}
                    aria-label="Close Ticketing Menu"
                    className="group text-lg font-medium text-gray-700 flex items-center gap-2 relative overflow-hidden cursor-pointer"
                >
                    ✕
                    <span className="relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gray-700 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        CLOSE
                    </span>
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-30">
                {ticketingItems.map((item) => (
                    <div key={item.id} className="flex flex-col w-84 h-110 relative">
                        <div className="bg-white text-black flex flex-col h-full">
                            <div className="w-full h-120 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                            <div className="p-4 flex flex-col justify-between h-full">
                                <h3 className="text-[1.125rem] font-medium mb-2">{item.title}</h3>
                                <p className="text-[0.95rem] text-gray-700 mb-4 font-light">{item.description}</p>
                                <div className="mt-auto">
                                    <Link to={item.link}>
                                        <button className="w-35 h-13 bg-white text-black py-2 border-[1px] border-black hover:bg-black transition-all duration-300 hover:text-white cursor-pointer">
                                            Book Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 -right-7 h-full border-r-1 border-gray-300" />
                    </div>
                ))}
            </div>
        </section>
    );
};

const DropdownNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTicketingOpen, setIsTicketingOpen] = useState(false);
    const [bgWhite, setBgWhite] = useState(false);

    useEffect(() => {
        gsap.fromTo('.navbar', { y: '-100%', opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const atThreshold = window.scrollY >= window.innerHeight / 2;
            if (atThreshold && !bgWhite) {
                setBgWhite(true);
                gsap.to('.navbar', { backgroundColor: '#ffffff', color: '#000000', duration: 0.5 });
            } else if (!atThreshold && bgWhite) {
                setBgWhite(false);
                gsap.to('.navbar', { backgroundColor: 'transparent', color: '#ffffff', duration: 0.5 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [bgWhite]);

    // Disable body scroll when dropdown is open
    useEffect(() => {
        if (isMenuOpen || isTicketingOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen, isTicketingOpen]);

    return (
        <nav className="navbar bg-transparent text-white py-6 md:px-30 sm:px-15 px-10 flex justify-between sm:items-center uppercase font-sans text-sm fixed top-0 left-0 w-full z-50">
            <div className="sm:flex-1">
                {!isTicketingOpen && (
                    <button
                        onClick={() => {
                            setIsMenuOpen(prev => !prev);
                            setIsTicketingOpen(false);
                        }}
                        aria-label="Open Menu"
                        className="bg-none border-none text-lg flex items-center gap-2 cursor-pointer"
                    >
                        <span className="icon hamburger-icon md:text-xl text-[17px]">&#9776;</span>
                        <span className="menu font-light md:text-xl text-[17px] sm:block hidden">Menu</span>
                    </button>
                )}
            </div>

            <div className="sm:flex-1 ml-2 text-center">
                <h1 className="md:text-2xl text-lg font-light tracking-widest">
                    {"Scriptura".split("").map((char, idx) => (
                        <span key={idx} className="spin-character">{char}</span>
                    ))}
                </h1>
            </div>

            <div className="flex-1 flex justify-end gap-5 items-center">
                {!isMenuOpen && (
                    <button
                        onClick={() => {
                            setIsTicketingOpen(prev => !prev);
                            setIsMenuOpen(false);
                        }}
                        className="group reservations bg-none border-none font-light tracking-wider cursor-pointer md:text-base text-sm relative sm:block hidden"
                    >
                        Stay With Us
                        <span className="after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-white after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-83 ml-2">
                            <span className='md:text-[14px] text-[11px]'>▼</span>
                        </span>
                    </button>
                )}
            </div>

            <MenuDropdown isOpen={isMenuOpen} onClose={() => { setIsMenuOpen(false); setIsTicketingOpen(false); }} />
            <TicketingDropdown isOpen={isTicketingOpen} onClose={() => { setIsTicketingOpen(false); setIsMenuOpen(false); }} />
        </nav>
    );
};

export default DropdownNavbar;
