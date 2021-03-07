import React from 'react';
import PropTypes from 'prop-types';
import {ONE_STARS_RATING} from '../const';

const Comments = (props) => {
  const {review} = props;
  const rating = review.rating * ONE_STARS_RATING + `%`;

  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.user.avatar_url} alt="Reviews avatar" width={54} height={54} />
          </div>
          <span className="reviews__user-name">
            {review.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: rating}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.comment}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
        </div>
      </li>
    </ul>
  );
};

Comments.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Comments;
