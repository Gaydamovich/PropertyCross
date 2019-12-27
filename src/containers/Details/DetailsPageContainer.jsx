import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DetailsPage from '../../components/PropertyDetailsPage/DetailsPage';
import { addPropertyToFavourites, removePropertyToFavourites } from '../../actions/favouritesPageActions';
import { getPropertyById } from '../../actions/detailsPageActions';

const DetailsPageContainer = (props) => {
  const {
    detailsPage, favouritesPage,
    addPropertyToFavourites, removePropertyToFavourites,
  } = props;

  useEffect(() => {
    const { match } = props;
    props.getPropertyById(match.params.placeName, match.params.id);
  }, []);

  return (
    <DetailsPage
      detailsPage={detailsPage}
      favouritesPage={favouritesPage}
      addPropertyToFavourites={addPropertyToFavourites}
      removePropertyToFavourites={removePropertyToFavourites}
    />
  );
};

const mapStateToProps = (state) => ({
  detailsPage: state.detailsPage,
  favouritesPage: state.favouritesPage,
});

const mapDispatchToProps = {
  getPropertyById,
  addPropertyToFavourites,
  removePropertyToFavourites,
};

DetailsPageContainer.propTypes = {
  detailsPage: PropTypes.object.isRequired,
  favouritesPage: PropTypes.object.isRequired,
  getPropertyById: PropTypes.func.isRequired,
  addPropertyToFavourites: PropTypes.func.isRequired,
  removePropertyToFavourites: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const router = withRouter(DetailsPageContainer);
export default connect(mapStateToProps, mapDispatchToProps)(router);
