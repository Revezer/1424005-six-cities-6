export const ActionType = {
  INCREMENT_CITY: `main/city`,
  INCREMENT_PREFERENCES: `main/preferences`,
  LOAD_OFFERS: `main/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const ActionCreator = {
  citySelection: (city) => ({
    type: ActionType.INCREMENT_CITY, payload: city
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  })
};
