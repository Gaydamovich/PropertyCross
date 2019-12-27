import React from 'react';
import './FavouriteItem.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const FavouriteItem = ({ item }) => (
  <li className="wrapper-favourites-item">
    <Link to={`/${item.location.placeName}/details/${item.id}`}>
      <div className="wrapper-img">
        <img src={item.imgUrl} alt="property" className="wrapper-img__img-house" />
      </div>
      <div className="favourites-item__title">
        <p>{item.title}</p>
      </div>
      <div className="favourites-item__price">
        {item.priceFormatted}
      </div>
      <div className="favourites-item__updating">
        Update:
        &nbsp;
        {item.updatedInDaysFormatted}
      </div>
    </Link>
  </li>
);

FavouriteItem.propTypes = {
  item: PropTypes.object.isRequired,
};
