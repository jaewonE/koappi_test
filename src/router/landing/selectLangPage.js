import React from 'react';
import logo from 'images/landing/logo.png';

const SelectLangPage = ({ setLanguage }) => {
  const submitLang = (e) => {
    e.preventDefault();
    const {
      target: { name },
    } = e;
    setLanguage(name);
  };

  return (
    <div className="selectLangPage-container">
      <div className="selectLangPage-wrapper">
        <img alt="logo" src={logo} />
        <h1 className="title">TripU</h1>
        <p className="description">
          Customized Korean travel product platform provided by Korean local
          residents.
        </p>
        <div className="submitLang">
          <input
            type="button"
            onClick={submitLang}
            name="english"
            value="English"
          />
          <input
            type="button"
            onClick={submitLang}
            name="chinese"
            value="中國語"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectLangPage;
