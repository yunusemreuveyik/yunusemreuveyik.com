import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./googleReview.scss";
import { fetchGoogleReviews, type GoogleReviewResult } from "../../api/googleReview";
import { publicPath } from "../../utils/publicPath";

const GoogleReviewCards: React.FC = () => {
    const [reviews, setReviews] = useState<GoogleReviewResult | null>(null);
    const [expandedIndexes, setExpandedIndexes] = useState<Set<number>>(new Set());

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchGoogleReviews();
            setReviews(data);
        };

        fetchData();
    }, []);

    const toggleExpanded = (index: number) => {
        setExpandedIndexes((prev) => {
            const updated = new Set(prev);
            if (updated.has(index)) {
                updated.delete(index);
            } else {
                updated.add(index);
            }
            return updated;
        });
    };

    return (
        <div className="google-reviews-section">
            <div className="header">
                <div className="branding">
                    <img
                        src={publicPath("google-logo-transparent.png")}
                        alt="Google Logo"
                        className="google-logo"
                    />
                    <span className="rating">{reviews?.rating ?? "-"}</span>
                    <span className="title">| Top Rated Service</span>
                </div>
            </div>

            <div className="review-card-container">
                {reviews?.reviews.map((r, index) => {
                    const isExpanded = expandedIndexes.has(index);
                    const shouldTruncate = r.text.length > 300 && !isExpanded;
                    const displayedText = shouldTruncate ? r.text.slice(0, 300) + "..." : r.text;

                    return (
                        <div
                            className={`review-card ${shouldTruncate ? "compact" : ""}`}
                            key={index}
                        >
                            <div className="author">
                                {r.profile_photo_url ? (
                                    <img
                                        src={r.profile_photo_url}
                                        alt={r.author_name}
                                        className="avatar"
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <span className="avatar avatar-placeholder" aria-hidden>
                                        {r.author_name.charAt(0)}
                                    </span>
                                )}
                                <div className="info">
                                    <strong>{r.author_name}</strong>
                                    <small>{r.relative_time_description}</small>
                                </div>
                                <img
                                    src={publicPath("google-g-letter.png")}
                                    alt="Google Logo"
                                    className="google-icon"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="stars">
                                {[...Array(r.rating)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        color="#FFD700"
                                    />
                                ))}
                            </div>
                            <p className={`text ${shouldTruncate ? "truncated" : ""}`}>{displayedText}</p>
                            {r.text.length > 300 && (
                                <button
                                    className="read-more"
                                    onClick={() => toggleExpanded(index)}
                                >
                                    {isExpanded ? "Show less" : "Read more"}
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GoogleReviewCards;
