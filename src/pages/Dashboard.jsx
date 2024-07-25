// src/components/Dashboard.js
import { Box, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { profileRequest } from "../actions";
import { Routes, Route } from "react-router-dom";
import CreateBillMan from "./CreateBillMan";
import { useEffect, useState } from "react";
import LinearIndeterminate from "../components/Loading";
import AccountPage from "./AccountPage";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.data);
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(profileRequest());
  }, [dispatch]);

  // Update email state whenever data changes
  useEffect(() => {
    if (data.data && data.data.length > 0 && data.data[0].user) {
      setEmail(data.data[0].user.email);
    }
  }, [data]);

  if (loading === true) {
    return <LinearIndeterminate />;
  } else {
    return (
      <Box>
        <Navbar email={email} />
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
