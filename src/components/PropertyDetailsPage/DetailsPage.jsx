import React from 'react';
import PropTypes from 'prop-types';
import { BasicInfo } from './BasicInfo/BasicInfo';
import { AdditionalInfo } from './AdditionalInfo/AdditionalInfo';

const DetailsPage = ({ detailsPage }) => {
  const { property, location } = detailsPage;
  return (
    <>
      <BasicInfo property={property} location={location} />
      <AdditionalInfo property={property} />
    </>
  );
};

DetailsPage.propTypes = {
  detailsPage: PropTypes.object.isRequired,
};

export default DetailsPage;
