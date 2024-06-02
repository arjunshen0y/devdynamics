import React from "react";
import "./App.css";
import { getDevDatafromApi, SampleData, Row } from "./Api";
import { useState, useEffect } from "react";
import BarChart, { IBarData } from "./components/Bar.jsx";
import DropDown from "./components/NameDropDown.jsx";

function App() {
  const [devData, setDevData] = useState<SampleData>();
  const [xAxisData, setXAxisData] = useState<IBarData[]>([]);
  const [devName, setDevNames] = useState<Row[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDevDatafromApi();
      setDevData(response.data);
      makeXAxisData(response.data.data.AuthorWorklog.rows);
      getDevNames(response.data.data.AuthorWorklog.rows.name);
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

  const getDevNames = (row: Row[]) => {
    return row.map(row => row.name);
  };

  return (
    <div className="App">
      <BarChart barData={xAxisData} />
      <DropDown name={names}/>
      {/* <DateDropDown /> */}
    </div>
  );
}

export default App;
