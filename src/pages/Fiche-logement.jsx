import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse/Collapse';
import Carrousel from '../components/Carrousel/Carrousel';
import Tags from '../components/Tags/Tags';
import Host from '../components/Host/Host';
import Rating from '../components/Rating/Rating';
import data from '../datas/base.json';
import '../styles/fichelogement.scss';
import Erreur from './Erreur';

const Fiche = () => {
  const { id } = useParams();
  const [property, setProperties] = useState(null);

  useEffect(() => {
    const foundProperty = data.find(item => item.id === id);
    setProperties(foundProperty);
  }, [id]);

  if (!property) {
    return <Erreur />;
  }

  const ratingNumber = parseInt(property.rating, 10);

  return (
    <div>
      <Carrousel pictures={property.pictures} title={property.title} />
        <div className="fiche-info-container">
          <div className="fiche-left">
            <h2 className='property-title'>{property.title}</h2>
            <p className='property-location'>{property.location}</p>

            <Tags tags={property.tags} />
          </div>
          <div className="rating-host-wrapper">
            <Rating rating={ratingNumber} /> 
            <Host host={property.host} />
          </div>
        </div>
      <div className="fiche-collapse-container">
        <Collapse title="Description">
          <p>{property.description}</p>
        </Collapse>
        
        <Collapse title="Équipements">
          <ul>
            {property.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Fiche;
