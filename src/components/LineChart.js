import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const data = {
    labels,
    datasets: [
      {
        label: "Attendance",
        data: [45, 40, 25, 55, 72, 84, 102, 132, 112, 120],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              grace: 10,
            },
            type: "linear",
            scaleLabel: {
              display: true,
              labelString: "number of cars",
              fontColor: "#475752",
            },
          },
        ],
      },
      legend: {
        position: "top",
      },
      //   title: {
      //     display: false,
      //     text: "Chart.js Line Chart",
      //   },
    },
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
