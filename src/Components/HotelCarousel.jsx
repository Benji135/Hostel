import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HotelCarousel = () => {
    const rooms = [
        {
            id: 1,
            title: "Private Room",
            
            description: "Enjoy your own private space, ideal for individuals or couples.",
            image: "./assets/car_img_1.jpeg",
            link: "/book/deluxe",
        },
        {
            id: 2,
            title: "Dormitory",
            description: "Affordable shared space with multiple beds, perfect for solo travelers.",
            image: "./assets/car_img_2.jpeg",
            link: "/book/standard",
        },
        {
            id: 3,
            title: "En-Suite Room",
            description: "Room with a private bathroom for extra comfort and privacy.",
            image: "./assets/car_img_3.jpeg",
            link: "/book/suite",
        },
        {
            id: 4,
            title: "Female-Only Room",
            description: "Secure, comfortable room exclusively for female guests.",
            image: "./assets/car_img_4.jpeg",
            link: "/book/ocean-view",
        },
    ];

    return (
        <div className="bg-[#fafafa] py-25 px-4" id="stay-your-way">
            <div className='w-full h-auto mb-8 flex justify-center items-center'>
                <h1 className='heading text-2xl sm:text-3xl text-center'>Stay Your Way</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {rooms.map((room) => (
                    <Link
                        to={room.link}
                        key={room.id}
                        className="relative bg-white text-white rounded-lg shadow-md w-full h-74 overflow-hidden transition-all transform lg:hover:scale-103 duration-300 lg:grayscale lg:hover:grayscale-0"
                        style={{
                            backgroundImage: `url(${room.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Arrow in Top-Right */}
                        <div className="absolute top-3 right-3 rounded-full w-11 h-11 flex items-center justify-center transition-all">
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="text-white text-2xl"  // Ensuring text-white and correct icon size
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
                            <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                            <p className="text-sm">{room.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HotelCarousel;
