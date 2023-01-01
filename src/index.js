import React from "react";
import ReactDOM from "react-dom/client";
import { ColorProvider } from "./context/colorContext";
import { AccessProvider } from "./context/accessContext";
import { Provider } from "./context/globalContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider>
      <AccessProvider>
        <ColorProvider>
          <App />
        </ColorProvider>
      </AccessProvider>
    </Provider>
  </React.StrictMode>
);
