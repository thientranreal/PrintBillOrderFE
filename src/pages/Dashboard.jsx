// src/components/Dashboard.js
import { Box, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { profileRequest } from "../actions";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  // Thay đổi 'profile' nếu cần
  useEffect(() => {
    dispatch(profileRequest());
  }, [dispatch]);
  const profile = useSelector((state) => state.data);
  console.log("profile", profile);

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
