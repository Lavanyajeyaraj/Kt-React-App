import "./App.css";
import { useEffect, useState , useContext } from "react";
import FolderTree from "react-folder-tree";
import { useNavigate } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import "react-folder-tree/dist/style.css";
import Tabel from "./crud";
import { ThemeContext } from "./Layout";
import MUIDataTable from "mui-datatables";


const TreeView = () => {
  const [inputs, setinput] = useState([]);
  const [form_data, setData] = useState("");
  const [edit_input, set_editInput] = useState({});
  const [show, setShow] = useState(false);
  const [showTabel, setTabelShow] = useState(true);

  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    set_editInput((values) => ({ ...values, [name]: value }));
  };
  //   console.log(edit_input);
  const getData = () => {
    fetch(`http://172.20.8.250:5000/get_TableData?=all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setinput(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const onTreeStateChange = (state, event) => console.log(state, event);
  var first_halfData = inputs.slice(0, 3);
  console.log(first_halfData);
  var second_halfData = inputs.slice(3, 6);

  var A = first_halfData.map((value) => value.Name);
  console.log(A);

  const result = A.reduce((acc, currItem) => {
    acc.push({ name: currItem });
    return acc;
  }, []);
  console.log(result);

  var B = second_halfData.map((value) => value.Name);
  console.log(B);

  const result2 = B.reduce((acc, currItem) => {
    acc.push({ name: currItem });
    return acc;
  }, []);
  console.log(result2);
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


    onRowClick: (rowData, rowState) => {
      console.log(rowData, rowState)
      console.log(rowData[1].props.children.props.children)

          // setInputs(data);
          var result = inputs.find(item => item.Name === rowData[1].props.children.props.children )
          console.log(result)

setData(result)
      setShow(true);
    setTabelShow(false);


    //   alert("gjhg")
    // let ndata=onNameClick()
    // console.log(ndata)
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


  const treeState = {
    name: " Repository",
    checked: 0.5,
    isOpen: false,
    children: [
      {
        name: "AV_Version1.0",
        checked: 0.5,
        isOpen: false,
        children: result,
      },
      {
        name: "AV_version2.0",
        checked: 0.5,
        isOpen: false,
        children: result2,
      },
    ],
  };
  const onNameClick = ({ defaultOnClick, nodeData }) => {
    defaultOnClick();
    setShow(true);
    setTabelShow(false);
    const { path, name, checked, isOpen, url, ...whateverRest } = nodeData;

    console.log(nodeData);
    var node_name = nodeData.name;

    var result = inputs.find((item) => item.Name === node_name);
    console.log(result);
    setData(result);

  };
  console.log(form_data);


  function enable() {
    document.getElementsByTagName("fieldset")[0].removeAttribute("disabled");
  }

  function update(e) {
    e.preventDefault();
    let queryString1 = { _id: form_data._id, in_update: edit_input };
    let query = JSON.stringify(queryString1);

    console.log(query);

    fetch("http://172.20.8.250:5000/updateData", {
      method: "POST",
      body: query,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function cancel(){
    // setShow(false)
    alert("are you sure to cancel this action?")
    window.location.reload()

  }
  function Add_new() {
  
    console.log(inputs)
  var Alt_ID= inputs.map(value => value.ID);
  console.log(Alt_ID)
    navigate("/crud2", { state: { id: 0,ID:Alt_ID } });
  }
  const data=inputs

  return (
    <div className="flex-container"       id={theme.theme}>
      <div className="treediv_1 ">
        <div className="tree_inventory">Inventory</div>
        <FolderTree
          data={treeState}
          showCheckbox={false}
          onChange={onTreeStateChange}
          onNameClick={onNameClick}
        />
      </div>
      {showTabel ? (
        <div id="tabel" className="treediv_2" style={{padding:0,marginLeft:10}}><p style={{marginLeft:20,fontSize:25}}>AV_Version1.0</p>
          <div
     
     className="flex-container"

//    id={theme.theme}
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
        </div>
      ) : null}

      {show ? (
        <div style={{ marginLeft: 20 }} className="treediv_2">
          {/* <Table/> */}
          <div
            onClick={enable}
            style={{ marginTop: 0, marginLeft: 1402, cursor: "pointer" }}
          >
            <FaEdit style={{ color: "steelblue", fontSize: 30 }} />
          </div>

          <form id="form_id">
            <fieldset disabled="disabled" style={{ borderWidth: 0 }}>
              <label style={{ fontSize: 17 }}>
                <b>Title</b>
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Enter Test case name here.."
                className="crud_input"
                id="Name"
                defaultValue={form_data.Name}
                onChange={handleChange}
                // disabled
              ></input>
              <span id="span" style={{ color: "red", fontSize: 13 }}></span>
              <br></br>
              <br></br>
              <label style={{ fontSize: 17 }}>
                {" "}
                <b> Test Case details</b>
              </label>
              <br></br>

              <div className="case-details">
                <div>
                  <input
                    type="text"
                    name="count"
                    className="crud_input"
                    style={{ width: 500, marginRight: 30 }}
                    defaultValue={form_data.count}
                    onChange={handleChange}

                    // disabled
                  ></input>

                  <label className="crud_label">
                    <span
                      id="span1-id"
                      style={{ color: "red", fontSize: 13 }}
                    ></span>
                    <span
                      id="span2-id"
                      style={{ color: "red", fontSize: 13 }}
                    ></span>
                    <input
                      type="text"
                      name="ID"
                      placeholder="Enter Alt ID"
                      className="crud_input"
                      style={{ width: 500, marginRight: 30 }}
                      id="alt-id"
                      defaultValue={form_data.ID}
                      onChange={handleChange}

                      //   disabled
                    ></input>
                  </label>
                  <select
                    type="text"
                    name="priority"
                    className="crud_input"
                    style={{ width: 500, marginRight: 30 }}
                    defaultValue={form_data.priority}
                    onChange={handleChange}

                    // disabled
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                  <select
                    type="text"
                    name="priority1"
                    className="crud_input"
                    style={{ width: 500, marginRight: 30 }}
                    defaultValue={form_data.priority1}
                    onChange={handleChange}

                    // disabled
                  >
                    <option value="manual">Manual</option>
                    <option value="auto">Automated</option>
                  </select>
                  <select
                    type="text"
                    name="case_details"
                    className="crud_input"
                    style={{ width: 500, marginRight: 30 }}
                    onChange={handleChange}

                    // disabled
                  >
                    <option value="test_text">Test Case(Text)</option>
                  </select>

                  <input
                    type="text"
                    name="createdby"
                    placeholder="admin  "
                    className="crud_input"
                    style={{ width: 500, marginRight: 30 }}
                    defaultValue={form_data.createdby}
                    onChange={handleChange}

                    // disabled
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>
              <label style={{ fontSize: 17 }}>
                <b>Pre-Conditions</b>

                <div>
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Write description..."
                    className="crud_input"
                    id="desc"
                    defaultValue={form_data.description}
                    onChange={handleChange}

                    // disabled
                  ></textarea>
                </div>
                <span
                  id="span2-desc"
                  style={{ color: "red", fontSize: 13 }}
                ></span>
              </label>

              <div style={{ textAlign: "right" }}>
                <input
                  type="submit"
                  value="Update"
                  className="square_btnSubmit"
                  style={{
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 25,
                    padding: 8,
                    fontSize: 15,
                    backgroundColor: "#21b613!important",
                    border: "none",
                  }}
                  onClick={update}
                ></input>
                <input
                //   type="submit"
                  value="Cancel"
                  style={{
                    marginTop: 0,
                    marginLeft: 0,
                    padding: 9,
                    fontSize: 15,
                    backgroundColor: "#787474e6 ",
                    border: "none",
                    color: "white",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontFamily: " inherit",
                    width:50
                  }}
                  onClick={cancel}
                ></input>
              </div>
            </fieldset>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default TreeView;
