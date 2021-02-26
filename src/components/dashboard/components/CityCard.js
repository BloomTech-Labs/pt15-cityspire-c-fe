import React, { useEffect, useState } from 'react';
import '../../../antD/styles/cityCard.css';

import axios from 'axios';

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
    axios
      .post(
        'http://cityspire00n.eba-diy2emuk.us-east-1.elasticbeanstalk.com/location/data',
        {
          location: `${props.city}, ${props.state}`,
        }
      )
      .then(res => {
        setCityData({
          ...res.data,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="city-card">
      <div className="card-header">
        <h3>City: {props.city}</h3>
        <Button handleClick={unsave} buttonText="Unsave" />
      </div>
      <div className="card-content">
        <p>Population: {cityData.population}</p>
        <p>Average Rent: {cityData.rent_per_month}</p>
        <p>Walkability: {cityData.walk_score}</p>
        <p>Liveability: {cityData.livability_score}</p>
      </div>
    </div>
  );
};

export default CityCard;
