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
import Calender from "./calender";
import Crud from "./crud";
import CrudForm from "./crud_form";
import CrudUpdate from "./crud_update";
import TreeView from "./treeview";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home1" element={<Home />} />
            <Route path="users1" element={<Mainuser />} />
            <Route path="contact1" element={<Contact />} />
            <Route path="/users2" element={<ComponentB />} />
            <Route path="/users3" element={<ComponentC />} />
            <Route path="/table1" element={<Table />} />
            <Route path="/calender1" element={<Calender />} />
            <Route path="/crud1" element={<Crud />} />
            <Route path="/crud2" element={<CrudForm />} />
            <Route path="/crud-update" element={<CrudUpdate />} />
            <Route path="/treeview" element={<TreeView />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
