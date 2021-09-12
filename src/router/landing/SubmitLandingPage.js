import React, { useState } from 'react';
import { addLandingMessage } from 'components/firebase/fIndex';

const SubmitLandingPage = ({ setSubmitDone }) => {
  const [isChecked, setChecked] = useState(false);

  const submitLanding = async (e) => {
    e.preventDefault();
    // const { target } = e;
    // const name = target[0].value;
    // const email = target[1].value;
    // const message = target[2].value;
    // const landingObj = {
    //   name,
    //   email,
    //   message,
    //   getInterview: isChecked,
    // };
    // const error = await addLandingMessage(landingObj);
    // if (error) {
    //   console.error(error);
    // } else {
    //   setSubmitDone(true);
    // }
    setSubmitDone(true);
  };
  return (
    <React.Fragment>
      <div
        className="submitLanding-container"
        data-aos="fade-in"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="submitLanding-title">
          <p>Experience TripU Faster than Anyone Else!</p>
        </div>
        <div className="submitLanding-wrapper">
          <div className="info-wrapper">
            <div className="title">The first chance to experience TripU</div>
            <p>Please leave your contact information,</p>
            <p>and we will contact you as soon as TripU is released!</p>
            <p>
              Please note that Team KOAPPI can ask for an interview for future
              product development.
            </p>
            <div className="title">Contact Info</div>
            <p>Team KOAPPI | CEO : Hyun Lee</p>
            <p>E-mail: funtripu@gmail.com</p>
          </div>
          <form className="form-wrapper" onSubmit={submitLanding}>
            <div className="enter-userInfo">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="E-mail Address"
                required
              />
            </div>
            <div className="enter-message">
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="get-permission">
              <input
                className="form-check-input"
                type="checkbox"
                id="landing-permisiion-btn"
                onClick={() => setChecked((prev) => !prev)}
              />
              <label
                className="form-check-label"
                htmlFor="landing-permisiion-btn"
              >
                I am willing to take an interview for future product
                development.
              </label>
            </div>
            <div className="submit-wrapper">
              <button type="submit" id="submitMessage">
                Leave Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="landing_footer-wrapper">
        <div className="text-muted text-center">© 2021 KOAPPI.</div>
        <div className="text-muted text-center">
          <small>font by Open-sans.</small>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default SubmitLandingPage;
