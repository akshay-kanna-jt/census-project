import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function LineChart() {
  const [vaccinatedData, setVaccinatedData] = useState({});
  const [unvaccinatedData, setUnvaccinatedData] = useState({});

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    const vac = await axios.get(
      "http://localhost:3000/counts?is_vaccinated=true"
    );
    const unvac = await axios.get(
      "http://localhost:3000/counts?is_vaccinated=false"
    );

    setVaccinatedData(vac.data);
    setUnvaccinatedData(unvac.data);
  };

  const labels = [...new Set([...Object.keys(vaccinatedData), ...Object.keys(unvaccinatedData)])].sort(
    (a, b) => a - b
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Vaccinated",
        data: labels.map((age) => vaccinatedData[age] || 0),
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.2)",
      },
      {
        label: "Unvaccinated",
        data: labels.map((age) => unvaccinatedData[age] || 0),
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
      },
    ],
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Vaccination Count by Age</h2>
      <Line data={data} />
    </div>
  );
}

export default LineChart;
