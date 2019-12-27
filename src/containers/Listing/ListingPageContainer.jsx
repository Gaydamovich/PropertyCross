import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListingPage from '../../components/PropertyListingPage/ListingPage/ListingPage';
import { getProperties, resetProperties } from '../../actions/lisingPageActions';

const ListingPageContainer = (props) => {
  const { listingPage } = props;

  useEffect(() => {
    const { match } = props;
    props.getProperties(match.params.placeName, 1);
    return () => props.resetProperties();
  }, []);

  return <ListingPage listingPage={listingPage} getProperties={getProperties} />;
};

const mapStateToProps = (state) => ({
  listingPage: state.listingPage,
});

const mapDispatchToProps = {
  getProperties,
  resetProperties,
};

ListingPageContainer.propTypes = {
  listingPage: PropTypes.object.isRequired,
  getProperties: PropTypes.func.isRequired,
  resetProperties: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const router = withRouter(ListingPageContainer);
export default connect(mapStateToProps, mapDispatchToProps)(router);
