/* eslint-disable react/prop-types */


import { transformDataForChart } from '@/utils/transformData';
import { Line } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const LinearGrafic = ({ country }) => {
    const { dates, casesData, deathsData, recoveredData } = transformDataForChart(country);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',

            }
        }
    }

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Cases',
                data: casesData.map(entry => entry.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
            {
                label: 'Deaths',
                data: deathsData.map(entry => entry.value),
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
            },
            {
                label: 'Recovered',
                data: recoveredData.map(entry => entry.value),
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false,
            },
        ],
    }








    return (
        <Line options={options} data={data} />
    )
}
export default LinearGrafic