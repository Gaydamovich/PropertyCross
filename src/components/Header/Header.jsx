import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1 className="header__title" id="title">Property Cross React</h1>
    <Link to="/favourites">
      <button
        type="submit"
        className="header__btn"
        id="favourites"
      >
        Faves
      </button>
    </Link>
  </div>
);

export default Header;
