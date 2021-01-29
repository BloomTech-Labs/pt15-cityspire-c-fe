import React from 'react';
import { Avatar, Button, Input } from 'antd';
import '../../../antD/styles/mapHeader.css';

const MapHeader = () => {
  const { Search } = Input;

  const onSearch = () => {
    // This is our search for finding the city they entered
  };
  return (
    <div className="map-header">
      <div className="left-header-section">
        <Search
          placeholder="enter city,state"
          onSearch={onSearch}
          style={{ width: 300 }}
          enterButton
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
