import React from 'react';
import { Link } from 'react-router-dom';
import city1 from '../../assets/img/pexels-aleksejs-bergmanis-681335.jpg';
import city2 from '../../assets/img/pexels-kehn-hermano-3849167.jpg';

function RenderLandingPage(props) {
  return (
    <div className="content">
      <div className="landing-grid">
        <p>
          Looking for a fresh start for your family? Unsure where to go? Let
          Cityspire help you find and manage all the data you need to decide.
        </p>
        <img src={city1}></img>
        <img src={city2}></img>
        <p>
          Cityspire is an app that analyzes data from cities such as
          populations, cost of living, rental rates, crime rates, and many other
          social and economic factors that are important in deciding where
          someone would like to live.
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
