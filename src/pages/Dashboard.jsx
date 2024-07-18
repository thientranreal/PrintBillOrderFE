// src/components/Dashboard.js
import { Box, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <Box>
      <Navbar />
      <Paper
        elevation={3}
        sx={{
          height: "100vh",
          width: "15rem",
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar />
      </Paper>
    </Box>
  );
};

export default Dashboard;
