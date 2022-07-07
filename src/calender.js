import { ThemeContext } from "./Layout";
// import Calendar from 'react-calendar';
import "./App.css";
import { useContext, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: "Automation testing",
    start: new Date(2022, 3, 12, 12, 0, 0, 0),
    end: new Date(2022, 3, 13, 13, 0, 0, 0),
  },
  {
    title: "DTS ENDS",
    start: new Date(2022, 10, 6, 0, 0, 0),
    end: new Date(2022, 10, 13, 0, 0, 0),
  },

  {
    title: "Project-Training",
    start: new Date(2022, 3, 9, 0, 0, 0),
    end: new Date(2022, 3, 9, 0, 0, 0),
  },
  {
    title: "project-Conference",
    start: new Date(2022, 3, 11),
    end: new Date(2022, 3, 13),
    desc: "Big conference for important people",
  },
  {
    title: "Meeting-Project",
    start: new Date(2022, 3, 12, 10, 30, 0, 0),
    end: new Date(2022, 3, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },

  {
    title: "Ats-release",
    start: new Date(2022, 3, 12, 14, 0, 0, 0),
    end: new Date(2022, 3, 12, 15, 0, 0, 0),
  },
  
  {
    title: "HD-Radio",
    start: new Date(2022, 3, 13, 7, 0, 0),
    end: new Date(2022, 3, 13, 10, 30, 0),
  },
  {
    title: "React-training",
    start: new Date(2022, 3, 17, 19, 30, 0),
    end: new Date(2022, 3, 18, 2, 0, 0),
  },
  {
    title: "Automated test solutions",
    start: new Date(2022, 3, 20, 19, 30, 0),
    end: new Date(2022, 3, 22, 2, 0, 0),
  },
];

const Calender = (props) => {
const theme = useContext(ThemeContext);
  const [Calender_data, set_CalenderData] = useState([]);
  const getData = () => {
    fetch(" https://www.jasminats.com/gateway/api/v1/sum/versionStatus", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJUeEgwVkhUelFZOGw4V1dIS3V5YXZhN3NHaFFKSWU4SCIsImV4cCI6MTY1MjQ0MTI3NiwiaWF0IjoxNjUyNDM3Njc2fQ.obtxT1dEk467u6N6r9r6Glj_4vLRSDvSqb_7eRaQNoM"}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        project_name: "Audio_Video_Testing",
        project_id: "623ef791506af740d05fe13b",
        version_name: "AV_Version1.0",
        version_id: "623ef7e3506af740d05fe13d",
      }),
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        var event_data = myJson.data.calendar_events;

     Array.prototype.push.apply(event_data,myEventsList);
        console.log(event_data);
        set_CalenderData(event_data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(Calender_data);
  //

  return (
    <div className="App-header" id={theme.theme}    style={{
        minHeight: 670,
        alignItems: "normal",
        justifyContent: "initial",
      }}>
      <Calendar
        localizer={localizer}
        events={Calender_data}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
export default Calender;
