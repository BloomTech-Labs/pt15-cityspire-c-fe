import React from 'react';

import Button from '../../common/Button';

const CityCard = props => {
  //findSavedCity simply searches an array for the city object with the same city name of the current card
  const findSavedCity = city => city.name === props.cityName;

  const deleteFromState = () => {
    //state hooks for saved cities passed as props. They are props.saved and props.setSaved
    const newState = props.saved;
    const unsaving = newState.find(findSavedCity(props.cityName));
    const index = newState.indexOf(unsaving);
    newState.splice(index, 1);
    props.setSaved(newState);
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
      <div>
        <h3>City: {props.cityName}</h3>
        <Button handleClick={unsave}>Unsave</Button>
      </div>

      <p>Population: {props.population}</p>
      <p>Average Rent: {props.rent}</p>
      <p>Walkability Score: {props.walkScore}</p>
      <p>Livability Score: {props.liveScore}</p>
    </div>
  );
};

export default CityCard;
