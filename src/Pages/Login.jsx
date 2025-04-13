import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function ContactForm() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".Login",
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    animateSignupIn();
  }, []);

  const animateSignupIn = () => {
    gsap.fromTo(
      ".signup-heading",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".signup-form",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
    );
  };

  const animateLoginIn = () => {
    gsap.fromTo(
      ".login-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".login-form",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(
      ".login-switch",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.4 }
    );
  };

  const handleLoginClick = () => {
    gsap.to(".signup-heading, .signup-form", {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setShowLogin(true);
        setTimeout(() => {
          animateLoginIn();
        }, 50);
      }
    });
  };

  const handleJoinClick = () => {
    gsap.to(".login-heading, .login-form, .login-switch", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setShowLogin(false);
        setTimeout(() => {
          animateSignupIn();
        }, 50);
      }
    });
  };

  const inputClasses =
    "w-full p-3 bg-white/10 text-white rounded-md border border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white";

  return (
    <div
      className="Login min-h-screen w-full bg-black bg-cover bg-center text-white flex items-center justify-center px-4 md:px-10 py-12"
      style={{ backgroundImage: "url('./assets/reservations.jpg')" }}
    >
      <div className="contact-wrapper w-full max-w-4xl p-6 md:p-10">
        {!showLogin ? (
          <div>
            {/* Sign Up Section */}
            <div className="signup-heading mb-6 text-center">
              <h2 className="text-4xl md:text-5xl font-light font-sans tracking-widest uppercase">
                SCRIPTURA
              </h2>
              <p className="text-md md:text-lg mt-2 font-thin">
                Let’s start the journey,{" "}
                <span className="italic text-gray-300">together.</span>
              </p>
            </div>
            <form className="signup-form space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                {["First Name", "Last Name"].map((ph, idx) => (
                  <input key={idx} placeholder={ph} className={inputClasses} />
                ))}
              </div>
              <input placeholder="E-mail" className={inputClasses} />
              <input placeholder="Password" className={inputClasses} />
              <div className="flex flex-col md:flex-row gap-4">
                {["Phone Number", "Age"].map((ph, idx) => (
                  <input
                    key={idx}
                    placeholder={ph}
                    className={inputClasses}
                    type={ph === "Age" ? "number" : "text"}
                  />
                ))}

              </div>
              <button
                type="submit"
                className="w-full p-3 bg-white text-black font-semibold rounded-md border hover:bg-transparent hover:text-white hover:border-white transition"
              >
                JOIN
              </button>
              <div className="text-center text-sm text-gray-400 mt-4">
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={handleLoginClick}
                  className="text-white underline hover:text-gray-300"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div>
            {/* Login Section */}
            <div className="login-heading mb-6 text-center opacity-0">
              <h2 className="text-4xl md:text-5xl font-light font-sans tracking-widest uppercase">
                Welcome Back
              </h2>
              <p className="text-md md:text-lg mt-2 font-thin text-gray-300">
                Login to continue your journey
              </p>
            </div>

            <form className="login-form space-y-4 opacity-0">
              <input type="email" placeholder="Email" className={inputClasses} />
              <input type="password" placeholder="Password" className={inputClasses} />

              <Link
                to="/home"
                className="block text-center w-full p-3 bg-white text-black font-semibold rounded-md border hover:bg-transparent hover:text-white hover:border-white transition"
              >
                Welcome
              </Link>
            </form>
            <div className="login-switch text-center text-sm text-gray-400 mt-4 opacity-0">
              <p>
                Don’t have an account?{" "}
                <a
                  href="#"
                  onClick={handleJoinClick}
                  className="text-white underline hover:text-gray-300"
                >
                  Join Us
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
