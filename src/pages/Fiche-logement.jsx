import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import data from '../datas/base.json';

const Fiche = () => {
  const { id } = useParams();
  const [property, setProperties] = useState(null);

  useEffect(() => {
    const foundProperty = data.find(item => item.id === id);
    setProperties(foundProperty);
  }, [id]);

  if (!property) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      {/* Carrousel d'images */}
      <Carousel pictures={property.pictures} title={property.title} />

      <h2>{property.title}</h2>
      <p>{property.location}</p>

      {/* Tags */}
      <Tags tags={property.tags} />

      {/* Host */}
      <Host host={property.host} />

      {/* Rating */}
      <Rating rating={property.rating} />

      {/* Collapse pour la description et les équipements */}
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
  );
};

export default Fiche;
