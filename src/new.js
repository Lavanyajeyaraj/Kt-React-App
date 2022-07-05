import { useLocation,useNavigate } from "react-router-dom";
// import "./App.css";
import { FaUserCircle } from "react-icons/fa";
import { ThemeContext} from "./Layout";
import "./App.css";
import { useContext } from "react";
function ComponentB() {
  const location = useLocation();
  console.log(location.state.obj);
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);


  return (
    <>
    <div className="App-header"  id={theme.theme}>
        <div ><button onClick={back} className="button button1" style={{marginRight:2650}}>Back</button></div>

      <div className="default_card">
          <div style={{ fontSize: 60, marginLeft: 250, marginTop: -62 }}> <FaUserCircle /></div>
        <div className="padding2">Name:{location.state.obj.name}</div>
        <div className="padding2">User Name:{location.state.obj.username}</div>
        <div className="padding2">Email-Id:{location.state.obj.email}</div>
        <div className="padding2">Address: </div>
        <br></br>
        <div className="Address_padding">
          Street:{location.state.obj.address.street}
        </div>
        <br></br>
        <div className="Address_padding">
          Suite:{location.state.obj.address.suite}
        </div>
        <br></br>
        <div className="Address_padding">
          City:{location.state.obj.address.city}
        </div>
        <br></br>
        <div className="Address_padding">
          ZipCode:{location.state.obj.address.zipcode}
        </div>
        <br></br>

        <div className="padding2">Phone:{location.state.obj.phone}</div>
        <div className="padding2">Website:{location.state.obj.website}</div>
      </div>
      </div>
    </>
  );
  function back(){
    navigate("/users1");

  }
}

export default ComponentB;
