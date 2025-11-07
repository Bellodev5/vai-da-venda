import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PlansApp from "./PlansApp";
import FAQApp from "./faqApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/planos" element={<PlansApp />} />
        <Route path="/faq" element={<FAQApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
