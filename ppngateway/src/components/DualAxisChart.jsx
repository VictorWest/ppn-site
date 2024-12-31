import React from "react";
import ReactApexChart from "react-apexcharts";

const DualAxisChart = () => {
  const chartData = {
    series: [
      {
        name: "Transaction Amount",
        type: "line",
        data: [500, 550, 200, 150, 3800, 700, 1300, 800, 1500, 2600, 462.2, 2300],
      },
      {
        name: "Transaction Count",
        type: "column",
        data: [8, 7, 5, 3, 8, 4, 3, 6, 2, 4, 8, 6],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        background: "transparent",
        toolbar: { show: false },
      },
      stroke: {
        width: [2, 0],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          borderRadius: 0,
        },
      },
      dataLabels: { enabled: false },
      colors: ["#539BFF", "#D187FF"],
      xaxis: {
        categories: [
          "12-2023",
          "01-2024",
          "02-2024",
          "03-2024",
          "04-2024",
          "05-2024",
          "06-2024",
          "07-2024",
          "08-2024",
          "09-2024",
          "10-2024",
          "11-2024",
        ],
      },
      yaxis: [
        {
          title: { text: "Transaction Count" },
          opposite: false,
        },
        {
          title: { text: "Transaction Amount" },
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
        y: {
          formatter: (val) => `$${val}`,
        },
      },
      legend: { show: true, position: "bottom" },
    },
  };

  return (
    <div className=" bg-gray-900 w-fit border-4 border-gray-500 rounded-xl shadow-lg shadow-stone-950 mt-5 text-white">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
        width={700}
      />
    </div>
  );
};

export default DualAxisChart;
