import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../Header/Header';
import './App.css';
import SearchPageContainer from '../../containers/Search/SearchPageContainer';
import ListingPageContainer from '../../containers/Listing/ListingPageContainer';
import DetailsPageContainer from '../../containers/Details/DetailsPageContainer';
import { FavouritesPageContainer } from '../../containers/Favourites/FavouritesPageContainer';


export const App = () => (
  <div className="wrapper-app">
    <Header />
    <Switch>
      <Route path="/" exact component={SearchPageContainer} />
      <Route path="/:placeName/listing" exact component={ListingPageContainer} />
      <Route path="/:placeName/details/:id" exact component={DetailsPageContainer} />
      <Route path="/favourites" exact component={FavouritesPageContainer} />
    </Switch>
  </div>
);
