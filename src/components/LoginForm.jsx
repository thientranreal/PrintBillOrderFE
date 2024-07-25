import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import PasswordField from "./PasswordField";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../actions";
import { validateEmail } from "../utils/validators";
import handleEnterKey from "../utils/handleEnterKey";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading: isLoading } = useSelector((state) => state.data);

  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);
  const loginButtonRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const checkErrors = {};
    if (!email) {
      checkErrors.email = "Vui lòng nhập email";
    } else if (!validateEmail(email)) {
      checkErrors.email = "Email không hợp lệ";
    }
    if (!password) {
      checkErrors.password = "Vui lòng nhập mật khẩu";
    }
    if (Object.keys(checkErrors).length === 0) {
      // FETCH API
      dispatch(loginRequest({ email, password }));
    } else {
      setErrors(checkErrors);

      if (checkErrors.email) {
        inputEmailRef.current.focus();
      } else if (checkErrors.password) {
        inputPassRef.current.focus();
      }
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
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            autoFocus
            inputRef={inputEmailRef}
            value={email}
            onKeyDown={(e) => handleEnterKey(e, loginButtonRef)}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors({ ...errors, email: "" });
              }
            }}
          />
          <PasswordField
            id="password"
            label="Mật khẩu"
            error={!!errors.password}
            helperText={errors.password}
            value={password}
            inputRef={inputPassRef}
            onKeyDown={(e) => handleEnterKey(e, loginButtonRef)}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                setErrors({ ...errors, password: "" });
              }
            }}
          />
          <FormControlLabel control={<Checkbox />} label="Nhớ mật khẩu" />
          <LoadingButton
            startIcon={<SendIcon />}
            loadingPosition="start"
            variant="contained"
            ref={loginButtonRef}
            onClick={handleLogin}
            loading={isLoading}
          >
            Đăng nhập
          </LoadingButton>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            Bạn đã chưa có tài khoản?{" "}
            <Link to="/register">
              <Typography
                component="span"
                color="primary"
                sx={{
                  textDecoration: "underline",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Đăng ký
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
