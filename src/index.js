import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <div
      style={{
        textAlign: "center",
        background: "black",
        height: "50px"
      }}
    >
      <p>© 2023 Walletwizard. All rights reserved.</p>
    </div>
  </StrictMode>
);
