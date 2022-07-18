import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

const CrudUpdate = () => {
  const [inputs, setInputs] = useState("");
  const [Update_inputs, set_updatedInputs] = useState([]);
  const navigate = useNavigate();
    
  const handle_input = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    set_updatedInputs((values) => ({ ...values, [name]: value }));
    // console.log(value);
  };

  const location = useLocation();
  console.log(location.state.data);
  console.log(location.state.count);

  const set_data = () => {
    var arr = location.state.data;
    setInputs(arr);
    console.log(inputs);
  };
  useEffect(() => {
    set_data();
  }, []);
  const refreshPage = () => {
    navigate(0);
}
  console.log(Update_inputs);

  function update(event) {
    event.preventDefault();
    var A = inputs[1];
    var patch_object = {
      ID: inputs[0],
      Name: inputs[1],
      count: inputs[2],
      createdby: inputs[3],
      priority: inputs[4],
    };
    console.log(patch_object);
    var obj = {};
    var count_data = location.state.count;

    var index = { count: count_data };
    obj = { ...obj, ...index };
    console.log(patch_object.Name);
    obj = { ...obj, ...Update_inputs };
    console.log(inputs[0]);
    var ID = patch_object.ID;
    
    fetch(`http://172.20.8.250:5000/get_updatedTableData?=all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          // setInputs(data);
          var result = data.find(item => item.ID === inputs[0])
          console.log(result._id)
          // console.log(result)
       
  
        let queryString1 = {_id:result._id , in_update: Update_inputs}
        let query=JSON.stringify(queryString1)
        
        console.log(query)
    
        fetch("http://172.20.8.250:5000/updateData", {
                method: "POST",
                body:query,
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              window.location.reload()
            })
            .catch((err) => {
                console.error(err);
            });
  })
  .catch((err) => {
    console.error(err);
  })
  navigate("/crud1")

    }

  return (
    <div
      className="App-header"
      //   id={theme.theme}
      style={{ minHeight: 670, padding: 62.8 }}
    >
      <div className="crud_div">
        <form>
          <label style={{ fontSize: 17, color: "black" }}>
            <b>Title</b>
          </label>
          <input
            type="text"
            name="Name"
            placeholder={inputs[1]}
            className="crud_input"
            // value={inputs[1]}
            onChange={handle_input}
          ></input>
          <br></br>
          <br></br>
          <label style={{ fontSize: 17, color: "black" }}>
            {" "}
            <b> Test Case details</b>
          </label>
          <br></br>

          <div className="case-details">
            <div>
              <input
                type="text"
                name="count"
                placeholder={inputs[2]}
                className="crud_input"
                // value={inputs[2]}
                onChange={handle_input}
                style={{ width: 500, marginRight: 30 }}
              ></input>

              <input
                type="text"
                name="ID"
                placeholder={inputs[0]}
                className="crud_input"
                // value={inputs[0]}
                onChange={handle_input}
                style={{ width: 500, marginRight: 30 }}
              ></input>
              <select
                type="text"
                name="priority"
                className="crud_input"
                onChange={handle_input}
                style={{ width: 500, marginRight: 30 }}
              >
                <option placeholder={inputs[4]} value={inputs[4]}>
                  High
                </option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <select
                type="text"
                name="priority1"
                className="crud_input"
                style={{ width: 500, marginRight: 30 }}
              >
                <option value="manual">Manual</option>
                <option value="auto">Automated</option>
              </select>
              <select
                type="text"
                name="case_details"
                className="crud_input"
                style={{ width: 500, marginRight: 30 }}
              >
                <option value="test_steps">Test Case(Steps)</option>
                <option value="test_text">Test Case(Text)</option>
              </select>

              <input
                type="text"
                name="createdby"
                placeholder={inputs[3]}
                className="crud_input"
                // value={inputs[3]}
                onChange={handle_input}
                style={{ width: 500, marginRight: 30 }}
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <label style={{ fontSize: 17, color: "black" }}>
            <b>Pre-Conditions</b>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Write description..."
            className="crud_input"
          ></textarea>
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
              type="submit"
              value="Cancel"
              // className="square_btnSubmit"
              style={{
                marginTop: 0,
                marginLeft: 0,
                padding: 9,
                fontSize: 15,
                backgroundColor: "#787474e6 ",
                border: "none",
                color: "white",
                borderRadius: 4,
                // borderRadius: 4,
                cursor: "pointer",
                fontFamily: " inherit",
              }}
            ></input>
          </div>
        </form>
      </div>
      {/* <Table/> */}
    </div>
  );
 
};

export default CrudUpdate;
