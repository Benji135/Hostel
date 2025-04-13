import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Styles/Home.css";
import HotelCarousel from '../Components/HotelCarousel';
import { FaChevronUp } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    const words = document.querySelectorAll('.hero-text span');
    const button = document.querySelector('.hero-button');

    gsap.fromTo(
      '.page',
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.fromTo(
      words,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      }
    );

    gsap.fromTo(
      button,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      }
    );

    // 👇 Chevron animation on refresh
    gsap.fromTo(
      '.chevron-icon',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      }
    );

    // About section animation
    gsap.fromTo(
      ".about-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 85%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  }, []);


  return (
    <div className='page overflow-hidden' id='discover'>
      {/* Hero Section */}
      <div
        className="w-full h-[95vh] md:h-[100vh] flex items-center justify-center relative bg-cover bg-center shadow-lg"
        style={{ backgroundImage: 'url(./assets/bg2.webp)' }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black opacity-90"></div>

        <div className="absolute z-10 text-left sm:left-10 left-6 sm:top-1/2 mb-20 bottom-10 transform pl-5 sm:pl-10 sm:text-left">
          <h1 className="text-white font-normal text-3xl sm:text-5xl md:text-7xl tracking-normal leading-snug hero-text">
            <span className="block mr-4">Where</span>
            <span className="block mr-4">Every</span>
            <span className="block mr-4">Stay</span>
            <br />
            <span className="block mr-4">Becomes</span>
            <span className="block mr-4">a</span>
            <span className="block">Story.</span>
          </h1>

          <div className="hero-button mt-6">
            <button className="bg-white sm:w-60 w-40 text-black px-6 py-3 text-sm sm:text-base text-[10px] rounded-full shadow-md hover:bg-black hover:text-white transition-all duration-300 tracking-wide font-normal">
              DISCOVER SCRIPTURA
            </button>
          </div>
        </div>

        {/* Bottom center icon */}
        <div className="chevron-icon absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <FaChevronUp size={24} />
        </div>
      </div>

      {/* About Section */}
      <div className='py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-60 about-section bg-[#fafafa]' id='welcome'>
        <div className='w-full h-auto mb-8 flex justify-center items-center about-card'>
          <h1 className='heading text-2xl sm:text-3xl text-center'>Step into SCRIPTURA</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="about-card bg-[#fafafa]">
            <div className="relative h-full rounded-xl overflow-hidden">
              <img
                src="./assets/car_img_0.jpeg"
                alt="Cozy Hostel Lounge"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 sm:p-6 rounded-b-xl">
                <p className="text-xs sm:text-sm uppercase">Accommodation</p>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold">
                  Your Comfortable Home Away From Home
                </h2>
                <p className="mt-2 text-xs sm:text-sm md:text-base">
                  Stay with us at the heart of the city, where comfort meets affordability. Enjoy a warm and welcoming environment with everything you need for a relaxing stay.
                </p>
              </div>

            </div>
          </div>

          {/* Small Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="row-span-1 flex flex-col justify-start rounded-xl p-4 bg-[#fafafa] about-card">
              <img
                src="./assets/car_img_1.jpeg"
                alt="Private Room"
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
              />
              <div className="mt-3">
                <p className="text-sm uppercase text-gray-500">Accommodation</p>
                <h3 className="font-semibold text-base sm:text-lg">Comfortable Private Rooms</h3>
                <ul className="text-xs sm:text-sm text-gray-600 list-disc list-inside mt-1">
                  <li>Air-conditioned</li>
                  <li>Soft bedding</li>
                  <li>Work desk included</li>
                  <li>Secure lockers</li>
                </ul>
              </div>
            </div>

            <div className="row-span-2 flex flex-col justify-start rounded-xl p-4 bg-[#fafafa] about-card">
              <img
                src="./assets/car_img_3.jpeg"
                alt="Hostel Lounge"
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg"
              />
              <div className="mt-3">
                <p className="text-sm uppercase text-gray-500">Amenities</p>
                <h3 className="font-semibold text-base sm:text-lg">Cozy Common Areas to Relax</h3>
                <ul className="text-xs sm:text-sm text-gray-600 list-disc list-inside mt-1">
                  <li>Stylish lounge</li>
                  <li>Board games & books</li>
                  <li>24/7 access</li>
                  <li>Friendly atmosphere</li>
                </ul>
              </div>
            </div>

            <div className="row-span-2 flex flex-col justify-start rounded-xl p-4 bg-[#fafafa] about-card">
              <img
                src="./assets/car_img_4.jpeg"
                alt="Fully Equipped Kitchen"
                className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg"
              />
              <div className="mt-3">
                <p className="text-sm uppercase text-gray-500">Facilities</p>
                <h3 className="font-semibold text-base sm:text-lg">Fully Equipped Kitchen</h3>
                <ul className="text-xs sm:text-sm text-gray-600 list-disc list-inside mt-1">
                  <li>Modern appliances</li>
                  <li>Community cooking events</li>
                  <li>Refrigerator & microwave</li>
                  <li>Open 24/7</li>
                </ul>
              </div>
            </div>

            <div className="row-span-1 flex flex-col justify-start rounded-xl p-4 bg-[#fafafa] about-card">
              <img
                src="./assets/car_img_5.jpeg"
                alt="Clean Bathroom"
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
              />
              <div className="mt-3">
                <p className="text-sm uppercase text-gray-500">Hygiene</p>
                <h3 className="font-semibold text-base sm:text-lg">Spotless Shared Bathrooms</h3>
                <ul className="text-xs sm:text-sm text-gray-600 list-disc list-inside mt-1">
                  <li>Regular cleaning</li>
                  <li>Private shower stalls</li>
                  <li>Toiletries provided</li>
                  <li>Well-lit & ventilated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <HotelCarousel />
    </div>
  );
}

export default Home;
