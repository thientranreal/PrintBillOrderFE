import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import PasswordField from "./PasswordField";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      setError({
        type: "email",
        info: "Vui lòng nhập email",
      });
    } else if (!password) {
      setError({
        type: "password",
        info: "Vui lòng nhập mật khẩu",
      });
    }

    if (!error) {
      // FETCH API

    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mb: 5,
        }}
      >
        <Box sx={{ height: "6rem", mb: 2 }}>
          <img
            src="https://via.placeholder.com/500"
            alt="Login"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Box>
        <Typography
          variant="h4"
          color="primary"
          sx={{ fontWeight: 500, mb: 3 }}
        >
          Đăng nhập tài khoản
        </Typography>
        <Typography variant="h5" sx={{ fontSize: "1.25rem" }}>
          Chào mừng bạn quay lại XXXX
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: 3,
          }}
        >
          <TextField
            id="email"
            label="Email"
            variant="standard"
            error={error && error.type === "email"}
            helperText={error && error.type === "email" ? error.info : ""}
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error && error.type === "email") {
                setError(null);
              }
            }}
          />
          <PasswordField
            id="password"
            label="Mật khẩu"
            error={error && error.type === "password"}
            helperText={error && error.type === "password" ? error.info : ""}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error && error.type === "password") {
                setError(null);
              }
            }}
          />
          <FormControlLabel control={<Checkbox />} label="Nhớ mật khẩu" />
          <Button fullWidth variant="contained" onClick={handleLogin}>
            Đăng nhập
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
