import React from 'react';
import PropTypes from 'prop-types';
import './ListingPage.scss';
import { Item } from '../Item/Item';
import { Error } from '../../Error/Error';

const ListingPage = (props) => {
  const { listingPage } = props;
  const clickBtn = () => props.getProperties(listingPage.placeName, listingPage.page + 1);
  const list = listingPage.list.map((item) => (
    <Item key={item.id} item={item} />
  ));
  return (
    <>
      {listingPage.error ? (
        <Error message={listingPage.error} />
      ) : (
        <div className="wrapper-listing-page">
          <h1 className="listing-page__title" id="title">
            {listingPage.longTitle}
          </h1>
          <div className="listing-page__search">
            Displaying
            <span className="listing-page__search_count" id="visibleCount">
              &nbsp;
              {listingPage.list.length}
              &nbsp;
            </span>
            of
            <span className="listing-page__search_all-count" id="totalCount">
              &nbsp;
              {listingPage.totalResults}
              &nbsp;
            </span>
            items
          </div>
          <ul className="listing-page__list-items">
            {list}
          </ul>
          <button
            onClick={clickBtn}
            type="submit"
            className="listing-page__btn"
            id="loadMore"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
};

ListingPage.propTypes = {
  listingPage: PropTypes.object.isRequired,
  getProperties: PropTypes.func.isRequired,
};

export default ListingPage;
