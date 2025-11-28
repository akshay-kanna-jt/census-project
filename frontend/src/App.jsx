import CensusForm from "./components/CensusForm.jsx";
import CensusTable from "./components/CensusTable.jsx";
import LineChart from "./components/LineChart.jsx";
import BarChart from "./components/BarChart.jsx";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Paper,
  Button,
} from "@mui/material";

function App() {
  return (
    <>
      {/* Top Navbar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Census Dashboard
          </Typography>
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            Help
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        {/* Heading */}
        <Typography variant="h5">Welcome to the Census System</Typography>
        <Typography sx={{ mt: 1, color: "text.secondary" }}>
          Manage census entries and view trends in real-time.
        </Typography>

        {/* Form Button */}
        <Box sx={{ mt: 3 }}>
          <CensusForm />
        </Box>

        {/* Table */}
        <Box sx={{ mt: 4 }}>
          <Paper>
            <CensusTable />
          </Paper>
        </Box>

        {/* Line Chart */}
        <Box sx={{ mt: 4 }}>
          <Paper>
            <LineChart />
          </Paper>
        </Box>

        {/* Bar Chart */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Paper>
            <BarChart />
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
