import { ThemeContext} from "./Layout";
import "./App.css";
import {  useContext ,useEffect ,useState } from "react";
import FolderTree, { testData } from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';
// import Table from './crud';
// import CrudForm from "./crud_form"

const TreeView = () => {
    const[inputs,setinput]=useState([])
    const[form_data,setData]=useState("")
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
            setinput(data);
          })
          .catch((err) => {
            console.error(err);
          });
      };
      useEffect(() => {
        getData();
        // window.location.href("/crud1")
      }, []);

const onTreeStateChange = (state, event) => console.log(state, event);
var first_halfData=inputs.slice(0, 3);
console.log(first_halfData)
var second_halfData=inputs.slice(3,6    )


var A=first_halfData.map(value => value.Name);
console.log(A)

const result = A.reduce((acc, currItem) => {
    acc.push({name: currItem});
    return acc;
  }, []);
  console.log(result);

var B=second_halfData.map(value => value.Name);
console.log(B)

const result2 = B.reduce((acc, currItem) => {
    acc.push({name: currItem});
    return acc;
  }, []);
  console.log(result2);


const treeState = {
    
    name: " Repository",
    checked: 0.5,   // half check: some children are checked
    isOpen: false,   // this folder is opened, we can see it's children
    children: [
      {
        name: 'AV_Version1.0',
        checked: 0.5,
        isOpen: false,
        children: result,
      },
      {
        name: 'AV_version2.0',
        checked: 0.5,
        isOpen: false,
        children: result2
      },
    ],
    
  };
  const onNameClick = ({ defaultOnClick, nodeData }) => {
    defaultOnClick();
    const {
      path, name, checked, isOpen,
      url, ...whateverRest
    } = nodeData;
  
   console.log(nodeData)
   var node_name=nodeData.name

   var result = inputs.find(item => item.Name === node_name);
   console.log(result)
   setData(result)
  };
  console.log(form_data)

return (
<div className="flex-container">

    <div className="treediv_1 " >
        <div className="tree_inventory">Inventory</div>
  <FolderTree
    data={ treeState }
    showCheckbox={ false }      
    onChange={ onTreeStateChange }
    onNameClick={ onNameClick }
  />
  </div>
   <div style={{marginLeft:20}} className="treediv_2">
    {/* <Table/> */}
    <form>
          <label style={{ fontSize: 17 }}>
            <b>Title</b>
          </label>
          <input
            type="text"
            name="Name"
            placeholder="Enter Test case name here.."
            className="crud_input"
            id="Name"
            value={form_data.Name}
            disabled
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
                value={form_data.count}
                disabled
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
                  value={form_data.ID}
                  disabled
                ></input>
              </label>
              <select
                type="text"
                name="priority"
                className="crud_input"
                style={{ width: 500, marginRight: 30 }}
                value={form_data.priority}
                disabled
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
                value={form_data.priority1}
                disabled
              >
                <option value="manual">Manual</option>
                <option value="auto">Automated</option>
              </select>
              <select
                type="text"
                name="case_details"
                className="crud_input"
                style={{ width: 500, marginRight: 30 }}
                disabled
              >
                <option value="test_text">Test Case(Text)</option>
              </select>

              <input
                type="text"
                name="createdby"
                placeholder="admin  "
                className="crud_input"
                style={{ width: 500, marginRight: 30 }}
                value={form_data.createdby}
                disabled
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
                value={form_data.description}
                disabled
              ></textarea>
            </div>
            <span id="span2-desc" style={{ color: "red", fontSize: 13 }}></span>
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
            ></input>
            <input
              type="submit"
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
              }}
            ></input>
          </div>
        </form>
    
   </div>

</div>
);
};

export default TreeView;