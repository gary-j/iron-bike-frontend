import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProviderWrapper } from "./context/cart.context";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProviderWrapper>
        <App />
      </CartProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
