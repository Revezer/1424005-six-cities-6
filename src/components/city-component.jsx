import React from 'react';
import CityButton from './city-button-component';

const CITY_NAME = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const City = () => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITY_NAME.map((city, index) => <CityButton key={city + index} nameCity={city} />)
        }
      </ul>
    </section>
  );
};

export default City;
