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
      backgroundColor: ["#F9EAD3", "#D8A67D", "#8B5E4A", "#AD8D83"],
      borderColor: 'transparent' // Remove the border
    },
  ],
}

const chartOptions = {
  plugins: {
    legend: {
      display: false, // Disable the default legend
    },
  },
}

const GarbageChart = () => {
  return (
    <div className="flex items-center justify-center p-8">
      {/* Chart on the left */}
      <div style={{ width: '200px', height: '200px' }}> {/* Set the desired width and height */}
        <Pie data={chartData} options={chartOptions} />
      </div>

      {/* Labels on the right */}
      <div className="w-1/2 flex flex-col ml-8 space-y-4">
        {chartData.labels.map((label, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
            ></div>
            <span className="ml-4 text-lg font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GarbageChart
