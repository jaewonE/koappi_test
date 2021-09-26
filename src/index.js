import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import AppRouter from 'components/router';
import 'lang/i18n';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
