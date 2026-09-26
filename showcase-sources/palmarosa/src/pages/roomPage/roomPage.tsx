import { FaBed, FaTree, FaSwimmer, FaSnowflake, FaTv, FaWifi, FaGlassCheers, FaWind, FaDoorOpen } from "react-icons/fa";
import "./roomPage.scss";
import Gallery from "../../components/gallery/gallery";
import { publicPath } from "../../utils/publicPath";

const images = [
    { src: publicPath("/rooms/1.jpeg"), description: "Double Bed Layout - Pool View" },
    { src: publicPath("/rooms/2.jpeg"), description: "Double Bed Layout - Pool View" },
    { src: publicPath("/rooms/3.jpeg"), description: "Double Bed Layout - Pool View" },
    { src: publicPath("/rooms/4.jpeg"), description: "Pool View" },
    { src: publicPath("/rooms/5.jpeg"), description: "" },
    { src: publicPath("/rooms/6.jpeg"), description: "Single Bed Layout - Garden View" },
    { src: publicPath("/rooms/7.jpeg"), description: "Single Bed Layout - Garden View" },
    { src: publicPath("/rooms/8.jpeg"), description: "Single Bed Layout - Garden View" },
    { src: publicPath("/rooms/9.jpeg"), description: "Single Bed Layout - Garden View" },
    { src: publicPath("/rooms/10.jpeg"), description: "Single Bed Layout - Garden View" },
    { src: publicPath("/rooms/11.jpeg"), description: "Single Bed Layout - Garden View" },
    { src: publicPath("/rooms/12.jpeg"), description: "Single Bed Layout - Garden View" },
    { src: publicPath("/rooms/13.jpeg"), description: "" },
];

const Rooms = () => {
    return (
        <div className="room-section">
            <div className="room-info">
                <h2>Standard Room</h2>
                <p>
                    Our Standard Rooms are cozy and comfortable, available with single or double beds and feature either
                    garden or pool views. Designed to offer a tranquil stay with all the essentials.
                </p>
                <div className="features">
                    <div>
                        <FaBed /> Single / Double Bed
                    </div>
                    <div>
                        <FaTree /> Garden View
                    </div>
                    <div>
                        <FaSwimmer /> Pool View
                    </div>
                    <div>
                        <FaSnowflake /> Air Conditioner
                    </div>
                    <div>
                        <FaTv /> TV
                    </div>
                    <div>
                        <FaWifi /> Free Wi-Fi
                    </div>
                    <div>
                        <FaGlassCheers /> Minibar
                    </div>
                    <div>
                        <FaWind /> Hair Dryer
                    </div>
                    <div>
                        <FaDoorOpen /> Balcony
                    </div>
                </div>
            </div>
            <div className="gallery-wrapper">
                <Gallery
                    images={images}
                    className="hotel-gallery"
                />
            </div>
        </div>
    );
};

export default Rooms;
