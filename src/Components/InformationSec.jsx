import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Complete sections array with full list of items
const sections = [
    {
        title: 'Opening Times',
        id: 'opening-times',
        scrollMarginTop: '7rem', // Unique scroll margin for this section
        data: [
            {
                title: 'Monday',
                items: [
                    { name: 'Lahore', time: '9AM - 10PM' },
                    { name: 'Islamabad', time: '9AM - 10PM' },
                    { name: 'Karachi', time: '9AM - 10PM' },
                ],
            },
            {
                title: 'Tuesday',
                items: [
                    { name: 'Lahore', time: '9AM - 10PM' },
                    { name: 'Islamabad', time: '9AM - 8PM' },
                    { name: 'Karachi', time: '9AM - 8PM' },
                ],
            },
            {
                title: 'Wednesday',
                items: [
                    { name: 'Lahore', time: '9AM - 6PM' },
                    { name: 'Islamabad', time: '10AM - 6PM' },
                    { name: 'Karachi', time: '10AM - 6PM' },
                ],
            },
            {
                title: 'Thursday',
                items: [
                    { name: 'Lahore', time: '10AM - 5PM' },
                    { name: 'Islamabad', time: '10AM - 5PM' },
                    { name: 'Karachi', time: '10AM - 5PM' },
                ],
            },
            {
                title: 'Friday',
                items: [
                    { name: 'Lahore', time: '10AM - 8PM' },
                    { name: 'Islamabad', time: '10AM - 6PM' },
                    { name: 'Karachi', time: '9AM - 9PM' },
                ],
            },
            {
                title: 'Saturday',
                items: [
                    { name: 'Lahore', time: '11AM - 3PM' },
                    { name: 'Islamabad', time: '1PM - 4PM' },
                    { name: 'Karachi', time: '12PM - 5PM' },
                ],
            },
            {
                title: 'Sunday',
                items: [
                    { name: 'Lahore', time: 'Closed' },
                    { name: 'Islamabad', time: 'Closed' },
                    { name: 'Karachi', time: 'Closed' },
                ],
            }
        ],

    },
    {
        title: 'Prices',
        id: 'prices',
        scrollMarginTop: '7rem', // Unique scroll margin for this section
        data: [
            { title: 'Graduates', items: [{ name: 'Term', time: '€60' }] },
            { title: 'Under Graduate - Private', items: [{ name: 'Semester', time: '€40' }] },
            { title: 'Under Graduate - Group', items: [{ name: 'Semester', time: '€30 Per Person' }] },
        ],
    },
    {
        title: 'Where to Park?',
        id: 'where-to-park',
        scrollMarginTop: '7rem', // Unique scroll margin for this section
        data: [
            { title: 'Parking 1', items: [{ name: 'Main Entrance', time: '24/7 – Free' }] },
            { title: 'Parking 2', items: [{ name: 'South Lot', time: '6am > 10pm' }] },
            { title: 'EV Charging', items: [{ name: 'Available Spots', time: '4 Chargers – Type 2' }] },
        ],
    },
    {
        title: 'Services and Equipment Available',
        id: 'services-equipment',
        scrollMarginTop: '7rem',
        data: [
            {
                items: [
                    { icon: '💳', text: 'Online and card payment available' },
                    { icon: '🛏️', text: 'Furnished rooms with beds, mattress, table & chair' },
                    { icon: '📶', text: 'Free high-speed Wi-Fi' },
                    { icon: '🍽️', text: 'Common dining area and kitchen access' },
                    { icon: '🧺', text: 'Laundry facilities available' },
                    { icon: '🚿', text: 'Hot water and clean bathrooms' },
                    { icon: '🧯', text: '24/7 security and fire safety measures' },
                    { icon: '🧹', text: 'Daily housekeeping in common areas' },
                    { icon: '📚', text: 'Study/Reading lounge with charging ports' },
                    { icon: '🎮', text: 'Recreation room with TV and games' },
                    { icon: '🚲', text: 'Bicycle parking available' },
                    { icon: '♿', text: 'Wheelchair-accessible facilities' },
                ]
            }
        ]
    },
    {
        title: 'Conditions and Rules',
        id: 'conditions-rules',
        scrollMarginTop: '7rem',
        data: [
            {
                items: [
                    { icon: '🚫', text: 'No smoking allowed inside the hostel premises' },
                    { icon: '🐕‍🦺', text: 'No pets allowed, except certified service animals' },
                    { icon: '🎉', text: 'No loud music or parties after 10 PM' },
                    { icon: '🛑', text: 'Visitors are not allowed in sleeping areas' },
                    { icon: '🔐', text: 'Lock your belongings. Management is not responsible for lost items' },
                    { icon: '🍽️', text: 'Food is only permitted in the dining/kitchen area' },
                ]
            }
        ]
    }
    
];

// Section component to handle each section
const Section = ({ title, data, id, scrollMarginTop }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: '50% 60%',
                    scrub: true,
                },
            }
        );
    }, []);

    const toggleIndex = (index) => {
        setActiveIndex((prev) => (prev === index ? -1 : index));
    };

    const isFlatList = title === 'Services and Equipment Available' || title === 'Conditions and Rules';

    return (
        <div id={id} style={{ scrollMarginTop }}>
            <div
                ref={sectionRef}
                className="max-w-6xl mx-auto px-4 py-8 font-sans flex flex-col lg:flex-row lg:items-start lg:gap-12"
            >
                <h2 className="text-xl lg:w-1/3 mb-6 lg:mb-0 font-medium text-gray-800 uppercase tracking-wider">
                    {title}
                </h2>

                {/* Special layout for Services and Equipment Available */}
                {isFlatList ? (
                    <div className="lg:w-2/3 w-full bg-[#f7f1f0] rounded-md p-6 space-y-4">
                        {data[0].items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="lg:w-2/3 w-full bg-[#f7f1f0] rounded-md divide-y divide-gray-300">
                        {data.map((section, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => toggleIndex(index)}
                                    className="w-full flex justify-between items-center px-6 py-4 text-left text-base font-bold text-gray-900 focus:outline-none"
                                >
                                    {section.title}
                                    <span
                                        className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                            }`}
                                    >
                                        ▼
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden px-6 transition-all duration-500 ease-in-out ${activeIndex === index && section.items.length > 0
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    {section.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between text-sm py-1 text-gray-700 italic"
                                        >
                                            <span>{item.name}</span>
                                            <span>{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {title === 'Prices' && (
                <p className="text-xs italic text-gray-500 max-w-6xl mx-auto px-4 mt-2">
                    Reservations are closed one hour before the closing time.
                </p>
            )}
            <div className="border-t border-gray-300 max-w-6xl mx-auto my-8"></div>
        </div>
    );
};

// Main component to render sections
const OpeningTimesSection = () => {
    return (
        <div className="space-y-20">
            {sections.map((section, idx) => (
                <Section
                    key={idx}
                    title={section.title}
                    data={section.data}
                    id={section.id}
                    scrollMarginTop={section.scrollMarginTop} // Pass scrollMarginTop here
                />
            ))}
        </div>
    );
};

export default OpeningTimesSection;
