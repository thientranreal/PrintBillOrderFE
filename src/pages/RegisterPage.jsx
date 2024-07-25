import { Box } from "@mui/material";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
