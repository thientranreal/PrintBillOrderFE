import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Collapse,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Sidebar = () => {
  const [openReport, setOpenReport] = useState(false);
  const [openTransport, setOpenTransport] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  return (
    <Paper
      elevation={4}
      sx={{
        height: "100vh",
        width: "15rem",
        display: { xs: "none", md: "block" },
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <KeyboardDoubleArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Tạo đơn hàng" />
        </ListItemButton>

        <ListItemButton onClick={() => setOpenReport(!openReport)}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Báo cáo" />
          {openReport ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openReport} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Tổng quan" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => setOpenTransport(!openTransport)}>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary="Vận chuyển" />
          {openTransport ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openTransport} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Quản lý đơn hàng" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Upload đơn hàng" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Đối soát" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => setOpenSetting(!openSetting)}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Cấu hình" />
          {openSetting ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSetting} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Tài khoản" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Kho hàng" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Đăng xuất" />
        </ListItemButton>
      </List>
    </Paper>
  );
};

export default Sidebar;
