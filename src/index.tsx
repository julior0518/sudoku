import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </>
    </ThemeProvider>
  </React.StrictMode>
);


