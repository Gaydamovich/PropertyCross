import React from 'react';
import PropTypes from 'prop-types';
import './ResultsItem.scss';
import { Link } from 'react-router-dom';


const ResultsItem = (props) => {
  const {
    item, onClickItem, to,
  } = props;
  const clickItem = () => onClickItem(item.value);
  return (
    <>
      {to
        ? (
          <li className="search-results__items_item" aria-hidden>
            <Link
              to={`/${item.placeName}/listing`}
            >
              {item.longTitle}
            </Link>
          </li>
        ) : (
          <li className="search-results__items_item" onClick={clickItem} aria-hidden>
            Search
            &nbsp;
            {item.value}
            : (
            {item.length}
            )
          </li>
        )}
    </>
  );
};

ResultsItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClickItem: PropTypes.func,
  to: PropTypes.string,
};

export default ResultsItem;
