import React, { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import PracticePieChart from "./components/PracticePieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        // backgroundColor: ["red", "blue"],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <h1>BarChart LineChart Pie Chart</h1>
      <div className="bar" style={{ width: 400 }}>
        <BarChart chartData={userData} />
      </div>
      <div className="line" style={{ width: 400 }}>
        <LineChart chartData={userData} />
      </div>
      <div className="pie" style={{ width: 300 }}>
        <PieChart chartData={userData} />
      </div>
      <div>
        <PracticePieChart />
      </div>
    </div>
  );
}

export default App;
