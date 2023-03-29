import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import App from '@/App';

import 'normalize.css'
import './assets/css/index.less'
import theme from './assets/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Suspense fallback="lodaing">
      <ThemeProvider theme={theme}>
        <HashRouter>
            <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  // </React.StrictMode>
);


