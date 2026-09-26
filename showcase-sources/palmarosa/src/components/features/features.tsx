import React from "react";
import "./features.scss";

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HotelFeaturesProps {
  features: FeatureItem[];
  className?: string;
}

const HotelFeatures: React.FC<HotelFeaturesProps> = ({
  features,
  className = "hotel-features-container",
}) => {
  return (
    <div className={className}>
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="icon">{feature.icon}</div>
          <div className="title">{feature.title}</div>
          <div className="description">{feature.description}</div>
        </div>
      ))}
    </div>
  );
};

export default HotelFeatures;
