import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PasswordField from "../components/PasswordField";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import { validatePhoneNumber, validateEmail } from "../utils/validators";
import { registerRequest } from "../actions";

const RegisterPage = () => {
  // State
  const [errors, setErrors] = useState({});
  const [shopName, setShopName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  // End State

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.data.loading);

  const handleRegister = (e) => {
    e.preventDefault();

    const checkErrors = {};
    if (!shopName) {
      checkErrors.shopName = "Vui lòng nhập tên shop";
    }

    if (!validatePhoneNumber(phone)) {
      checkErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!validateEmail(email)) {
      checkErrors.email = "Email không hợp lệ";
    }

    if (!password) {
      checkErrors.password = "Vui lòng nhập mật khẩu";
    }

    if (password !== confirmedPassword) {
      checkErrors.confirmedPassword = "Mật khẩu không khớp";
    }

    if (Object.keys(checkErrors).length === 0) {
      const info = { shopName, phone, email, password, confirmedPassword };
      dispatch(registerRequest(info));
    } else {
      setErrors(checkErrors);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box display="flex" flexDirection="column" width="30rem" rowGap={2}>
        <Typography
          variant="h4"
          color="primary"
          textAlign="center"
          sx={{ fontWeight: 500, mb: 3 }}
        >
          Đăng ký thành viên
        </Typography>

        {/* Shop name input */}
        <TextField
          id="shop-name"
          label="Tên shop"
          variant="standard"
          error={errors.shopName}
          helperText={errors.shopName}
          fullWidth
          value={shopName}
          onChange={(e) => {
            setShopName(e.target.value);
            if (errors.shopName) {
              setErrors({ ...errors, shopName: "" });
            }
          }}
        />
        {/* End shop name input */}

        {/* Phone input */}
        <TextField
          id="phone"
          label="Số điện thoại"
          variant="standard"
          error={errors.phone}
          helperText={errors.phone}
          fullWidth
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (errors.phone) {
              setErrors({ ...errors, phone: "" });
            }
          }}
        />
        {/* End Phone input */}

        {/* Email input */}
        <TextField
          id="email"
          label="Email"
          variant="standard"
          error={errors.email}
          helperText={errors.email}
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              setErrors({ ...errors, email: "" });
            }
          }}
        />
        {/* End Email input */}

        {/* Pass input */}
        <PasswordField
          id="password"
          label="Mật khẩu"
          error={errors.password}
          helperText={errors.password}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) {
              setErrors({ ...errors, password: "" });
            }
          }}
        />
        {/* End Pass input */}

        {/* Confirmed Pass input */}
        <PasswordField
          id="confirmed-password"
          label="Nhập lại mật khẩu"
          error={errors.confirmedPassword}
          helperText={errors.confirmedPassword}
          value={confirmedPassword}
          onChange={(e) => {
            setConfirmedPassword(e.target.value);
            if (errors.confirmedPassword) {
              setErrors({
                ...errors,
                confirmedPassword: "",
              });
            }
          }}
        />
        {/* End Confirmed Pass input */}
        <LoadingButton
          sx={{ mt: 2 }}
          startIcon={<SendIcon />}
          loadingPosition="start"
          variant="contained"
          onClick={handleRegister}
          loading={isLoading}
        >
          Đăng ký
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default RegisterPage;
