import React from 'react';
import Plot from 'react-plotly.js';

const Bar = () => {
  return (
    <Plot
    data={[
      {
        type: 'bar',
        x: [],
        y: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
    ]}
    layout={{ width: 750, height: 750, title: 'DevDynamics' }}
  />
  );
};

export default Bar;