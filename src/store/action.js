export const ActionType = {
  INCREMENT_CITY: `main/city`,
  // INCREMENT_PREFERENCES: `main/preferences`,
  LOAD_OFFERS: `main/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const citySelection = (city) => ({
  type: ActionType.INCREMENT_CITY,
  payload: city
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
