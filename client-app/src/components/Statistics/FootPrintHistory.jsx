import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

const FootPrintHistory = (props) => {
    const { graphData } = props;

    const [chartData, setChartData] = useState({
        series: [],
        categories: [],
    });

    useEffect(() => {
        if (graphData && graphData.length > 0) {
            const array = graphData.map(item => item.estimatedCarbonFootprint);
            const timeArray = graphData.map(item => new Date(item.updatedAt).toLocaleDateString()); // Convert to a readable date format

            setChartData({
                series: [
                    {
                        name: "Carbon Footprint (metric Tons CO2)",
                        data: array,
                    },
                ],
                categories: timeArray,
            });
        }
    }, [graphData]);

    return (
        <div className="z-0 sm:w-[60%] relative flex flex-col rounded-xl bg-purple-200 bg-clip-border text-gray-700 shadow-2xl m-2">
            <div className="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
                <div>
                    <h6 className="block font-sans text-2xl font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                        Your previous record
                    </h6>
                </div>
            </div>
            <div className="z-10 pt-2 px-2 pb-0">
                <Chart
                    options={{
                        chart: {
                            type: "line", // Change to "line" for line chart
                            height: 120,
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
                        colors: ["#9333ea"],
                        plotOptions: {
                            line: {
                                curve: 'smooth', // Optional: to smoothen the line
                            },
                        },
                        stroke: {
                            width: 3,
                            curve: 'smooth',
                            dashArray: [4, 4], // Make the line dotted
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
                                    colors: "#616161",
                                    fontSize: "12px",
                                    fontFamily: "inherit",
                                    fontWeight: 400,
                                },
                            },
                            categories: chartData.categories,
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    colors: "#616161",
                                    fontSize: "12px",
                                    fontFamily: "inherit",
                                    fontWeight: 400,
                                },
                            },
                        },
                        grid: {
                            show: true,
                            borderColor: "#7900eb",
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
                    }}
                    series={chartData.series}
                />
            </div>
        </div>
    );
};

export default FootPrintHistory;
