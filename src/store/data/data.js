import {ActionType} from '../action';
import reviews from '../../mocks/reviews';

const initialState = {
  offers: [],
  isDataLoaded: false,
  review: reviews,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
  }
  return state;
};

export {data};
