import {ActionType} from './action';
import {getOffers} from '../mocks/offers';

const initialState = {
  city: `Paris`,
  offers: getOffers(`Paris`)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_CITY:
      return {
        city: action.payload,
        offers: getOffers(action.payload)
      };
  }
  return state;
};

export {reducer};
