import PropTypes from 'prop-types';
import { useState } from 'react';

const Carousel = ({ pictures, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button onClick={prevImage}>←</button>
          <button onClick={nextImage}>→</button>
          <div className="compteur-images">
            {currentImageIndex + 1}/{pictures.length}
          </div>
        </>
      )}
      <img src={pictures[currentImageIndex]} alt={title} />
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Carousel;
