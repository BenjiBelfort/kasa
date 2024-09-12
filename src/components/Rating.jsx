import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  const totalStars = 5;
  const fullStar = '★';
  const emptyStar = '☆';

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) =>
        index < rating ? fullStar : emptyStar
      )}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
