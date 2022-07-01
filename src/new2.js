import { useLocation ,useNavigate } from "react-router-dom";
import "./App.css";
import { FaUserCircle } from "react-icons/fa";

function ComponentC() {
  const location = useLocation();
  console.log(location.state.data);
  const navigate = useNavigate();


  return (
    <>
        <div ><button onClick={backTo_user} className="button button1">Back</button></div>

    <div className="default_card" style={{ width: 575, height: 625,padding: 122 }}>
          <div style={{ fontSize: 60, marginLeft: 250, marginTop: -62 }}> <FaUserCircle /></div>
        <div className="padding2">First name:{location.state.data.firstName}</div>
        <div className="padding2">Last name:{location.state.data.lastName}</div>
        <div className="padding2">Email-id:{location.state.data.email}</div>
        <div className="padding2">Age:{location.state.data.Age}</div>
        <div className="padding2">Domain:{location.state.data.Domain}</div>
        <div className="padding2">Employee-ID:{location.state.data.id }</div>
        <div className="padding2">Phone number:{location.state.data.phone}</div>

    </div>
     
    </>
  );
  function backTo_user(){
    navigate("/users1");

  }
}

export default ComponentC;
