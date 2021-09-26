import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import logo from 'images/landing/logo.png';

const LandingSuccess = ({ language }) => {
  const { t, i18n } = useTranslation();
  switch (language) {
    case 'english':
      i18n.changeLanguage('en');
      break;
    case 'chinese':
      i18n.changeLanguage('cn');
      break;
    default:
  }

  return (
    <div className="landingSuccess-container">
      <div
        className="landingSuccess-wrapper"
        data-aos="fade"
        data-aos-offset="0"
        data-aos-duration="600"
        data-aos-easing="ease-in-out-quad"
      >
        <img alt="logo" src={logo} />
        <h3> {t('landingSuccess1')} </h3>
        <p> {t('landingSuccess2')} </p>
        <Link to="/" className="goback-btn">
          <span> {t('landingSuccessBack')} </span>
        </Link>
      </div>
    </div>
  );
};

export default LandingSuccess;
