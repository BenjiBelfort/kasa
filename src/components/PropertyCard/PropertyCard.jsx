import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './propertycard.scss'

const PropertyCard = ({ id, title, cover }) => {
    return (
        <Link to={`/fiche-immobiliere/${id}`}>
            <div className="property-card">
                <img src={cover} alt={title} />
                <h2>{title}</h2>
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