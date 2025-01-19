import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import data from '../../data.json'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData = {
  labels: ['Recycle', 'Compost', 'Garbage', 'Glass'],
  datasets: [
    {
      label: "Bins",
      data: [data.CharlieDavis[0].Recycle, data.CharlieDavis[0].Compost, data.CharlieDavis[0].Garbage, data.CharlieDavis[0].Glass],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ]
    },
  ],
}

const GarbageChart = () => {
  return (
    <div>
      <Pie data={chartData} />
    </div>
  )
}

export default GarbageChart
