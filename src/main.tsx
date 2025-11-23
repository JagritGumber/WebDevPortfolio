import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./routes/index";
import "./index.css";
import "virtual:uno.css";

const root = document.getElementById("root");

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

if (!root) {
  console.error("No root element found can't continue");
  throw new Error("No root element found");
}

if (prefersDarkMode) {
  root.setAttribute("data-theme", "dark");
} else {
  root.setAttribute("data-theme", "light");
}

createRoot(root).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
