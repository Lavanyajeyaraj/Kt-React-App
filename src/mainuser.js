import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import "./App.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import TableContainer from "@material-ui/core/TableContainer";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import TableHead from "@material-ui/core/TableHead";
// import TableCell from "@material-ui/core/TableCell";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { createContext } from "react";
// import ReactSwitch from "react-switch";
import { ThemeContext } from "./Layout";
import { useContext } from "react";

function Mainuser() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const [{ items }, setItems] = useState({ items: [] });
  // const [theme, setTheme] = useState("light");
  // console.log(ThemeContext)

  const theme = useContext(ThemeContext);

  const navigate = useNavigate();
  const reset_inp = useRef(null);

  // const toggle_theme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  //   console.log(theme);
  //   localStorage.setItem("theme", JSON.stringify(theme));
  // };
  const toComponentB = () => {
    navigate("/users2", { state: { id: 1, name: "Lavyy" } });
  };
  const toComponentc = () => {
    navigate("/users3", { state: { id: 1, name: "Lavyy" } });
  };
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const addItem = (event) => {
    // document.getElementById("inp_1").innerText=""

    // const SampleData = [
    //   formatOurData("First Name", inputs.firstname),
    //   formatOurData("Last Name", inputs.lastname),
    //   formatOurData("Employee_id", inputs.EmployeeId),
    //   formatOurData("Age", inputs.Age),
    //   formatOurData("Domain", inputs.Domain),
    //   formatOurData("Phone number", inputs.Ph_num),
    //   formatOurData("Email", inputs.mail),
    // ];
    const regex_fname = /^[A-Za-zÀ-ÿ ,.'-]{3,15}$/;
    var regexphone = /^[0-9]+$/;
    var regex_num = /^(0|91|\+91)?-?[9]\d{9}$/;
    var regexEmail = /\S+@\S+\.\S+/;
    var regex_id = /^[0-9]{4}$/;
    event.preventDefault();

    if (inputs.firstname === "") {
      alert("this field cannot be empty ");
    } else if (!inputs.firstname.match(regex_fname)) {
      alert("Firstname can have alphabets,(.),(-).");
    } else if (inputs.lastname === "") {
      alert("this field cannot be empty ");
    } else if (!inputs.lastname.match(regex_fname)) {
      alert("Lastname can have alphabets,(.),(-).");
    } else if (inputs.EmployeeId === "") {
      alert("this field cannot be empty ");
    } else if (!inputs.EmployeeId.match(regex_id)) {
      alert("employee Id field should contain only 4 digit numbers");
    } else if (inputs.Age === "") {
      alert("this field cannot be empty ");
    } else if (!inputs.Age.match(regexphone)) {
      alert("Age  should contain only numbers");
    } else if (inputs.Domain === "") {
      alert("this field cannot be empty ");
    } else if (!inputs.Domain.match(regex_fname)) {
      alert("Domain can have alphabets,(.),(-).");
    } else if (inputs.Ph_num === "") {
      alert("this field cannot be empty ");
    } else if (!inputs.Ph_num.match(regex_num)) {
      alert("Phone number should contain only 10 digit numbers ");
    } else if (!inputs.mail.match(regexEmail)) {
      alert("invalid Email Id");
    } else {
      items.push(
        <div key={items.length}>
          <br></br>

          <div onClick={card_show} id="x">
            <Card className="card">
              <CardContent>
                <div
                  style={{
                    fontSize: 60,
                    marginLeft: 250,
                    marginTop: -62,
                    color: "white",
                  }}
                >
                  <FaUserCircle />
                </div>
                <Typography variant="h5" component="h2" className="padding1">
                  Employee ID:{inputs.EmployeeId}
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  className="padding1"
                  id="fname_card"
                >
                  First Name:{inputs.firstname}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      );

      setItems({ items: [...items] });
      setInputs({});
    }

    // });
    function card_show(e) {
      // var A = e.target.innerText;
      const default_data = new Object();
      default_data.firstName = inputs.firstname;
      default_data.lastName = inputs.lastname;
      default_data.email = inputs.mail;
      default_data.Age = inputs.Age;
      default_data.Domain = inputs.Domain;
      default_data.id = inputs.EmployeeId;
      default_data.phone = inputs.Ph_num;

      console.log(default_data);

      // alert(A);
      toComponentc();
      navigate("/users3", { state: { id: 1, data: default_data } });
    }
    // window.location.reload(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(value);
  };

  return (
    <div className="App-header" id={theme.theme}>
      {/* <div className="toggle_switch">
            <div className="switch_font">
              {theme === "light" ? "LightMode" : "Darkmode"}
            </div>
            <br></br>
            <ReactSwitch onChange={toggle_theme} checked={theme === "light"} />
          </div> */}

      <div className="main_div" id="form_div">
        <form name="emp_form" id="newForm" ref={reset_inp}>
          <h2 className="heading_reg">Registration Form</h2>
          <div className="font">
            <b>First Name</b>
            <input
              id="inp_1"
              style={{ marginLeft: "112px" }}
              type="text"
              placeholder="First Name"
              className="input"
              name="firstname"
              value={inputs.firstname || ""}
              onChange={handleChange}
            />

            <div style={{ marginLeft: "116px" }}>
              <span id="err_msg1" style={{ color: "red" }}></span>
            </div>
          </div>
          <br></br>
          <div className="font">
            <b>Last Name</b>
            <input
              style={{ marginLeft: "116px" }}
              type="text"
              placeholder="Lastname"
              className="input"
              name="lastname"
              value={inputs.lastname || ""}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="font">
            <b>Employee-Id</b>
            <input
              style={{ marginLeft: "104px" }}
              type="text"
              placeholder="EmployeeId"
              className="input"
              name="EmployeeId"
              value={inputs.EmployeeId || ""}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="font">
            <b>Age</b>
            <input
              style={{ marginLeft: "182px" }}
              type="text"
              placeholder="Age"
              className="input"
              name="Age"
              value={inputs.Age || ""}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="font">
            <b>Domain</b>
            <input
              style={{ marginLeft: "150px" }}
              type="text"
              placeholder="Domain"
              className="input"
              name="Domain"
              value={inputs.Domain || ""}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="font">
            <b>Phone Number</b>
            <input
              style={{ marginLeft: "89px" }}
              type="text"
              placeholder="Contact number"
              className="input"
              name="Ph_num"
              value={inputs.Ph_num || ""}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="font">
            <b>Email-id</b>
            <input
              style={{ marginLeft: "143px" }}
              type="text"
              placeholder="email"
              className="input"
              name="mail"
              value={inputs.mail || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="square_btnSubmit"
              onClick={addItem}
            >
              Submit
            </button>
            {/* {items} */}
          </div>
        </form>
      </div>

      <div>{default_append()}</div>
      <div>{items}</div>

      <p className="message">{message}</p>
    </div>
  );

  function default_append() {
    return (
      <>
        {(() => {
          const d = new Date();
          let time = d.getTime();
          // console.log(time);
          var x = time;
          const arr = [];
          for (let i = 0; i < data.length; i++) {
            arr.push(
              <div id="default_div">
                <Card className="card" onClick={default_show}>
                  <CardContent>
                    <div style={{ fontSize: 60, marginLeft: 144 }}>
                      <FaUserCircle />
                    </div>
                    <Typography
                      variant="h5"
                      component="h2"
                      className="padding1"
                      id="fname_card"
                    >
                      Employee ID:{data[i].id}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h2"
                      className="padding1"
                      id="fname_card"
                    >
                      First Name:{data[i].name}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
            // document.getElementById("default_div").setAttribute("id",x)

            function default_show(e) {
              var A = e.target.innerText;
              // alert(A);
              // redirectToExternalResource('http://localhost:4000/')
              var str = A;
              var matches = str.match(/(\d+)/);
              console.log(matches[0]);
              console.log(data);
              var default_id = JSON.parse(matches[0]);
              let obj = data.find((o) => o.id === default_id);

              console.log(obj);
              toComponentB();
              navigate("/users2", { state: { id: x, obj } });

              // ComponentB()
            }
          }
          return arr;
        })()}
      </>
    );
  }
}
export default Mainuser;
