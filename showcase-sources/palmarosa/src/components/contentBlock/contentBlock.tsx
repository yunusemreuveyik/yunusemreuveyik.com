import React from "react";
import "./contentBlock.scss";

interface ContentBlockProps {
    title: string;
    content: string;
    imageSrc: string;
    imageAlt?: string;
    imageOnLeft?: boolean; // default is false (image right)
}

const ContentBlock: React.FC<ContentBlockProps> = ({
    title,
    content,
    imageSrc,
    imageAlt = "Palma Rosa Hotel",
    imageOnLeft = false,
}) => {
    return (
        <div className={`content-item ${imageOnLeft ? "reverse" : ""}`}>
            <div className="content-image">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="content-image-item"
                />
            </div>
            <div className="content-context">
                <div className="title">{title}</div>
                <div className="content">
                    <div>{content}</div>
                </div>
            </div>
        </div>
    );
};

export default ContentBlock;
