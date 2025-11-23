import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./routes/index";
import "./index.css";
import "virtual:uno.css";

const root = document.getElementById("root");

if (!root) {
  console.error("No root element found can't continue");
  throw new Error("No root element found");
}

createRoot(root).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
