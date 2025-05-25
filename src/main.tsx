import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
