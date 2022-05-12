import { useEffect } from "react";

const Preloader = () => {
    useEffect(() => {
        const loadHandler = () => {
            document.body.classList.add('loaded');
        };
        window.addEventListener('load', loadHandler);
        return () => {
            window.removeEventListener('load', loadHandler);
        };
    }, []);

    return (
        <div className="preloader">
            <div>
                <svg className="loader-circular" viewBox="25 25 50 50">
                    <circle className="loader-path" cx="50" cy="50" r="20" />
                </svg>
            </div>
        </div>
    );
};

export default Preloader;
