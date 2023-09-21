import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ref}) => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30], // Replace with your data values
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <Pie ref={ref} data={data} />
    </div>
  );
};

export default PieChart;
