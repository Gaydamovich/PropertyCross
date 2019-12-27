import '@babel/polyfill';
import { v4 } from 'uuid';
import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE, ASYNC_GET_LOCATIONS,
  CHANGE_FIELD_SEARCH_PAGE,
} from './actionsTypes/actionsTypes';
import { SEARCH } from '../constants/constants';

export const addLocalityToField = (longTitle) => ({
  type: ADD_LOCALITY_TO_FIELD_SEARCH_PAGE,
  longTitle,
});

export const changeField = (value) => ({
  type: CHANGE_FIELD_SEARCH_PAGE,
  payload: value,
});

export const getLocations = (value) => ({
  type: ASYNC_GET_LOCATIONS,
  request: () => fetch(`http://localhost:3000/locations/searchByName?placeName=${value}`),
  onSuccess: (data) => {
    const resultItem = {
      id: v4(),
      value,
      length: data.length,
    };
    const results = JSON.parse(localStorage.getItem(SEARCH)) || [];
    results.push(resultItem);
    if (results.length > 4) results.shift();
    localStorage.setItem(SEARCH, JSON.stringify(results));
  },
});
