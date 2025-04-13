import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Booking() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            arrivalDate: '',
            departureDate: '',
            children: '',
            message: '',
            additionals: {
                housekeeping: false,
                extraBed: false,
                transportation: false,
                breakfast: false,
            },
        },
        onSubmit: (values) => {
            console.log('Form Submitted:', values);
            navigate('/payment');
        },
    });

    const inputFields = [
        { name: 'firstName', placeholder: 'First Name', type: 'text' },
        { name: 'lastName', placeholder: 'Last Name', type: 'text' },
        { name: 'phone', placeholder: 'Phone Number', type: 'text' },
        { name: 'email', placeholder: 'E-mail Address', type: 'email' },
        { name: 'arrivalDate', placeholder: 'Arrival Date (MM/DD/YYYY)', type: 'text' },
        { name: 'departureDate', placeholder: 'Departure Date (MM/DD/YYYY)', type: 'text' },
        { name: 'children', placeholder: 'Number of Children', type: 'number' },
        { name: 'Student ID', placeholder: 'Student ID', type: 'text' },
    ];

    const additionals = [
        { label: 'Room Services', name: 'housekeeping' },
        { label: 'Extra Bed', name: 'extraBed' },
        { label: 'Transportation', name: 'transportation' },
        { label: 'Breakfast', name: 'breakfast' },
    ];

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        formik.setFieldValue(`additionals.${name}`, checked);
    };

    return (
        <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center px-4" id='make-a-reservation'>
            <div className="max-w-6xl w-full p-8 font-sans">
                <h2 className="booking-title uppercase font-sans text-[25px] sm:text-[30px] tracking-widest mb-10 text-center">
                    Reservation <em className="italic text-gray-600">enquiry</em>
                </h2>
                <p className="booking-desc text-black text-center font-sans font-light text-sm md:text-base tracking-wide max-w-xl mx-auto leading-relaxed">
                    We eagerly await your contact and look forward to welcoming you soon for an unforgettable and luxurious experience.
                </p>

                <form onSubmit={formik.handleSubmit} className="booking-form grid grid-cols-1 md:grid-cols-3 gap-7 gap-x-20">
                    {inputFields.map((field) => (
                        <div key={field.name} className="relative">
                            <input
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                className="uppercase border-0 text-[12px] border-b border-black bg-transparent text-black p-1 focus:outline-none focus:border-yellow-900 transition duration-300 mt-10 w-full"
                                onChange={formik.handleChange}
                                value={formik.values[field.name]}
                            />
                        </div>
                    ))}

                    <div className="md:col-span-3 mt-2">
                        <p className="text-sm text-gray-700 mb-2 font-medium">Additionals:</p>
                        <div className="flex flex-wrap gap-4">
                            {additionals.map((item) => (
                                <label key={item.name} className="flex uppercase items-center gap-2 text-sm text-black/60">
                                    <input
                                        type="checkbox"
                                        name={item.name}
                                        checked={formik.values.additionals[item.name]}
                                        onChange={handleCheckboxChange}
                                        className="hover:cursor-pointer"
                                    />
                                    {item.label}
                                </label>
                            ))}
                        </div>
                    </div>

                    <textarea
                        name="message"
                        placeholder="Your message"
                        className="md:col-span-3 border-0 border-b border-black bg-transparent text-black p-3 mt-4 focus:outline-none focus:border-yellow-900 transition duration-300"
                        rows="4"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />

                    <button
                        type="submit"
                        className="md:col-start-2 my-4 mb-20 mx-15 bg-black text-white px-6 py-2 hover:bg-gray-100 border border-black hover:text-black transition"
                    >
                        Reserve Now
                    </button>
                </form>
            </div>
        </div>
    );
}
