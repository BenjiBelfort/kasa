import { useEffect, useState } from 'react';
import Banner from "../components/Banner/Banner";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import data from '../datas/base.json';
import '../styles/home.scss';

const Home = () => {

  const [properties, setProperties] = useState([]);

  useEffect (() => {
    setProperties(data);
  }, []);

  return (
    <section>
      <Banner />
      <div className="home-container">
        <div className="home-grid">
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              cover={property.cover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
