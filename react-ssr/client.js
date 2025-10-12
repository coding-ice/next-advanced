import React from "react";
import {createRoot, hydrateRoot} from 'react-dom/client'
import App from "./pages/index";

const root = hydrateRoot(document.getElementById("root"));
root.render(<App />);