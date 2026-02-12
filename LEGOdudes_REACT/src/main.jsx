import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import App from "./App.jsx";
import "./style/lego.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
)