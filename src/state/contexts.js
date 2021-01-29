import React, { useState } from 'react';

export const Context = React.createContext();

export const ContextProvider = props => {
  //Any global state variables should be declared with useState here and added as a property to the state object, to then be passed in the value prop of the provider
  const [userInfo, setUserInfo] = useState([]);
  const [savedCities, setSavedCities] = useState([]);

  let state = {
    userInfo: [userInfo, setUserInfo],
    savedCities: [savedCities, setSavedCities],
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
