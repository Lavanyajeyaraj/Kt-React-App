import React from "react";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Layout";
import "./App.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
var count = 0;

const Table = () => {
  const theme = useContext(ThemeContext);

  //   location.reload()

  const [inputs, setInputs] = useState([]);
  // const [refreshKey, setRefreshKey] = useState(0);

  const navigate = useNavigate();

 const columns = [
    {
     name: "ID",
     label: "ID",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Name",
     label: "Name",
     options: {
      filter: true,
      sort: false,
      customBodyRender: (rowData)=><div style={{color:"blue",cursor:"pointer"}}><a>{rowData}</a></div>
     }
    },
   
    {
     name: "count",
     label: "Count",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "priority",
      label: "Priority",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "createdby",
      label: "Created by",
      options: {
       filter: true,
       sort: false,
      }
     },
   ]

  const options = {
    filterType: "checkbox",
    // render:(rowData)=><div style={{color:"red"}}>{rowData.ID}</div>,
    render:(rowData)=>console.log(rowData),


    // onRowClick: (rowData, rowState) => {
    //   console.log(rowData, rowState);
    //   navigate("/crud-update", { state: { id: 0, data: rowData } });
    // },
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

  //   useEffect(() => {
  //    refreshPage() ;
  //   }, []);

  const getData = () => {
    fetch(`http://172.20.8.250:5000/get_TableData?=all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setInputs(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
    // window.location.href("/crud1")
  }, []);
  console.log(inputs)

  const data = inputs;
  // const data = [
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  //  ];

  return (
    <div
     
        className="flex-container"

      id={theme.theme}
    >

      <MUIDataTable
        title={""}
        data={data}
        columns={columns}
        options={options}
      />
      <div onClick={Add_new} style={{ textAlign: "right", cursor: "pointer" }}>
        <h1>+</h1>
        </div>

      <br></br>
    </div>
  );

  function Add_new() {
  
    console.log(inputs)
  var Alt_ID= inputs.map(value => value.ID);
  console.log(Alt_ID)
    navigate("/crud2", { state: { id: 0, count: count++ , ID:Alt_ID } });
  }

};

export default Table;
