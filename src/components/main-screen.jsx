import React, {useEffect} from 'react';
import ListOffersComponent from './list-of-offers-component';
import CityComponents from './city-component';
import LoadingScreen from './loading-screen/loadging-screen';
import {connect} from 'react-redux';
import {fetchOffers} from '../store/api-action';
import PropTypes from 'prop-types';
import {getDataLoaded, getUserInfo} from '../store/data/selectors';
import {Link} from 'react-router-dom';
import {getAuthorization} from '../store/user/selectors';
import {AuthorizationStatus} from '../const';

const Main = (props) => {
  const {isDataLoaded, onLoadData, authorization, userInfo} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const userVerification = () => {
    if (authorization === AuthorizationStatus.AUTH) {
      return <span className="header__user-name user__name">{userInfo.email}</span>;
    } else {
      return <span className="header__user-name user__name">Sign In</span>;
    }
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {
                      userVerification()
                    }
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityComponents />
        </div>
        <ListOffersComponent />
      </main>
    </div>
  );
};

Main.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  authorization: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: getDataLoaded(state),
  userInfo: getUserInfo(state),
  authorization: getAuthorization(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
