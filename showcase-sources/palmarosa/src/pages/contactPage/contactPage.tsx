import React from "react";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./contactPage.scss";

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="contact-wrapper">
                <h1>Contact Palma Rosa Hotel</h1>
                <p className="intro">
                    We'd love to hear from you! Reach out through any of the methods below or follow us on social media.
                </p>

                <div className="contact-grid">
                    <div className="item">
                        <FaPhoneAlt size={18} />
                        <a href="tel:+905521676131">+90 552 167 61 31</a>
                    </div>
                    <div className="item">
                        <FaInstagram size={18} />
                        <a
                            href="https://instagram.com/palmarosa_hotel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @palmarosa_hotel
                        </a>
                    </div>
                    <div className="item">
                        <FaMapMarkerAlt size={18} />
                        <span>Çamyuva, Kemer, Antalya, Turkey</span>
                    </div>
                    <div className="item">
                        <FaClock size={18} />
                        <span>Open daily · 7/24 hours</span>
                    </div>
                </div>
            </div>

            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.7523503917355!2d30.559325576261532!3d36.56008378119737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3b667e263dd95%3A0x22c520bbd34c17f5!2sPalma%20Rosa%20Hotel!5e0!3m2!1str!2str!4v1747491726431!5m2!1str!2str"
                    loading="lazy"
                    allowFullScreen
                    title="Palma Rosa Hotel Map"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
