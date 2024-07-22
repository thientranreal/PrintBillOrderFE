import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
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

const ListItemButtonStyled = styled(ListItemButton)`
  ${({ active, theme }) =>
    active === "true" &&
    css`
      border: 1.3px solid ${theme.palette.primary.main};
      border-radius: 5px;
      color: ${theme.palette.primary.main};
      margin: 0 5px;
    `}
`;

const NestedListItemButtonStyled = styled(ListItemButton)`
  padding-left: ${({ theme }) => theme.spacing(4)};
  ${({ active, theme }) =>
    active === "true" &&
    css`
      color: ${theme.palette.primary.main};
    `}
`;

const Sidebar = () => {
  const theme = useTheme();
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
    }
  };

  return (
    <List onClick={(e) => e.stopPropagation()}>
      <Divider sx={{ mt: "5rem", display: { xs: "block", md: "none" } }} />

      <ListItemButtonStyled
        theme={theme}
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
            theme={theme}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("autoBill");
            }}
          >
            <ListItemText primary="Tạo đơn tự động" />
          </NestedListItemButtonStyled>
          <NestedListItemButtonStyled
            active={(activeSubTab === "manualBill").toString()}
            theme={theme}
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
        theme={theme}
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
            theme={theme}
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
        theme={theme}
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
            theme={theme}
            active={(activeSubTab === "transport").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("transport");
            }}
          >
            <ListItemText primary="Quản lý đơn hàng" />
          </NestedListItemButtonStyled>

          <NestedListItemButtonStyled
            theme={theme}
            active={(activeSubTab === "billUpload").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("billUpload");
            }}
          >
            <ListItemText primary="Upload đơn hàng" />
          </NestedListItemButtonStyled>

          <NestedListItemButtonStyled
            theme={theme}
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
        theme={theme}
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
            theme={theme}
            active={(activeSubTab === "account").toString()}
            onClick={(e) => {
              e.stopPropagation();
              handleSubTabClick("account");
            }}
          >
            <ListItemText primary="Tài khoản" />
          </NestedListItemButtonStyled>

          <NestedListItemButtonStyled
            theme={theme}
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
        theme={theme}
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
