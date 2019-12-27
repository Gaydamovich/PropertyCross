import React from 'react';
import PropTypes from 'prop-types';
import { BasicInfo } from './BasicInfo/BasicInfo';
import { AdditionalInfo } from './AdditionalInfo/AdditionalInfo';

const DetailsPage = ({
  detailsPage, favouritesPage, addPropertyToFavourites,
  removePropertyToFavourites,
}) => {
  const { property, location, loading } = detailsPage;
  return (
    <>
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <BasicInfo
              property={property}
              location={location}
              favouritesPage={favouritesPage}
              addPropertyToFavourites={addPropertyToFavourites}
              removePropertyToFavourites={removePropertyToFavourites}
            />
            <AdditionalInfo property={property} />
          </>
        )
      }
    </>
  );
};

DetailsPage.propTypes = {
  detailsPage: PropTypes.object.isRequired,
  favouritesPage: PropTypes.object.isRequired,
  addPropertyToFavourites: PropTypes.func.isRequired,
  removePropertyToFavourites: PropTypes.func.isRequired,
};

export default DetailsPage;
