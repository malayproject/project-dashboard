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
        data: [65, 60, 45, 55, 72, 84, 102, 132, 112, 120],
        borderColor: "#ed2939",
        backgroundColor: "rgba(255, 100, 132, 0.9)",
        // pointBackgroundColor: "#fd2323",
        // pointBorderWidth: "1rem",
        // pointStyle: "circle",
        borderWidth: "1",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      scales: {
        y: {
          // title: "Hours Spent",
          ticks: {
            // grace: 10,
            suggestedMin: 0,
            // major: { enabled: true },
          },
          // type: "linear",
          // scaleLabel: {
          //   display: true,
          //   labelString: "Hours Spent",
          //   fontColor: "#475752",
          // },
        },
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
