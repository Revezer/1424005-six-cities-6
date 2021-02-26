import {ActionType} from './action';
import offer from '../mocks/offers';
import reviews from '../mocks/reviews';

const initialState = {
  city: `Paris`,
  offers: offer,
  cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  review: reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_CITY:
      return {
        ...state,
        city: action.payload,
      };
  }
  return state;
};

export {reducer};
