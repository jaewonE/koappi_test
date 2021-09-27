import React, { useState } from 'react';
import { addLandingMessage } from 'components/firebase/fIndex';
import { useTranslation } from 'react-i18next';
import LandingShare from 'router/landing/landingShare';

const SubmitLandingPage = ({ setSubmitDone, language }) => {
  const [isChecked, setChecked] = useState(false);

  const submitLanding = async (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target[0].value;
    const email = target[1].value;
    const message = target[2].value;
    const landingObj = {
      name,
      email,
      message,
      getInterview: isChecked,
    };
    const error = await addLandingMessage(landingObj);
    if (error) {
      console.error(error);
    } else {
      setSubmitDone(true);
    }
  };

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
      <div
        className="submitLanding-container"
        data-aos="fade-in"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="submitLanding-title">
          <p> {t('submitTitle')} </p>
        </div>
        <div className="submitLanding-wrapper">
          <div className="info-wrapper">
            <div className="title"> {t('submit1')} </div>
            <p> {t('submit2')} </p>
            <p> {t('submit3')} </p>
            <p> {t('submit4')} </p>
            <div className="title"> {t('submit5')} </div>
            <p>Team KOAPPI | CEO : Hyun Lee</p>
            <p>E-mail: funtripu@gmail.com</p>
          </div>
          <form className="form-wrapper" onSubmit={submitLanding}>
            <div className="enter-userInfo">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder={t('name')}
                required
              />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder={t('email')}
                required
              />
            </div>
            <div className="enter-message">
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder={t('message')}
                //required
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
                {t('interviewCheck')}
              </label>
            </div>
            <div className="submit-wrapper">
              <button type="submit" id="submitMessage">
                {t('messageSubmit')}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="landingShare-container"
        data-aos="fade-in"
        data-aos-offset="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="landingShare-title">
          <p> Share with Friends! </p>
        </div>
        <LandingShare />
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
