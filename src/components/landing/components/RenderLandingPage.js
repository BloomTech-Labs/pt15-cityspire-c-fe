import React from 'react';
import { Link } from 'react-router-dom';
import city1 from '../../assets/img/pexels-aleksejs-bergmanis-681335.jpg';
import city2 from '../../assets/img/pexels-kehn-hermano-3849167.jpg';
import city3 from '../../assets/img/pexels-tatiana-fet-1105766.jpg';

function RenderLandingPage(props) {
  return (
    <div>
      <h2>Use data to find a place right for you to live.</h2>
      <div>
        <p>
          Looking for a fresh start for your family? Unsure where to go? Let
          Cityspire help you find and manage all the data you need to decide.
        </p>
        <img src={city3}></img>
        <p>
          Cityspire is an app that analyzes data from cities such as
          populations, cost of living, rental rates, crime rates, and many other
          social and economic factors that are important in deciding where
          someone would like to live.
        </p>
        <p>
          <Link to="/home">Home</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
