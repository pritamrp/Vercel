import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillsChart = () => {
  const data = {
    labels: ['Python', 'SQL', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'Big Data'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 80, 85, 75, 88, 70],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Skills Proficiency',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SkillsChart;
