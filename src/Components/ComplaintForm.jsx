import React from 'react';
import { useFormik } from 'formik';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ComplaintForm() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            studentID: '',
            message: '',
        },
        onSubmit: (values) => {
            console.log('Complaint Submitted:', values);
        },
    });

    const inputFields = [
        { name: 'firstName', placeholder: 'First Name', type: 'text' },
        { name: 'lastName', placeholder: 'Last Name', type: 'text' },
        { name: 'email', placeholder: 'E-mail Address', type: 'email' },
        { name: 'studentID', placeholder: 'Student ID', type: 'text' },
    ];

    return (
        <div className="min-h-[60vh] w-full bg-gray-100 flex justify-center px-4 md:px-10 py-6" id="complaint-form">
            <div className="max-w-7xl w-full flex flex-col md:flex-row-reverse items-start gap-10">
                {/* Heading section (right side) */}
                <div className="w-full md:w-1/2">
                    <h2 className="uppercase font-sans text-[26px] sm:text-[32px] tracking-widest mb-6 text-center md:text-left">
                        Let Us <em className="italic text-gray-600">Assist</em>
                    </h2>
                    <p className="text-black font-sans font-light text-sm md:text-base tracking-wide leading-relaxed text-center md:text-left">
                        If something didn’t go as expected, we’d love to hear from you. Tell us what happened so we can make things better.
                    </p>
                </div>

                {/* Form section (left side) */}
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
                        placeholder="Tell us more about your concern"
                        rows="4"
                        className="w-full border-0 border-b border-black bg-transparent text-black p-3 focus:outline-none focus:border-yellow-900 transition duration-300"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />

                    <button
                        type="submit"
                        className="w-full md:w-auto bg-black text-white px-6 py-2 hover:bg-gray-100 border border-black hover:text-black transition uppercase"
                    >
                        Share Feedback
                    </button>
                </form>
            </div>
        </div>
    );
}
