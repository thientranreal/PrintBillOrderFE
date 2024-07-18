import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import Drawer from "@mui/material/Drawer";
import SidebarMobile from "./SidebarMobile";
import { useState } from "react";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenSidebar(newOpen);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: { md: "space-between" } }}
        >
          <Box
            display={{ xs: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Sidebar */}
            <Drawer open={openSidebar} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: "17rem" }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <SidebarMobile />
              </Box>
            </Drawer>
            {/* End Sidebar */}
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Avatar" src="Avatar" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
