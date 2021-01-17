import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './common/appTheme';
import languages from './common/languages.json';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <IntlProvider
        messages={languages['en-US']}
        locale='en-US'
        defaultLocale='en'
      >
        <ThemeProvider theme={appTheme}>
          <App />
        </ThemeProvider>
      </IntlProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
