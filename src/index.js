import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import 'react-calendar/dist/Calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
// import 'react-big-calendar/lib/sass/styles';


// 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter  >
<App/>
  </BrowserRouter>
);

reportWebVitals();
