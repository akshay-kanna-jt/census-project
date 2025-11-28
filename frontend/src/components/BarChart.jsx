import { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
  const [results, setResults] = useState({});

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const res = await axios.get("http://localhost:3000/results");
      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ages = Object.keys(results).sort((a, b) => a - b);

  const data = {
    labels: ages,
    datasets: [
      {
        label: "Male",
        backgroundColor: "blue",
        data: ages.map((age) => results[age]?.male || 0),
      },
      {
        label: "Female",
        backgroundColor: "pink",
        data: ages.map((age) => results[age]?.female || 0),
      },
      {
        label: "Other",
        backgroundColor: "gray",
        data: ages.map((age) => results[age]?.other || 0),
      },
    ],
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Gender Distribution by Age</h2>
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
