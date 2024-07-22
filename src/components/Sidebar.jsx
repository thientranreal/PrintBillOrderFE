import {
  List,
  ListItemIcon,
  ListItemText,
  Divider,
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
import { logoutRequest } from "../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ListItemButtonStyled,
  NestedListItemButtonStyled,
} from "./StyledComponents";

const Sidebar = () => {
  const navigate = useNavigate();
  const [openReport, setOpenReport] = useState(false);
  const [openTransport, setOpenTransport] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [openCreateBill, setOpenCreateBill] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [activeSubTab, setActiveSubTab] = useState(null);
  const dispatch = useDispatch();

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      return;
    } else {
      setActiveTab(tab);
    }
  };

  const handleSubTabClick = (subTab) => {
    if (activeSubTab === subTab) {
      return;
    } else {
      setActiveSubTab(subTab);
      navigate(`/dashboard/${subTab}`);
    }
  };

  return (
    <List onClick={(e) => e.stopPropagation()}>
      <Divider sx={{ mt: "5rem", display: { xs: "block", md: "none" } }} />

      <ListItemButtonStyled
        active={(activeTab === "createBill").toString()}
        onClick={() => {
          setOpenCreateBill(!openCreateBill);
          handleTabClick("createBill");
        }}
      >
        <ListItemIcon>
          <KeyboardDoubleArrowRightIcon
            color={activeTab === "createBill" ? "primary" : ""}
          />
        </ListItemIcon>
        <ListItemText primary="Tạo đơn hàng" />
        {openCreateBill ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonStyled>
      <Collapse in={openCreateBill} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NestedListItemButtonStyled
            active={(activeSubTab === "autoBill").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("autoBill");
            }}
          >
            <ListItemText primary="Tạo đơn tự động" />
          </NestedListItemButtonStyled>
          <NestedListItemButtonStyled
            active={(activeSubTab === "manualBill").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("manualBill");
            }}
          >
            <ListItemText primary="Tạo đơn thủ công" />
          </NestedListItemButtonStyled>
        </List>
      </Collapse>

      <ListItemButtonStyled
        active={(activeTab === "report").toString()}
        onClick={() => {
          setOpenReport(!openReport);
          handleTabClick("report");
        }}
      >
        <ListItemIcon>
          <AssessmentIcon color={activeTab === "report" ? "primary" : ""} />
        </ListItemIcon>
        <ListItemText primary="Báo cáo" />
        {openReport ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonStyled>
      <Collapse in={openReport} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NestedListItemButtonStyled
            active={(activeSubTab === "overall").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("overall");
            }}
          >
            <ListItemText primary="Tổng quan" />
          </NestedListItemButtonStyled>
        </List>
      </Collapse>

      <ListItemButtonStyled
        active={(activeTab === "transport").toString()}
        onClick={() => {
          setOpenTransport(!openTransport);
          handleTabClick("transport");
        }}
      >
        <ListItemIcon>
          <LocalShippingIcon
            color={activeTab === "transport" ? "primary" : ""}
          />
        </ListItemIcon>
        <ListItemText primary="Vận chuyển" />
        {openTransport ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonStyled>
      <Collapse in={openTransport} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NestedListItemButtonStyled
            active={(activeSubTab === "transport").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("transport");
            }}
          >
            <ListItemText primary="Quản lý đơn hàng" />
          </NestedListItemButtonStyled>

          <NestedListItemButtonStyled
            active={(activeSubTab === "billUpload").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("billUpload");
            }}
          >
            <ListItemText primary="Upload đơn hàng" />
          </NestedListItemButtonStyled>

          <NestedListItemButtonStyled
            active={(activeSubTab === "forControl").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("forControl");
            }}
          >
            <ListItemText primary="Đối soát" />
          </NestedListItemButtonStyled>
        </List>
      </Collapse>

      <ListItemButtonStyled
        active={(activeTab === "settings").toString()}
        onClick={() => {
          setOpenSetting(!openSetting);
          handleTabClick("settings");
        }}
      >
        <ListItemIcon>
          <SettingsIcon color={activeTab === "settings" ? "primary" : ""} />
        </ListItemIcon>
        <ListItemText primary="Cấu hình" />
        {openSetting ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonStyled>
      <Collapse in={openSetting} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NestedListItemButtonStyled
            active={(activeSubTab === "account").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("account");
            }}
          >
            <ListItemText primary="Tài khoản" />
          </NestedListItemButtonStyled>

          <NestedListItemButtonStyled
            active={(activeSubTab === "storage").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("storage");
            }}
          >
            <ListItemText primary="Kho hàng" />
          </NestedListItemButtonStyled>
        </List>
      </Collapse>

      <ListItemButtonStyled
        active={(activeTab === "logout").toString()}
        onClick={(e) => {
          handleTabClick("logout");
          dispatch(logoutRequest(e));
        }}
      >
        <ListItemIcon>
          <LogoutIcon color={activeTab === "logout" ? "primary" : ""} />
        </ListItemIcon>
        <ListItemText primary="Đăng xuất" />
      </ListItemButtonStyled>
    </List>
  );
};

export default Sidebar;
