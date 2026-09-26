import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "./gallery.scss";

interface GalleryImage {
  src: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="room-gallery">
      <div className="thumbnail-grid">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.description}
            className="thumbnail"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[Thumbnails, Captions]}
      />
    </div>
  );
};

export default Gallery;
