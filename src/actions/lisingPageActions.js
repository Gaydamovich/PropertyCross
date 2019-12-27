import {
  GET_PROPERTIES,
  RESET_PROPERTIES,
} from './actionsTypes/actionsTypes';

export const getProperties = (placeName, page) => ({
  type: GET_PROPERTIES,
  placeName,
  page,
  request: () => fetch(`http://localhost:3000/locations/${placeName}/properties?page=${page}`),
});

export const resetProperties = () => ({
  type: RESET_PROPERTIES,
});
