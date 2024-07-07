'use client';

import { Bar, Line } from 'react-chartjs-2';

import { ChartDatasetProperties, ScriptableContext } from 'chart.js';
import _ from 'lodash';

const graphConfig = {
    hoverBackgroundColor: 'rgba(256, 256, 256, 0.8)',
    borderColor: 'rgba(256, 256, 256, 0.7)',
    borderWidth: 2,
    tension: 0.3,
    fill: true,
    backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 220);
        gradient.addColorStop(0, 'rgba(256, 256, 256, 0.3)');
        gradient.addColorStop(1, 'rgba(256, 256, 256, 0)');
        return gradient;
    },
};

interface Props {
    labels: string[];
    values: number[];
    label: string;
}

const BarChart = ({ labels, values, label }: Props) => {
    return (
        <div className="w-full overflow-x-auto">
            <div className="h-56 w-full min-w-[40rem]">
                <Line
                    options={{
                        maintainAspectRatio: false,
                        // interaction: {
                        //     mode: 'index',
                        //     intersect: false,
                        // },
                        scales: {
                            y: {
                                min: (_.min(values) || 0) - 3,
                                display: false,
                            },
                        },
                        plugins: {
                            datalabels: {
                                anchor: 'end',
                                align: 'top',
                                formatter: Math.round,
                                backgroundColor: '#444',
                                borderRadius: 4,
                                color: 'white',
                                font: {
                                    weight: 'normal',
                                },
                            },
                        },
                    }}
                    data={{
                        labels,
                        datasets: [
                            {
                                data: values,
                                label,
                                pointRadius: 1,
                                ...graphConfig,
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
};

export default BarChart;
