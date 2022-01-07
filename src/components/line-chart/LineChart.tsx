import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { GetESFRegistrationByMonthFace } from '../../interfaces/dataCardInterface';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type Props = {
    url: string;
}

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'L P',
        },
    },
};

const LineChart = ({url}: Props) => {

    const [lineChart, setLineChart] = useState<GetESFRegistrationByMonthFace>();

    useEffect(() => {
        async function lineChartEsf() {
          const res = await axios.get(url);
          setLineChart(res.data);
        }

        lineChartEsf() ;
      }, []);



    const labels: String[] = []
    lineChart?.map(o => labels.includes(o.date) ? null :  labels.push(o.date.slice(0,7)))
    const data = {
        labels: labels,
        datasets: [
            {

                label: 'Количество новых зарегистрированных НП',
                data: lineChart?.map((obj) => obj.count),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
      <div>
        <Line options={options} data={data} />
      </div>
    );
};




export default LineChart;