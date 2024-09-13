import PropTypes from 'prop-types';
import './rating.scss';
import fullStarImg from '../../assets/full-star.png';
import emptyStarImg from '../../assets/empty-star.png';

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) =>
        index < rating ? (
          <img key={index} src={fullStarImg} alt="full star" className="star full-star" />
        ) : (
          <img key={index} src={emptyStarImg} alt="empty star" className="star empty-star" />
        )
      )}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
