import React from "react";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Layout";
import "./App.css";
import { useContext } from "react";

const Table = () => {
  const theme = useContext(ThemeContext);

  const [table_data, set_TableData] = useState([]);

  const getData = () => {
    fetch(
      "https://www.jasminats.com/gateway/api/v1/er/get-all-run-results?project_id=623ef791506af740d05fe13b&version_id=623ef7e3506af740d05fe13d",
      {
        headers: {
          Accept: "application/json",

          "Content-Type": "application/json",

          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJUeEgwVkhUelFZOGw4V1dIS3V5YXZhN3NHaFFKSWU4SCIsImV4cCI6MTY1MjQ0MTI3NiwiaWF0IjoxNjUyNDM3Njc2fQ.obtxT1dEk467u6N6r9r6Glj_4vLRSDvSqb_7eRaQNoM"}`,

          "Access-Control-Allow-Origin": "*",

          "Access-Control-Allow-Credentials": true,
        },
      }
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
      console(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  };

// };
export default Table;
