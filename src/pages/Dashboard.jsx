// src/components/Dashboard.js
import { Box, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CreateBillMan from "./CreateBillMan";
import LinearIndeterminate from "../components/Loading";
import AccountPage from "./AccountPage";
import { useEffect } from "react";
import { profileRequest } from "../actions";

const Dashboard = () => {
  const { loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileRequest());
  }, [dispatch]);

  if (loading === true) {
    return <LinearIndeterminate />;
  } else {
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

          <Box
            flexGrow={1}
            p={5}
            sx={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <Routes>
              <Route path="/manualBill" element={<CreateBillMan />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Dashboard;
