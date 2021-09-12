import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SelectLangPage from 'router/landing/selectLangPage';
import SubmitLandingPage from 'router/landing/SubmitLandingPage';
import LandingInfo from 'router/landing/landingInfo';
import LandingSuccess from './landingSuccess';

const Landing = () => {
  const [language, setLanguage] = useState(null);
  const [submitDone, setSubmitDone] = useState(false);
  useEffect(() => {
    console.log(language);
  }, [language]);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      {submitDone ? (
        <LandingSuccess />
      ) : (
        <React.Fragment>
          {language ? (
            <div className="landing-container">
              <LandingInfo />
              <SubmitLandingPage setSubmitDone={setSubmitDone} />
            </div>
          ) : (
            <SelectLangPage setLanguage={setLanguage} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Landing;
