import React, { useContext } from 'react';

import { Context } from '../../../state/contexts';
import '../../../antD/styles/dashboard.css';

import CityCard from './CityCard';

const ContentContainer = () => {
  const { savedCities } = useContext(Context);
  const [saved, setSaved] = savedCities;

  return (
    <div className="dashboard">
      {saved.map(cityObject => {
        return (
          <CityCard
            key={cityObject.city_id}
            cityName={cityObject.city}
            saved={saved}
            setSaved={setSaved}
          />
        );
      })}
    </div>
  );
};

export default ContentContainer;
