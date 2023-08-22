// src/components/TrainDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { getTrainById } from '../api';

const TrainDetails = () => {
  const { trainId } = useParams();
  // Use trainId to fetch train details using the API

  return (
    <div>
      {/* Display train details */}
    </div>
  );
};

export default TrainDetails;
