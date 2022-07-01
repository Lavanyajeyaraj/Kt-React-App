import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./home";
// import Users from "./pages/users";
import Contact from "./contact";
import Layout from "./Layout";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ComponentB from "./new";
import ComponentC from "./new2";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home1" element={<Home />} />
        <Route path="users1" element={<App />} />
        <Route path="contact1" element={<Contact />} />
        <Route path="/users2" element={<ComponentB />} />
        <Route path="/users3" element={<ComponentC/>} />
     </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
