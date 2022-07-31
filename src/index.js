import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import App_cart from "../src/app/myCart/App_cart";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <App_cart />
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();

// ReactDOM.render(<App />, document.getElementById("root"));
