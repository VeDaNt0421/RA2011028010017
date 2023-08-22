// src/components/TrainList.js
import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../api';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const allTrains = await getAllTrains();
      setTrains(allTrains);
    };
    fetchTrains();
  }, []);

  return (
    <div>
      {/* Display the list of trains */}
    </div>
  );
};

export default TrainList;
