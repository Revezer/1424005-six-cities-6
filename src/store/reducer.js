import {ActionType} from './action';

const initialState = {
  city: `Paris`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_CITY:
      return {
        city: action.payload
      };
  }
  return state;
};

export {reducer};
