import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">Palma Rosa Hotel</div>
                <div className="footer-socials">
                    <div className="social-item">
                        <a
                            href="https://instagram.com/palmarosa_hotel"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="social-link"
                        >
                            <FaInstagram size={24} />
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
                <div className="footer-copy">© {new Date().getFullYear()} Palma Rosa Hotel · All rights reserved</div>
            </div>
        </footer>
    );
};

export default Footer;
