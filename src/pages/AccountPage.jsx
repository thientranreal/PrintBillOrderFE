import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import AccountInfo from "../components/AccountInfo";

const AccountPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            onChange={handleChange}
          >
            <Tab label="Thông tin tài khoản" value="1" />
            <Tab label="Mật khẩu" value="2" />
            <Tab label="Ngân hàng" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AccountInfo />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </>
  );
};

export default AccountPage;
