import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./routes/index";
import "./index.css";
import "virtual:uno.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
