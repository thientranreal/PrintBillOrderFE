import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ flex: { md: 1 }, bgcolor: "lightBlue" }}></Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
