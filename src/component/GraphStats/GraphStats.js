import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import './GraphStats.css';

const graphState = {

    series: [{
        name: 'New Application',
        data: [500, 500, 255, 255, 400, 689, 400, 500, 600, 240, 240, 250 ]
    }, {
        name: 'Project Done',
        data: [700, 700, 355, 355, 880, 350, 600, 500,540, 700, 540, 650 ]
    }],
    options: {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'month',
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },


};


function GraphStats() {

    const [state] = useState(graphState);

    return (


        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
        </div>
    )

}
export default GraphStats
