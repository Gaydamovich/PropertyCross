import { combineReducers } from 'redux';
import searchPage from './reducerSearchPage';
import listingPage from './reducerListingPage';
import { detailsPage } from './reducerDetailsPage';
import { favouritesPage } from './reducerFavouritesPage';

export default combineReducers({
  searchPage,
  listingPage,
  detailsPage,
  favouritesPage,
});
