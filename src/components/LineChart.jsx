import dynamic from "next/dynamic";
import React, { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LineChart = () => {
  const [Data, setData] = useState({
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
      xaxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        labels: {
          style: {
            colors: "#858585",
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#858585",
            fontSize: "14px",
          },
        },
      },
      grid: {
        strokeDashArray: 5,
      },
      colors: ["#E9A0A0", "#9BDD7C"],
    },
    data: [
      {
        name: "Guest",
        data: [2, 4, 2, 10],
      },
      {
        name: "User",
        data: [1, 3, 5, 7],
      },
    ],
  });

  return (
    <Chart
      options={Data.options}
      series={Data.data}
      type="line"
      width="100%"
      height="100%"
    />
  );
};

export default LineChart;
