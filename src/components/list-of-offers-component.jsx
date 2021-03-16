import React from 'react';
import PropTypes from 'prop-types';
import CartComponent from './cart-component';
import Map from './map/map';
import {connect} from 'react-redux';
import {getOffersSort, getOffers} from '../store/data/selectors';
import {getCity} from '../store/increment-city/selectors';
import SortOffersComponent from './sort-offers-component';
import MainEmptyComponent from './main-empty';

const ListOffers = (props) => {
  const {offers, points, city} = props;

  if (offers.length === 0) {
    return (
      <MainEmptyComponent />
    );
  }


  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                  Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <SortOffersComponent />
          </form>
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((offer, index) => <CartComponent key={offer + index} offer={offers[index]} />)
            }
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map points={points}/>
          </section>
        </div>
      </div>
    </div>
  );
};

ListOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  points: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffersSort(state),
  points: getOffers(state).filter((offer) => (
    offer.city.name === getCity(state)
  )).map((offer) => offer),
  city: getCity(state),
});

export {ListOffers};
export default connect(mapStateToProps, null)(ListOffers);
