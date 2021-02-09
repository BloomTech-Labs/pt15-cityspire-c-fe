import React, { useState } from 'react';

const dummyCities = [
  {
    cityName: 'New York',
    population: 8000000,
    rent: 3000,
    walkScore: 5,
    liveScore: 5,
  },
  {
    cityName: 'Los Angeles',
    population: 8000000,
    rent: 3000,
    walkScore: 5,
    liveScore: 5,
  },
  {
    cityName: 'Seattle',
    population: 8000000,
    rent: 3000,
    walkScore: 5,
    liveScore: 5,
  },
  {
    cityName: 'Denver',
    population: 8000000,
    rent: 3000,
    walkScore: 5,
    liveScore: 5,
  },
];

export const Context = React.createContext();

export const ContextProvider = props => {
  //Any global state variables should be declared with useState here and added as a property to the state object, to then be passed in the value prop of the provider
  const [userInfo, setUserInfo] = useState([]);
  const [savedCities, setSavedCities] = useState(dummyCities);

  //savedCities should be an array of city objects like so:
  // [{cityName: (str), population: (int), rent: (int), walkScore: (int), liveScore: (int)}]

  let state = {
    userInfo: [userInfo, setUserInfo],
    savedCities: [savedCities, setSavedCities],
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
