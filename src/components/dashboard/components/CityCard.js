import React, { useEffect, useState } from 'react';
import '../../../antD/styles/cityCard.css';

import Button from '../../common/Button';

const CityCard = props => {
  const deleteFromState = () => {
    //state hooks for saved cities passed as props. They are props.saved and props.setSaved
    const newState = props.saved;
    const index = newState.findIndex(
      cityObject => cityObject.city === props.city
    );
    newState.splice(index, 1);
    props.setSaved([...newState]);
  };

  const deleteFromDB = () => {
    //api delete request here, either imported from another file or just written here
  };

  const unsave = () => {
    deleteFromState();
    deleteFromDB();
  };

  const [cityData, setCityData] = useState({});

  useEffect(() => {
    //api get city specific data. will require location: "city_name, state_name" and return object of data
  }, []);

  return (
    <div className="city-card">
      <div className="card-header">
        <h3>City: {props.city}</h3>
        <Button handleClick={unsave} buttonText="Unsave" />
      </div>
      <div className="card-content">
        <p>Population: {cityData.population}</p>
        <p>Average Rent: {cityData.rent}</p>
        <p>Walkability Score: {cityData.walkScore}</p>
        <p>Livability Score: {cityData.liveScore}</p>
      </div>
    </div>
  );
};

export default CityCard;
