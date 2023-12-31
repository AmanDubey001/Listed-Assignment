import dynamic from "next/dynamic";
import { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});


const PieChart = () => {
  const [Data, setData] = useState({
    option: {
      chart: {
        type: "pie",
      },
      labels: ["Basic ", "Custom Short ", "Super "],
      colors: ["#98D89E", "#EE8484", "#F6DC7D"],
      dataLabels: {
        style:{
            
        },
        enabled: false,
       
      },
      stroke: {
        show: true,
        width: 0,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
   
    },
    data: [25, 35, 50],
  });
  return (
    <div id="chart">
      <Chart options={Data.option} series={Data.data} type="pie" width={400} />
    </div>
  );
};

export default PieChart;
