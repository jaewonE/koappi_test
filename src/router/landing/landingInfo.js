import React from 'react';

import logo from 'images/landing/logo.png';
import foreigner from 'images/landing/foreigner.png';
import mockUp1 from 'images/landing/mock-up-1.png';
import mockUp2 from 'images/landing/mock-up-2.png';
import korea from 'images/landing/korea.png';
import pin from 'images/landing/pin_b.png';
import airplane from 'images/landing/airplane.png';

const LandingInfo = () => {
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
            Hello!
          </h1>
          <p
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-quad"
            data-aos-delay="400"
          >
            Have you ever experienced any inconvenience
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-quad"
            data-aos-delay="400"
          >
            while making a itinerary?
          </p>
        </div>
        <div className="landing_question-wrapper q2 landing-fullsize">
          <h1
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="400"
            data-aos-easing="ease-in-out-quad"
          >
            Or,
          </h1>
          <p
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-quad"
          >
            Are you tired of common Trip on internet?
          </p>
        </div>
      </div>
      <div className="landing_introduce-container">
        <div className="landing_introduce-wrapper landing-fullsize">
          <h3>Now,</h3>
          <img
            className="logo"
            alt="logo"
            src={logo}
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="200"
            data-aos-easing="ease-out-quad"
          />
          <img className="foreigner" alt="img" src={foreigner} />
          <p>
            just request your own trip to{' '}
            <span className="p_emphasize">TripU </span>!
          </p>
        </div>
        <div className="landing_introduce-wrapper landing-fullsize">
          <h3>Easy,</h3>
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
            and also <span>conveniently</span>.
          </p>
        </div>
        <div className="landing_introduce-wrapper landing-fullsize">
          <h3>Than,</h3>
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
              data-aos-offset="270"
              data-aos-duration="300"
              data-aos-easing="ease-out-quad"
              className="pin"
              alt="pin"
              src={pin}
            />
            <img
              data-aos="zoom-in-down"
              data-aos-offset="275"
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
          </div>
          <p>
            <span>Utriper</span> will make your own customized itinerary!
          </p>
          <div
            className="utriper-info"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out-quad"
          >
            <h4>Who is Utriper?</h4>
            <p>native Korean residents who know their region well.</p>
          </div>
        </div>
        <div className="landing_introduce-wrapper landing-fullsize">
          <p>
            <span>TripU</span> will do all the anoying tasks of preparation
            stage!
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
          <p>You’re gonna Just Enjoy!</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingInfo;
