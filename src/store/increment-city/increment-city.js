import {ActionType} from '../action';

const initialState = {
  city: `Paris`,
  cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
};

const city = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_CITY:
      return {
        ...state,
        city: action.payload,
      };
  }
  return state;
};

export {city};
