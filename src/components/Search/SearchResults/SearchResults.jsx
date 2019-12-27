import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.scss';
import ResultsItem from './ResultsItem/ResultsItem';
import { Error } from '../../Error/Error';


const SearchResults = (props) => {
  const {
    recentSearches, searchStatus,
    onClickItem, currentSearch, error,
  } = props;
  const history = recentSearches
    .map((item) => <ResultsItem key={item.id} onClickItem={onClickItem} item={item} />);
  const currentLocations = currentSearch
    .map((item) => <ResultsItem key={item.id} item={item} to="/listing" />);
  const results = history.length ? history : <div>Not Found</div>;
  return (
    <>
      {error ? (
        <Error message={error} />
      ) : (
        <div className="search-results">
          <h2 className="search-results__title">
            {searchStatus ? 'Available locations' : 'Recent searches'}
          </h2>
          <ul className="search-results__items" id={searchStatus ? 'locations' : 'recentSearches'}>
            {currentSearch.length ? currentLocations : results}
          </ul>
        </div>
      )}
    </>
  );
};

SearchResults.propTypes = {
  recentSearches: PropTypes.array.isRequired,
  currentSearch: PropTypes.array.isRequired,
  searchStatus: PropTypes.bool.isRequired,
  onClickItem: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default SearchResults;
