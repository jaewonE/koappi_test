import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/landing/logo.png';

const pageNotFound = () => {
  const goHome = () => {
    console.log('go to homePage');
  };
  return (
    <div className="noPage-container">
      <div className="noPage-wrapper">
        <div className="logo-box">
          <div className="img-box">
            <img alt="logo" src={logo} />
          </div>
          <div className="text-box">
            <div className="errorCode-box">
              <span>404</span>
            </div>
            <div className="logoText-box">
              <span>U're Gonna just Enjoy ! </span>
            </div>
          </div>
        </div>
        <h1 className="warning-message">OOPS! PAGE NOT FOUND</h1>
        <div className="goback-wrapper">
          <Link to="/" className="goback-btn" onclick={goHome}>
            <span>GO TO HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default pageNotFound;
