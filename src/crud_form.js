import { ThemeContext } from "./Layout";
import "./App.css";
import { useContext, useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
var count=0


const CrudForm = () => {
  const [inputs, setInputs] = useState({});
  const [repo_inputs, repo_setInputs] = useState({});
  const navigate = useNavigate();
    
const location = useLocation();
 
  const handle_input = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    repo_setInputs((values) => ({ ...values, [name]: value }));


    // event.preventPropagation()
    // console.log(value);
  };
 
  const theme = useContext(ThemeContext);
    console.log(repo_inputs);
var obj={}
var count_data=location.state.count

    var index={count:count_data}
    obj = { ...obj, ...index };
obj = { ...obj, ...repo_inputs };
console.log(obj)
console.log(location.state.count)
  return (

    <div
      className="App-header"
      id={theme.theme}
      style={{ minHeight: 670, padding: 62.8 }}
    >
      <div className="crud_div">
        <form>
          <label style={{ fontSize: 17 }}>
            <b>Title</b>
          </label>
          <input
            type="text"
            name="Name"
            placeholder="Enter Test case name here.."
            className="crud_input"
            onChange={handle_input}
          ></input>
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
                value={count_data}
                className="crud_input"
                onChange={handle_input}
                style={{ width: 500, marginRight: 30 }}
              disabled ></input>

              <input
                type="text"
                name="ID"
                placeholder="Enter Alt ID"
                className="crud_input"
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
                <option value="high">High</option>
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
                placeholder="admin  "
                className="crud_input"
                onChange={handle_input}
                style={{ width: 500, marginRight: 30 }}
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <label style={{ fontSize: 17 }}>
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
              onClick={Submit_data}
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
              onClick={Submit_data}
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
  function Submit_data(event) {
    event.preventDefault();
    console.log(repo_inputs);

    fetch("http://localhost:5000/crud_data", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    //   fetch("http://localhost:5000/crud_data", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json, text/plain, */*",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(repo_inputs),
    //   })
    //     .then((res) => res.json())
    //     .then((res) => console.log(res));
    setInputs({});

   
        // navigate("/crud1");
  }
};

export default CrudForm;
