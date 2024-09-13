import PropTypes from 'prop-types';
import { useState } from 'react';
import './carrousel.scss'

const Carrousel = ({ pictures, title }) => {
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
    <div className="carrousel">
      {pictures.length > 1 && (
        <>
          <div className="chevron-button chevron-left" onClick={prevImage} />
          <div className="chevron-button chevron-right" onClick={nextImage} />
          <div className="compteur-images">
            {currentImageIndex + 1}/{pictures.length}
          </div>
        </>
      )}
      <img src={pictures[currentImageIndex]} alt={title} />
    </div>
  );
};

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Carrousel;
