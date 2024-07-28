// src/CO2EmissionsChart.jsx
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { Chart as ApexChart } from 'react-apexcharts'; // Import ApexCharts from react-apexcharts

const CO2 = () => {
  useEffect(() => {
    // Chart configuration
    const chartConfig = {
      series: [
        {
          name: "CO2 Emissions (ppm)",
          data: [410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421],
        },
      ],
      chart: {
        type: "bar",
        height: 240,
        width: 1000,
        toolbar: {
          show: false,
        },
      },
      title: {
        text: '', // Empty string for no title
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#026e24"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#035b23",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#04501c",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#11c134",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    };

    // Create and render the chart
    const chart = new ApexCharts(document.querySelector("#co2-chart"), chartConfig);
    chart.render();

    // Cleanup function to remove the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="z-0 relative flex flex-col rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 bg-clip-border text-gray-700 shadow-2xl m-5">
      <div className="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
        <div>
          <h6 className="block text-green-800 font-sans text-2xl font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
            CO2 Emissions for Year 2023
          </h6>
        </div>
      </div>
      <div className="z-10 pt-6 px-2 pb-0">
        <div id="co2-chart"></div>
      </div>
    </div>
  );
};

export default CO2;
