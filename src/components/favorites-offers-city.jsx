import React from 'react';
import PropTypes from 'prop-types';
import CartFavoritesComponent from './cart-favorites-component';

const FavoritesOffersCity = (props) => {
  const {offersCity, nameCity} = props;

  return (
    offersCity.length > 0 ?
      <li key={nameCity} className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{nameCity}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {
            offersCity.map((offer, index) => <CartFavoritesComponent key={offer.id + index} offer={offersCity[index]} />)
          }
        </div>
      </li> : <div key={nameCity}></div>
  );
};

FavoritesOffersCity.propTypes = {
  offersCity: PropTypes.array,
  nameCity: PropTypes.string.isRequired,
};

export default FavoritesOffersCity;
