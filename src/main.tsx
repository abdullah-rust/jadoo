import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const removeInitialLoader = () => {
  const loader = document.getElementById("initial-loader");
  if (loader) {
    loader.classList.add("loader-hidden");

    setTimeout(() => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 2000);
  }

  document.body.classList.add("loaded");
};

// Render the app
const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Remove loader when React is ready
removeInitialLoader();
