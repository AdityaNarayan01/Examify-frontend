import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'

//
import App from './App';
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);


// serviceWorker.unregister();

reportWebVitals();