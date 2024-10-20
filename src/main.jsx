import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <div className="bg-gradient-to-b from-[#101212] to-[#08201D] min-h-screen">
    </div> */}
    <div className="z-10 min-h-screen w-screen">
      <App />
    </div>
  </StrictMode>
);
