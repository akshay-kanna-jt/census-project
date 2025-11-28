import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", 
    },
    background: {
      default: "#f7f9fc", 
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
