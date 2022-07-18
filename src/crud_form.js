import { ThemeContext } from "./Layout";
import "./App.css";
import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
var count = 0;

const CrudForm = () => {
  const [inputs, setInputs] = useState({});
  const [repo_inputs, repo_setInputs] = useState({});
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  // const changeData = reducer => {
  //   const state = reducer();
  //   document.querySelector( '#title' ).value = state.Name;
  // };
  const handle_input = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    var alt=location.state.ID
    console.log(alt)
 
    repo_setInputs((values) => ({ ...values, [name]: value }));
    console.log(name)
    const is_valid =/^[a-zA-Z0-9]{5,20}$/.test(document.getElementById("Name").value);
    const Id_valid=/^[0-9]{0,4}$/.test(document.getElementById("alt-id").value);
    const Desc_valid=/^[a-zA-Z0-9]{20,500}$/.test(document.getElementById("desc").value);
    // var existing_alt = (alt.indexOf(document.getElementById("alt-id").value) > -1);
    // console.log(existing_alt)

    console.log(document.getElementById("alt-id").value)
  
    // if(!existing_alt == true){
    //   document.getElementById("span1-id").innerText=""
    //   document.getElementById("alt-id").style.borderColor="#ccc"
    // }
    
  
    if(!Id_valid){
      document.getElementById("span1-id").innerText="**This field can have maximum 4 numbers"
      document.getElementById("alt-id").style.borderColor="red"
    }
    else if(alt.includes(document.getElementById("alt-id").value)){
      document.getElementById("span1-id").innerText="**Alt-ID aleready exists"
    }

    else {
      document.getElementById("span1-id").innerText=""
      document.getElementById("alt-id").style.borderColor="#ccc"
    }
  
    if(!is_valid){
      document.getElementById("span").innerText="**This field should be of minimum 5to20 characters"
      document.getElementById("Name").style.borderColor="red"
    }
    else {
      document.getElementById("span").innerText=""
      document.getElementById("Name").style.borderColor="#ccc"
    }
    if(!Desc_valid){
      document.getElementById("span2-desc").innerText="**This field should be of minimum 20 characters"
      document.getElementById("desc").style.borderColor="red"
    }
    else if(Desc_valid) {
      document.getElementById("span2-desc").innerText=""
      document.getElementById("desc").style.borderColor="#ccc"
    }
  
  };
 
  const theme = useContext(ThemeContext);
  console.log(repo_inputs);
  var obj = {};
  var count_data = location.state.count;
 

  var index = { count: count_data };
  obj = { ...obj, ...index };
  obj = { ...obj, ...repo_inputs };
  console.log(obj);
  console.log(location.state.count);
  console.log(state )
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
            id='Name'
        
          ></input>
          <span id='span' style={{color:'red',fontSize:13}}></span>
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
                disabled
              ></input>
            

              <input
                type="text"
                name="ID"
                placeholder="Enter Alt ID"
                className="crud_input"
                onChange={handle_input}
                style={{ width: 500, marginRight: 30 }}
                id='alt-id'
              ></input>
                <label>
          <span id='span1-id' style={{color:'red',fontSize:13}}></span>
          <span id='span2-id' style={{color:'red',fontSize:13}}></span>


              </label>

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
                onChange={handle_input}
              >
                <option value="manual">Manual</option>
                <option value="auto">Automated</option>
              </select>
              <select
                type="text"
                name="case_details"
                className="crud_input"
                style={{ width: 500, marginRight: 30 }}
                onChange={handle_input}
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
            id='desc'
            onChange={handle_input}
          ></textarea>
          <span id="span2-desc"style= {{color:'red',fontSize:13}}></span>

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

  // const regex=/^[A-Za-z][A-Za-z0-9_]{7,29}$/

    event.preventDefault();
    console.log(repo_inputs);
    var size = Object.keys(repo_inputs).length;
    console.log(size)
    if(size === 7 ){

    // if(regex.test(repo_inputs[0]))

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
    setInputs({});

    navigate("/crud1");
  }
  else{
    alert("please fill all the fields")
  }
}

};

export default CrudForm;
