import React from 'react';
import { useFormik } from 'formik';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            studentID: '',
            message: '',
        },
        onSubmit: (values) => {
            console.log('Form Submitted:', values);
        },
    });

    const inputFields = [
        { name: 'firstName', placeholder: 'First Name', type: 'text' },
        { name: 'lastName', placeholder: 'Last Name', type: 'text' },
        { name: 'email', placeholder: 'E-mail Address', type: 'email' },
        { name: 'studentID', placeholder: 'Student ID', type: 'text' },
    ];

    return (
        <div className="min-h-[80vh] w-full bg-gray-100 flex justify-center items-center px-4 md:px-10 md:py-0 py-10" id="contact-form">
            <div className='flex flex-col justify-center items-center'>
                <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 md:gap-20">
                    {/* Heading section */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <h2 className="uppercase font-sans text-[28px] sm:text-[35px] tracking-widest mb-6 text-center md:text-left">
                            Get in <em className="italic text-gray-600">Touch</em> with Us
                        </h2>
                        <p className="text-black font-sans font-light text-sm md:text-base tracking-wide leading-relaxed text-center md:text-left">
                            We're here to help! Whether you have a question, need support, or want to make an inquiry, feel free to reach out. We're looking forward to connecting with you.
                        </p>
                    </div>

                    {/* Form section */}
                    <form onSubmit={formik.handleSubmit} className="w-full md:w-1/2 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {inputFields.map((field) => (
                                <input
                                    key={field.name}
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    className="uppercase border-0 text-[12px] border-b border-black bg-transparent text-black p-2 focus:outline-none focus:border-yellow-900 transition duration-300"
                                    onChange={formik.handleChange}
                                    value={formik.values[field.name]}
                                />
                            ))}
                        </div>

                        <textarea
                            name="message"
                            placeholder="Your message"
                            rows="4"
                            className="w-full border-0 border-b border-black bg-transparent text-black p-3 focus:outline-none focus:border-yellow-900 transition duration-300"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />

                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-2 hover:bg-gray-100 border border-black hover:text-black transition uppercase w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Divider placed after form */}
                <div className="w-full border-t-1 border-black/20 mt-20"></div>
            </div>
        </div>
    );
}
