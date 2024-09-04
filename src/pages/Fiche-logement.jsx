import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';

import data from '../datas/base.json';

const Fiche = () => {

  const { id } = useParams();
  const [property, setProperties] = useState(null);

  useEffect(() => {
    const foundProperty = data.find(item => item.id === id);
    setProperties(foundProperty);
  }, [id]);

  if (!property) {
    return <p>Chargement...</p>; // Affiche un message de chargement si la propriété n'est pas encore trouvée
}


  return (
    <div>
        <img src={property.cover} alt={property.title} />
        <h2>{property.title}</h2>
        <p>{property.location}</p>

        <div className="tags">
          {property.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <Collapse
          title="Description"
        >
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
  )
}

export default Fiche;