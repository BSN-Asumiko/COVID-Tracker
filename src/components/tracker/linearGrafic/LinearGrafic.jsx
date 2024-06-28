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
import WidgetHead from '../widgetHead/WidgetHead';

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
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                },
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        layout: {
            padding: '10px'
        }
    }

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Cases',
                data: casesData.map(entry => entry.value),
                borderColor: ' rgb(53, 56, 174)',
                backgroundColor: ' rgb(53, 56, 174)',
                fill: true,

            },
            {
                label: 'Deaths',
                data: deathsData.map(entry => entry.value),
                borderColor: 'rgb(255, 0, 0)',
                backgroundColor: 'rgb(255, 0, 0)',
                fill: true,
            },
            {
                label: 'Recovered',
                data: recoveredData.map(entry => entry.value),
                borderColor: 'rgb(127, 195, 22)',
                backgroundColor: 'rgb(127, 195, 22)',
                fill: true,
            },
        ],
    }




    return (
        <li className="bg-[color:var(--col-body)]">
            <WidgetHead text={country.country}/>
            <div className="relative p-5 w-[80vw]  h-[40vh] ml:w-[30vw]">
            <Line options={options} data={data} />
            </div>

        </li>
    )
}
export default LinearGrafic