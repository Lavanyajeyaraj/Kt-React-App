import React from "react";
import Home from "./home";
// import Users from "./pages/users";
import Contact from "./contact";
import Layout from "./Layout";
import Mainuser from "./mainuser";
import { Routes, Route } from "react-router-dom";
import ComponentB from "./new";
import ComponentC from "./new2";
import Table from "./table";


function App() {
  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home1" element={<Home />} />
            <Route path="users1" element={<Mainuser />} />
            <Route path="contact1" element={<Contact />} />
            <Route path="/users2" element={<ComponentB />} />
            <Route path="/users3" element={<ComponentC />} />
            <Route path="/table1" element={<Table />} />

          </Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
