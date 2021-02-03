import React from 'react';
import { Avatar, Button, Input } from 'antd';
import '../../../antD/styles/mapHeader.css';
import AlgoliaPlaces from 'algolia-places-react';

const MapHeader = () => {
  const { Search } = Input;

  const onSearch = () => {
    // This is our search for finding the city they entered
  };
  return (
    <div className="map-header">
      <div className="left-header-section">
        <AlgoliaPlaces
          placeholder="Search for a city"
          options={{
            appId: process.env.REACT_APP_ALGOLIA_PLACES_APP_ID, //`${process.env.REACT_APP_ALGOLIA_PLACES_APP_ID}`,
            apiKey: process.env.REACT_APP_ALGOLIA_PLACES_API_KEY, //`${process.env.REACT_APP_ALGOLIA_PLACES_API_KEY}`,
            language: process.env.REACT_APP_ALGOLIA_PLACES_LANGUAGE, //`${process.env.REACT_APP_ALGOLIA_PLACES_LANGUAGE}`,
            countries: [process.env.REACT_APP_ALGOLIA_PLACES_COUNTRIES], //[`${process.env.REACT_APP_ALGOLIA_PLACES_COUNTRIES}`],
            type: process.env.REACT_APP_ALGOLIA_PLACES_TYPE, //`${process.env.REACT_APP_ALGOLIA_PLACES_TYPE}`,
          }}
          onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
            console.log(
              'Fired when suggestion selected in the dropdown or hint was validated.'
            )
          }
          onSuggestions={({ rawAnswer, query, suggestions }) =>
            console.log(
              'Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.'
            )
          }
          onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
            console.log(
              'Fired when arrows keys are used to navigate suggestions.'
            )
          }
          onClear={() => console.log('Fired when the input is cleared.')}
          onLimit={({ message }) =>
            console.log('Fired when you reached your current rate limit.')
          }
          onError={({ message }) =>
            console.log(
              'Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.'
            )
          }
        />
      </div>
      <div className="right-header-section">
        <Button type="text" className="dashboard-button" ghost>
          Dashboard
        </Button>
        <Avatar shape="square" size={56} />
      </div>
    </div>
  );
};

export default MapHeader;
{
  /* <Search
placeholder="enter city,state"
onSearch={onSearch}
style={{ width: 300 }}
enterButton
/> */
}
