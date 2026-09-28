import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
    FaSwimmer,
    FaTree,
    FaWifi,
    FaParking,
    FaCocktail,
    FaSnowflake,
    FaWindowMaximize,
    FaWind,
} from "react-icons/fa";
import "./home.scss";
import Slider from "../../components/slider/slider";
import Gallery from "../../components/gallery/gallery";
import HotelFeatures from "../../components/features/features";
import GoogleReviewCards from "../../components/googleReview/googleReview";
import { publicPath } from "../../utils/publicPath";

const sliderItems = [
    publicPath("/hotel-pics/1.jpeg"),
    publicPath("/hotel-pics/2.jpeg"),
    publicPath("/hotel-pics/3.jpeg"),
    publicPath("/hotel-pics/4.jpeg"),
    publicPath("/hotel-pics/5.jpeg"),
    publicPath("/hotel-pics/6.jpeg"),
    publicPath("/hotel-pics/7.jpeg"),
    publicPath("/hotel-pics/8.jpeg"),
];

const hotelImages = [
    { src: publicPath("/hotel-pics/1.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/2.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/3.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/4.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/5.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/6.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/7.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/8.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/9.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/10.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/11.jpeg"), description: "" },
    { src: publicPath("/hotel-pics/12.jpeg"), description: "" },
];

const hotelFeatures = [
    {
        icon: <FaSwimmer />,
        title: "Pool Bar",
        description: "Enjoy cocktails poolside.",
    },
    {
        icon: <FaTree />,
        title: "Garden",
        description: "Lush Mediterranean landscaping.",
    },
    {
        icon: <FaSnowflake />,
        title: "Air Conditioner",
        description: "Stay cool all summer.",
    },
    {
        icon: <FaCocktail />,
        title: "Minibar",
        description: "Cold drinks at your fingertips.",
    },
    {
        icon: <FaWindowMaximize />,
        title: "Balcony",
        description: "Each room has a private view.",
    },
    {
        icon: <FaWind />,
        title: "Hair Dryer",
        description: "Provided in every bathroom.",
    },
    {
        icon: <FaWifi />,
        title: "Free WiFi",
        description: "Available across the hotel.",
    },
    {
        icon: <FaParking />,
        title: "Free Parking",
        description: "Safe and secure.",
    },
];

export default function Home() {
    return (
        <div className="home-page">
            <Slider items={sliderItems} overlayPosition="right" />

            <div className="welcome-wrapper">
                <h2 className="welcome-title">Palma Rosa Hotel</h2>
                <div className="welcome-body">
                    <div className="welcomming-container">
                        <div className="content">
                            Nestled in the serene Çamyuva district of Kemer, Palma Rosa Hotel offers a peaceful retreat just
                            a short stroll from the Mediterranean Sea. Surrounded by lush gardens and the natural beauty of
                            the Turkish Riviera, our boutique hotel provides a perfect blend of comfort and relaxation. Our
                            accommodations feature air-conditioned rooms equipped with flat-screen TVs, and select units
                            offer private balconies or terraces, allowing guests to enjoy the surrounding views. Each room
                            includes a private bathroom with complimentary toiletries and a hairdryer, ensuring a
                            comfortable stay. Guests can start their day with a buffet breakfast served each morning. The
                            hotel also features an outdoor swimming pool, a private beach area, and a garden, providing
                            ample opportunities for relaxation and leisure. Additional amenities include free Wi-Fi
                            throughout the property, free private parking, and a 24-hour front desk. Palma Rosa Hotel is
                            conveniently located near several attractions, including the Phaselis Ancient City and Moonlight
                            Beach and Park. Experience the charm and tranquility of Palma Rosa Hotel, where comfort meets
                            the natural beauty of Kemer.
                        </div>
                    </div>
                    <div className="gallery">
                        <Gallery images={hotelImages} className="hotel-gallery" />
                    </div>
                </div>
            </div>

            <div className="features-area">
                <HotelFeatures features={hotelFeatures} />
            </div>

            <div className="custom-review-block">
                <GoogleReviewCards />
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
}
