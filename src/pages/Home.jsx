import { useEffect, useState } from 'react';
import Banner from "../components/Banner";
import PropertyCard from "../components/PropertyCard";
import data from '../datas/base.json';

const Home = () => {

  const [properties, setProperties] = useState([]);

  useEffect (() => {
    setProperties(data);
  }, []);

  return (
    <div>
      <Banner />
      {properties.map(property => (
        <PropertyCard
          key={property.id}
          id={property.id}
          title={property.title}
          cover={property.cover}
        />
      ))}

    </div>
  );
}

export default Home;
