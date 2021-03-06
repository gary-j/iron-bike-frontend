import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context';
import { CartProviderWrapper } from './context/cart.context';
import ScrollToTop from './components/ScrollToTop';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <CartProviderWrapper>
          <ScrollToTop/>
          <App />
        </CartProviderWrapper>
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
