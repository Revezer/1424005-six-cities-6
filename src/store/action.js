export const ActionType = {
  INCREMENT_CITY: `main/city`,
  LOAD_OFFERS: `main/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_COMMENTS: `property-screen/loadComments`,
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

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});
