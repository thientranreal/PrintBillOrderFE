import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/6325254.jpg";

const BackgroundContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  color: "#fff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: "10px 20px",
  color: "#fff",
  backgroundColor: "rgba(0, 123, 255, 0.7)",
  textDecoration: "none",
  borderRadius: "5px",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "rgba(0, 123, 255, 1)",
  },
}));

function NotFound() {
  return (
    <BackgroundContainer>
      <Typography variant="h1" sx={{ fontSize: 48, margin: "20px 0" }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 18, marginBottom: "30px" }}>
        Oops! The page you are looking for does not exist.
      </Typography>
      <StyledButton component={Link} to="/login">
        Go back to the homepage
      </StyledButton>
    </BackgroundContainer>
  );
}

export default NotFound;
