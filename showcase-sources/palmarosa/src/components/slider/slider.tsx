import React, { useState } from "react";
import "./slider.scss";

interface CarouselProps {
    items: string[];
    overlayPosition?: "left" | "center" | "right";
}

const overlayData = [
    {
        title: "Palma Rosa Hotel",
        subtitle: "Enjoy the Mediterranean breeze 🌊",
    },
    {
        title: "Feel the Nature",
        subtitle: "Relax among green gardens 🌿",
    },
    {
        title: "", // No text — overlay should not show
        subtitle: "",
    },
];

const Slider: React.FC<CarouselProps> = ({ items, overlayPosition = "left" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel">
            <button
                className="nav left"
                onClick={goToPrev}
            >
                ‹
            </button>
            <div className="carousel-window">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((src, index) => {
                        const { title, subtitle } = overlayData[index] || {};
                        const hasText = title || subtitle;

                        return (
                            <div
                                className="carousel-item"
                                key={index}
                            >
                                <img
                                    src={src}
                                    alt={`slide-${index}`}
                                />
                                {hasText && (
                                    <div className={`carousel-overlay ${overlayPosition}`}>
                                        {title && <h3>{title}</h3>}
                                        {subtitle && <p>{subtitle}</p>}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <button
                className="nav right"
                onClick={goToNext}
            >
                ›
            </button>
        </div>
    );
};

export default Slider;
