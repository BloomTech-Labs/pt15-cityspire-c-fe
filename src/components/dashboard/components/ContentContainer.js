import React, { useContext } from 'react';

import { Context } from '../../../state/contexts';

import CityCard from './CityCard';

const ContentContainer = () => {
  const { savedCities } = useContext(Context);
  const [saved, setSaved] = savedCities;

  return (
    <div className="city-cards-container">
      {saved.map(city => {
        return (
          <CityCard
            key={city.cityName}
            cityName={city.cityName}
            population={city.population}
            rent={city.rent}
            walkScore={city.walkScore}
            liveScore={city.liveScore}
            saved={saved}
            setSaved={setSaved}
          />
        );
      })}
    </div>
  );
};

export default ContentContainer;
