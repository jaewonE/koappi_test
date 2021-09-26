import React from 'react';

import logo from 'images/landing/logo.png';
import foreigner from 'images/landing/foreigner.png';
import mockUp1 from 'images/landing/mock-up-1.png';
import mockUp2 from 'images/landing/mock-up-2-full.png';
import korea from 'images/landing/korea.png';
import pin from 'images/landing/pin_b.png';
import airplane from 'images/landing/airplane.png';
import { useTranslation } from 'react-i18next';

const LandingInfo = ({ language }) => {
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
    <React.Fragment>
      <div className="landing_question-container">
        <div className="landing_question-wrapper q1 landing-fullsize">
          <h1
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="400"
            data-aos-easing="ease-in-out-quad"
          >
            {t('welcome')}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-quad"
            data-aos-delay="400"
          >
            {t('intro1')}
          </p>
        </div>
        <div className="landing_question-wrapper q2 landing-fullsize">
          <h1
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="400"
            data-aos-easing="ease-in-out-quad"
          >
            {t('intro2')}
          </h1>
          <p
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-quad"
          >
            {t('intro3')}
          </p>
        </div>
      </div>
      <div className="landing_introduce-container">
        <div className="landing_introduce-wrapper landing-fullsize">
          <h3> {t('solution1')} </h3>
          <img
            className="logo"
            alt="logo"
            src={logo}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="600"
            data-aos-easing="ease-out-quad"
          />
          <img className="foreigner" alt="img" src={foreigner} />
          <p>
            {t('solution2')}
            <span className="p_emphasize">TripU</span>
            {t('solution3')}
          </p>
        </div>
        <div className="landing_introduce-wrapper landing-fullsize">
          <h3> {t('describe1')} </h3>
          <div className="mockImg-wrapper">
            <img
              alt="mockImg1"
              src={mockUp1}
              data-aos="fade-up"
              data-aos-offset="-50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out-quad"
            />
            <img
              alt="mockImg2"
              src={mockUp2}
              data-aos="fade-up"
              data-aos-offset="-25"
              data-aos-duration="600"
              data-aos-easing="ease-in-out-quad"
            />
          </div>
          <p>
            {t('describe2')} <span> {t('describe3')} </span>.
          </p>
        </div>
        <div className="landing_introduce-wrapper landing-fullsize">
          <h3 className="p3-h3"> {t('then')} </h3>
          <div className="pin_image-wrapper">
            <img className="land" alt="land_img" src={korea} />
            <img
              data-aos="zoom-in-down"
              data-aos-offset="300"
              data-aos-duration="300"
              data-aos-easing="ease-out-quad"
              className="pin"
              alt="pin"
              src={pin}
            />
            <img
              data-aos="zoom-in-down"
              data-aos-offset="260"
              data-aos-duration="300"
              data-aos-easing="ease-out-quad"
              className="pin"
              alt="pin"
              src={pin}
            />
            <img
              data-aos="zoom-in-down"
              data-aos-offset="220"
              data-aos-duration="300"
              data-aos-easing="ease-out-quad"
              className="pin"
              alt="pin"
              src={pin}
            />
            <img
              data-aos="zoom-in-down"
              data-aos-offset="200"
              data-aos-duration="300"
              data-aos-easing="ease-out-quad"
              className="pin"
              alt="pin"
              src={pin}
            />
            <img
              data-aos="zoom-in-down"
              data-aos-offset="150"
              data-aos-duration="300"
              data-aos-easing="ease-out-quad"
              className="pin"
              alt="pin"
              src={pin}
            />
          </div>
          <p>
            <span> {t('utripper1')} </span> {t('utripper2')}
          </p>
          <div
            className="utriper-info"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out-quad"
          >
            <h4> {t('utripper3')} </h4>
            <p> {t('utripper4')} </p>
          </div>
        </div>
        <div className="p4 landing_introduce-wrapper landing-fullsize">
          <p>
            <span>TripU</span> {t('summary1')}
          </p>
          <img
            className="landing-airplaneImg"
            alt="airplane_img"
            src={airplane}
            data-aos="fade-up-right"
            data-aos-offset="200"
            data-aos-duration="600"
            data-aos-easing="ease-out-quad"
          />
          <p> {t('summary2')} </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingInfo;
