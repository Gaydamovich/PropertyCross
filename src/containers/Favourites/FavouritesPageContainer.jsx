import { connect } from 'react-redux';
import { FavouritesPage } from '../../components/FavouritesPage/FavouritesPage';

const mapStateToProps = (state) => ({
  favouritesPage: state.favouritesPage,
});

export const FavouritesPageContainer = connect(mapStateToProps)(FavouritesPage);
