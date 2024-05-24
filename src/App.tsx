import React from "react";
import "./App.css";
import { getDevDatafromApi, SampleData, Row } from "./Api";
import { useState, useEffect } from "react";
import BarChart, { IBarData } from "./components/Bar.jsx";
import DropDown from "./components/DropDown.jsx";

function App() {
  const [devData, setDevData] = useState<SampleData>();
  const [xAxisData, setXAxisData] = useState<IBarData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDevDatafromApi();
      setDevData(response.data);
      makeXAxisData(response.data.data.AuthorWorklog.rows);
    };
    fetchData();
  }, []);

  const makeXAxisData = (row: Row[]) => {
    let xAxisList: IBarData[] = []

    row[0].totalActivity.forEach((meta) => {
      
      let barData: IBarData = {
        xValue : meta.name,
        yValue : meta.value
      }

      xAxisList.push(
        barData
      )
    })

    setXAxisData(xAxisList)
  }

  return (
    <div className="App">
      <BarChart barData={xAxisData} />
      <DropDown />
    </div>
  );
}

export default App;
