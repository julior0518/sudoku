import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles} from './styles'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);


