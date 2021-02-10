import React from 'react';

import '../../../antD/styles/cityCard.css';

import Button from '../../common/Button';

const CityCard = props => {
  console.log(props.saved);
  const deleteFromState = () => {
    //state hooks for saved cities passed as props. They are props.saved and props.setSaved
    const newState = props.saved;
    const index = newState.findIndex(city => city.cityName === props.cityName);
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

  return (
    <div className="city-card">
      <div className="card-header">
        <h3>City: {props.cityName}</h3>
        <Button handleClick={unsave} buttonText="Unsave" />
      </div>
      <div className="card-content">
        <p>Population: {props.population}</p>
        <p>Average Rent: {props.rent}</p>
        <p>Walkability Score: {props.walkScore}</p>
        <p>Livability Score: {props.liveScore}</p>
      </div>
    </div>
  );
};

export default CityCard;
