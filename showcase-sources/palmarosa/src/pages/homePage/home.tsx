import Slider from "../../components/slider/slider";
import { publicPath } from "../../utils/publicPath";
import ContentBlock from "../../components/contentBlock/contentBlock";
import HotelFeatures from "../../components/features/features";
import "./home.scss";
import {
    FaSwimmingPool,
    FaWifi,
    FaUmbrellaBeach,
    FaConciergeBell,
    FaSnowflake,
    FaGlassMartiniAlt,
    FaLeaf,
    FaWineBottle,
} from "react-icons/fa";

const items = [
    publicPath("/hotel-pics/1.jpeg"),
    publicPath("/hotel-pics/2.jpeg"),
    publicPath("/hotel-pics/3.jpeg"),
    publicPath("/hotel-pics/4.jpeg"),
    publicPath("/hotel-pics/5.jpeg"),
    publicPath("/hotel-pics/6.jpeg"),
    publicPath("/hotel-pics/7.jpeg"),
    publicPath("/hotel-pics/8.jpeg"),
];

const features = [
    {
        icon: <FaSwimmingPool />,
        title: "Outdoor Pool",
        description: "Enjoy a refreshing swim in our beautifully maintained pool.",
    },
    {
        icon: <FaWifi />,
        title: "Free Wi-Fi",
        description: "Stay connected with high-speed internet throughout the hotel.",
    },
    {
        icon: <FaUmbrellaBeach />,
        title: "Private Beach",
        description: "Relax at our exclusive beach area just minutes away.",
    },
    {
        icon: <FaConciergeBell />,
        title: "24/7 Reception",
        description: "Our staff is available around the clock to assist you.",
    },
    {
        icon: <FaSnowflake />,
        title: "Air Conditioner",
        description: "Stay cool and comfortable with in-room air conditioning.",
    },
    {
        icon: <FaGlassMartiniAlt />,
        title: "Pool Bar",
        description: "Sip your favorite drinks by the pool under the sun.",
    },
    {
        icon: <FaLeaf />,
        title: "Lush Garden",
        description: "Unwind in our tranquil green spaces filled with nature.",
    },
    {
        icon: <FaWineBottle />,
        title: "Minibar",
        description: "Enjoy a selection of refreshments right in your room.",
    },
];

export default function Home() {
    return (
        <div className="home-wrapper">
            <Slider
                items={items}
                overlayPosition="right"
            />

            <div className="home-context-area">
                <div className="welcomming-container">
                    <div className="title">Welcome to Palma Rosa Hotel – Your Tranquil Escape in Kemer</div>
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

                <div className="features-area">
                    <HotelFeatures features={features} />;
                </div>

                <ContentBlock
                    title="Prime Location"
                    content="Located less than 1 km from the pristine Camyuva Beach..."
                    imageSrc={publicPath("/photos/beach1.jpg")}
                    imageOnLeft={true}
                />
            </div>
        </div>
    );
}
