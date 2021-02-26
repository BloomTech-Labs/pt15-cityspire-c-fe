import React, { useState, useEffect, useContext } from 'react';

import '../../../antD/styles/detailsPane.css';
import Button from '../../common/Button';

import axios from 'axios';
import { Context } from '../../../state/contexts';

import { axiosCodes, axiosAPICall } from '../../../utils/axiosEndpoints';

const DetailsPane = ({ currentPlaceSelection }) => {
  const { userInfo, savedCities } = useContext(Context);
  const [userData, setUserData] = userInfo;
  const [saved, setSaved] = savedCities;

  const [cityData, setCityData] = useState({});

  const saveToState = () => {
    setSaved([...saved, currentPlaceSelection]);
  };

  const saveToDb = () => {
    axiosAPICall(
      `/favorites/favoritesRouter/`,
      axiosCodes.POST,
      { ...userData.id, ...cityData },
      res => {
        console.log(res);
      },
      err => {
        console.log('error: ', err);
      }
    );
  };

  const save = () => {
    saveToState();
    saveToDb();
  };

  useEffect(() => {
    axios
      .post(
        'http://cityspire00n.eba-diy2emuk.us-east-1.elasticbeanstalk.com/location/data',
        {
          location: `${currentPlaceSelection.city}, ${currentPlaceSelection.state}`,
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
    <div className="details-pane">
      <Button handleClick={save} buttonText="Save" />
      <p>Name: {cityData.city_name}</p>
      <p>Population: {cityData.population}</p>
      <p>Average Rent: {cityData.rent_per_month}</p>
      <p>Walkability: {cityData.walk_score}</p>
      <p>Liveability: {cityData.livability_score}</p>
    </div>
  );
};

export default DetailsPane;
