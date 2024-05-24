import React from "react";
import Plot from "react-plotly.js";

export interface IBarData {
  xValue: String;
  yValue: Number;
}

interface IBarProp {
  barData: IBarData[]
}

const Bar = ({barData}: IBarProp) => {
  return (
    <Plot
      data={[
        {
          type: "bar",
          x: barData.map(data => data.xValue),
          y: barData.map(data => data.yValue),
        },
      ]}
      layout={{ width: 750, height: 750, title: "DevDynamics" }}
    />
  );
};

export default Bar;
