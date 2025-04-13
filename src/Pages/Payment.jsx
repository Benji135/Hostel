import React, { useEffect, useCallback } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FormField = ({ label, type = 'text', placeholder, className, ...props }) => {
  return (
    <div>
      <label className="block text-gray-300 font-light mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b border-white text-white p-2 placeholder:text-gray-400 focus:outline-none focus:border-yellow-900 transition duration-300 ${className}`}
        {...props}
      />
    </div>
  );
};

export default function Payment() {

  return (
    <div
      className="payment min-h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 relative"
      style={{ backgroundImage: 'url(./assets/payment.jpg)' }}
    >
      {/* Darkened overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      <div className="max-w-4xl w-full p-8 font-sans payment-form relative z-10 bg-white/0 text-gray-100">
        <h2 className="uppercase text-[25px] sm:text-[30px] tracking-widest text-center font-extralight">
          Payment <em className="italic text-gray-300">details</em>
        </h2>
        <p className="text-center font-sans font-light text-sm md:text-base tracking-wide max-w-xl mx-auto leading-relaxed mt-4 mb-12 italic text-gray-300">
          Secure your booking with confidence and ease.
        </p>

        <form className="grid grid-cols-1 gap-8 text-sm">
          {/* Card Number */}
          <FormField label="Card Number" placeholder="1234 5678 9876 5432" />

          {/* Cardholder Name */}
          <FormField label="Cardholder's Name" placeholder="John Doe" />

          {/* CVV & Expiry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <FormField label="CVV" type="number" placeholder="123" />
            <FormField label="Expiry Date" placeholder="MM/YY" />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block font-light mb-2">Payment Method</label>
            <select
              className="w-full text-white p-2 border-b-1"
            >
              <option className="text-black hover:bg-black hover:text-white">Credit/Debit Card</option>
              <option className="text-black">PayPal</option>
              <option className="text-black">Bank Transfer</option>
            </select>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-6">
            <p className="italic text-gray-400 text-sm">
              Encrypted and secure checkout experience.
            </p>
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black border border-black hover:bg-black hover:text-white transition"
            >
              Confirm Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
