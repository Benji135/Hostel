import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Landing = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.querySelector(location.state.scrollTo);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div>
            <section id="seminars-events">
                <h2>Seminars & Events</h2>
            </section>

            <section id="teachers-researchers">
                <h2>Teachers and Researchers</h2>
            </section>

            <section id="press">
                <h2>Press</h2>
            </section>

            <section id="filming">
                <h2>Filming at Fontevraud</h2>
            </section>

            <section id="copyists-day">
                <h2>Copyists’ Day at the Museum</h2>
            </section>
        </div>
    );
};

export default Landing;
