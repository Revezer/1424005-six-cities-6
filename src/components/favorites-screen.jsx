import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CartFavoritesComponent from './cart-favorites-component';
import {connect} from 'react-redux';
import {getFavoritesLoaded, getFavorites} from '../store/data/selectors';
import {favoriteLoad} from '../store/api-action';
import LoadingScreen from './loading-screen/loadging-screen';

const Favorites = (props) => {
  const {offers, isFavoritesLoaded, onLoadFavorites, offersParis, offersCologne, offersBrussels, offersAmsterdam, offersHamburg, offersDusseldorf} = props;

  useEffect(() => {
    if (!isFavoritesLoaded) {
      onLoadFavorites();
    }
  }, [isFavoritesLoaded]);

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const favoriteOffersCity = (offersCity, nameCity) => {
    return (
      offersCity.length > 0 ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{nameCity}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {
              offersCity.map((name, index) => <CartFavoritesComponent key={name + index} offer={offersCity[index]} />)
            }
          </div>
        </li> : <div></div>
    );
  };

  if (offers.length === 0) {
    return (
      <div className="page page--favorites-empty">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </a>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteOffersCity(offersParis, `Paris`)}
                {favoriteOffersCity(offersCologne, `Cologne`)}
                {favoriteOffersCity(offersBrussels, `Brussels`)}
                {favoriteOffersCity(offersAmsterdam, `Amsterdam`)}
                {favoriteOffersCity(offersHamburg, `Hamburg`)}
                {favoriteOffersCity(offersDusseldorf, `Dusseldorf`)}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </a>
        </footer>
      </div>
    );
  }
};

Favorites.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  isFavoritesLoaded: getFavoritesLoaded(state),
  offers: getFavorites(state),
  offersParis: getFavorites(state).filter((offer) => (offer.city.name === `Paris`)),
  offersCologne: getFavorites(state).filter((offer) => (offer.city.name === `Cologne`)),
  offersBrussels: getFavorites(state).filter((offer) => (offer.city.name === `Brussels`)),
  offersAmsterdam: getFavorites(state).filter((offer) => (offer.city.name === `Amsterdam`)),
  offersHamburg: getFavorites(state).filter((offer) => (offer.city.name === `Hamburg`)),
  offersDusseldorf: getFavorites(state).filter((offer) => (offer.city.name === `Dusseldorf`)),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites: () => dispatch(favoriteLoad()),
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
