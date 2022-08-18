import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function PieChart({ chartData }: any) {
  return <Pie data={chartData} />;
}
