import React from 'react';
import { Avatar, Button } from 'antd';
import '../../../antD/styles/mapHeader.css';
import AlgoliaPlaces from 'algolia-places-react';

const MapHeader = () => {
  const onAlgoliaChange = ({
    query,
    rawAnswer,
    suggestion,
    suggestionIndex,
  }) => {
    // Mouse Over and keyboard onChange event
    console.log('onChange');
  };

  const onAlgoliaSuggestions = ({ rawAnswer, query, suggestions }) => {
    // Validation event when something has been selected.
  };

  const onAlgoliaCursorChanged = ({
    query,
    rawAnswer,
    suggestion,
    suggestionIndex,
  }) => {
    // When keyboard arrows or mouse are used to go through suggestions
  };

  const onAlgoliaClear = () => {
    // Input clear (the X button)
  };

  const onAlgoliaLimit = ({ message }) => {
    // Current rate limit exceeded
  };
  const onAlgoliaError = ({ message }) => {
    // Some type of server error such as could not reach the server
  };

  return (
    <div className="map-header">
      <div className="left-header-section">
        <AlgoliaPlaces
          placeholder="Search for a city"
          options={{
            appId: process.env.REACT_APP_ALGOLIA_PLACES_APP_ID,
            apiKey: process.env.REACT_APP_ALGOLIA_PLACES_API_KEY,
            language: process.env.REACT_APP_ALGOLIA_PLACES_LANGUAGE,
            countries: [process.env.REACT_APP_ALGOLIA_PLACES_COUNTRIES],
            type: process.env.REACT_APP_ALGOLIA_PLACES_TYPE,
          }}
          onChange={onAlgoliaChange}
          onSuggestions={onAlgoliaSuggestions}
          onCursorChanged={onAlgoliaCursorChanged}
          onClear={onAlgoliaClear}
          onLimit={onAlgoliaLimit}
          onError={onAlgoliaError}
        />
      </div>
      <div className="right-header-section">
        <Button type="text" className="dashboard-button">
          Dashboard
        </Button>
        <Avatar shape="square" size={56} />
      </div>
    </div>
  );
};

export default MapHeader;
