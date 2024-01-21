import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

const LineChart = () => {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const data = {
    labels,
    datasets: [
      {
        data: [65, 70, 75, 65, 78, 84, 96, 112, 108, 111],
        borderColor: "#ed2939",
        backgroundColor: "rgba(255, 100, 132, 0.9)",
        borderWidth: "1",
        radius: 3,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        type: "linear",
        display: true,
        title: {
          display: true,
          text: "Hours Spent",
          font: { size: 10, color: "#cccccc" },
        },
        position: "left",
        grace: "60%",
        ticks: {
          stepSize: 25,
          color: "#aaa",
          font: {
            size: 8,
          },
        },
        border: {
          width: 2,
        },
        grid: {
          tickLength: 3,
        },
      },
      x: {
        display: true,
        title: {
          display: true,
          text: "Weeks",
          font: { size: 10, color: "#aaaaaa" },
        },
        ticks: {
          color: "#aaa",
          font: {
            size: 8,
          },
        },
        border: {
          width: 2,
        },
        grid: {
          tickLength: 3,
        },
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
