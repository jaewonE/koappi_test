import React from 'react';
import logo from 'images/landing/logo.png';

const LandingSuccess = () => {
  return (
    <div className="landingSuccess-container">
      <div className="landingSuccess-wrapper">
        <img alt="logo" src={logo} />
        <h3>Thank you for your interest !</h3>
        <p>
          We will contact you as soon as possible! Hope to see you in Korea with
          your own happiness we’ll make !
        </p>
      </div>
    </div>
  );
};

export default LandingSuccess;
