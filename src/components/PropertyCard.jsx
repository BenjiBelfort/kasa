import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PropertyCard = ({ id, title, cover }) => {
    return (
        <Link to={`/fiche-immobiliere/${id}`}>
            <div className="property-card">
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </div>
        </Link>
    );
};

PropertyCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default PropertyCard;