import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {ONE_STARS_RATING} from '../const';
import {connect} from 'react-redux';
import {selectedOffer} from '../store/action';
import {changeStatus} from '../store/api-action';

const Cart = (props) => {
  const {offer, selectOffer, onChangeStatus} = props;
  const [hover, setHover] = React.useState(false);
  const rating = offer.rating * ONE_STARS_RATING + `%`;
  const favorite = offer.is_favorite ? 0 : 1;

  const toggleMouse = () => setHover(!hover);
  const classHover = () => hover === true ? `cities__place-card place-card` : `cities__place-card`;

  const mouseEnter = () => {
    toggleMouse();
    selectOffer(offer.id);
  };

  const mouseLeave = () => {
    toggleMouse();
    selectOffer(`falce`);
  };

  const changeStatusFavorite = () => {
    onChangeStatus(offer.id, favorite);
    offer[`is_favorite`] = !offer.is_favorite;
  };

  const activeButton = () => offer.is_favorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;

  return (
    <article className={classHover()} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.preview_image} alt="Place image" width={260} height={200} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={activeButton()} type="button"
            onClick={() => {
              changeStatusFavorite();
            }}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

Cart.propTypes = {
  offer: PropTypes.object.isRequired,
  selectOffer: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  selectOffer(id) {
    dispatch(selectedOffer(id));
  },
  onChangeStatus(id, status) {
    dispatch(changeStatus(id, status));
  },
});

export {Cart};
export default connect(null, mapDispatchToProps)(Cart);
