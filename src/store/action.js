export const ActionType = {
  INCREMENT_CITY: `main/city`,
  INCREMENT_PREFERENCES: `main/preferences`,
};

export const ActionCreator = {
  citySelection: (city) => ({
    type: ActionType.INCREMENT_CITY, payload: city
  })
};
