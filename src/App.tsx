import React from "react";
import logo from "./logo.svg";
import "./App.css";
import dataJson from "./sample-data.json";
import { getDevDatafromApi, SampleData } from "./Api";
import { useState, useEffect } from "react";
import BarChart from './components/Bar.jsx';
import {CategoryScale} from 'chart.js'; 


function App() {
  const [devData, setDevData] = useState<SampleData>();
  //Create Usestates, in a ts way.

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getDevDatafromApi();
      setDevData(response.data);
    };
    fetchData();
  }, []);

  

  useEffect(() => {
    
  }, [devData]);

  console.log(devData);

  
    
  // devData.data.AuthorWorklog.rows.forEach(function (row) {
  //   // if (!filteredDevData.properties.name) {
  //   //   filteredDevData.properties.name = [];
  //   // }
  //   const filteredNameFromMail = row.name.match(/([A-Za-z]+)(?=\d*@)/)[0];
  //   const developers = [];
  //   developers.push(filteredNameFromMail);
  //   // filteredDevData.properties.name.push(filteredNameFromMail);
  // });

  
    return (
      <div className="App">
        {/* <div className="Dates">
          <select>
            {dates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <div className="Developers">
          <select>
            {developers.map((developer, index) => (
              <option key={index} value={developer}>
                {developer}
              </option>
            ))}
          </select>
        </div> */
        <BarChart />
        
        }
      </div>
    );
  };

export default App;
