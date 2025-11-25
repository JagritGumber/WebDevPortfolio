import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./routes/index";
import "./index.css";
import "virtual:uno.css";

const body = document.body;

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

if (!body) {
  console.error("No body element found can't continue");
  throw new Error("No body element found");
}
if (!body.getAttribute("data-theme")) {
  if (prefersDarkMode) {
    body.setAttribute("data-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
  }
}

createRoot(body).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
