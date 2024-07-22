// src/components/Dashboard.js
import { Box, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { profileRequest } from "../actions";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CreateBillMan from "./CreateBillMan";

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

      <Box display="flex">
        {/* Side bar */}
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
        {/* End side bar */}

        <Routes>
          <Route path="/manualBill" element={<CreateBillMan />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
