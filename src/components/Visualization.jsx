import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function Visualization() {
  const data = {
    labels: ["Compliance Score", "Missing"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#4CAF50", "#FF5722"]
      }
    ]
  };

  return <Pie data={data} />;
}
