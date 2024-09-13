import PropTypes from 'prop-types';
import './rating.scss';

const Rating = ({ rating }) => {
  const totalStars = 5;
  const fullStar = '★';
  const emptyStar = '★';

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) =>
        index < rating ? (
          <span key={index} className="star full-star">{fullStar}</span>
        ) : (
          <span key={index} className="star empty-star">{emptyStar}</span>
        )
      )}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
