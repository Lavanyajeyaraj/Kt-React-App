import React from "react";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Layout";
import "./App.css";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
var count=0;

const Table = () => {
  // window.location.reload()
  const theme = useContext(ThemeContext);

  const location = useLocation();

  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();
  const columns = ["ID", "Name", "count", "createdby", "priority"];

  const options = {
    filterType: "checkbox",
    onRowClick: (rowData, rowState) => {
      console.log(rowData, rowState);
      navigate("/crud-update", { state: { id: 0, data: rowData } });
    },
    onRowsDelete: (rowsDeleted, dataRows) => {
      console.log(rowsDeleted.data[0].index);
      var data_delete = rowsDeleted.data[0].index;
      console.log(inputs[data_delete]);
      var docId = inputs[data_delete]._id;
      console.log(docId);

      fetch(`http://172.20.8.250:5000/deleteData?docId=${docId}`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
      //  for(let i=0;i>rowsDeleted.length;i++){

      //  }
    },
  };

  const getData = () => {
    fetch(`http://172.20.8.250:5000/get_TableData?=all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setInputs(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(inputs[inputs.length-1].count)
  console.log(inputs)
  const data = inputs;

  return (
    <div
      className="App-header"
      style={{
        minHeight: 33,
        alignItems: "normal",
        justifyContent: "initial",
      }}
      id={theme.theme}
    >
      <div onClick={Add_new} style={{ textAlign: "right", cursor: "pointer" }}>
        <h1>+</h1>
      </div>
      <MUIDataTable
        title={""}
        data={data}
        columns={columns}
        options={options}
      />

      <br></br>
    </div>
  );

  function Add_new() {
    // console.log(inputs)
    navigate("/crud2",{ state: { id: 0,count: count++ } });
  }
};
export default Table;
