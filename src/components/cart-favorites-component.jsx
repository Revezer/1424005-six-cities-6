import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeStatus, favoriteLoad} from '../store/api-action';

const CartFavorites = (props) => {
  const {offer, onChangeStatus, onLoadFavorites} = props;
  const favorite = offer.is_favorite ? 0 : 1;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-small-03.jpg" alt="Place image" width={150} height={110} />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button"
            onClick={() => {
              onChangeStatus(offer.id, favorite);
              onLoadFavorites();
            }}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `100%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Nice, cozy, warm big bed apartment</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};

CartFavorites.propTypes = {
  offer: PropTypes.object.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onLoadFavorites: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeStatus(id, status) {
    dispatch(changeStatus(id, status));
  },
  onLoadFavorites: () => dispatch(favoriteLoad()),
});

export {CartFavorites};
export default connect(null, mapDispatchToProps)(CartFavorites);
