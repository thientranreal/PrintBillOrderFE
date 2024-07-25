import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validatePhoneNumber } from "../utils/validators";
import { registerRequest } from "../actions";
import { Box, TextField, Typography } from "@mui/material";
import PasswordField from "./PasswordField";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import handleEnterKey from "../utils/handleEnterKey";

const RegisterForm = () => {
  // State
  const [errors, setErrors] = useState({});
  const [shopName, setShopName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  // End State

  const registerBtnRef = useRef(null);
  const inputShopNameRef = useRef(null);
  const inputPhoneRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);
  const inputConfirmedPassRef = useRef(null);

  const dispatch = useDispatch();
  const { loading: isLoading } = useSelector((state) => state.data);

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
    } else if (password.length < 5) {
      checkErrors.password = "Mật khẩu phải tối thiểu 5 ký tự";
    }

    if (password !== confirmedPassword) {
      checkErrors.confirmedPassword = "Mật khẩu không khớp";
    }

    if (Object.keys(checkErrors).length === 0) {
      const info = { shopName, phone, email, password, confirmedPassword };
      dispatch(registerRequest(info));
    } else {
      setErrors(checkErrors);

      if (checkErrors.shopName) {
        inputShopNameRef.current.focus();
      } else if (checkErrors.phone) {
        inputPhoneRef.current.focus();
      } else if (checkErrors.email) {
        inputEmailRef.current.focus();
      } else if (checkErrors.password) {
        inputPassRef.current.focus();
      } else if (checkErrors.confirmedPassword) {
        inputConfirmedPassRef.current.focus();
      }
    }
  };
  return (
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
        error={!!errors.shopName}
        helperText={errors.shopName}
        fullWidth
        autoFocus
        inputRef={inputShopNameRef}
        value={shopName}
        onKeyDown={(e) => handleEnterKey(e, registerBtnRef)}
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
        error={!!errors.phone}
        helperText={errors.phone}
        inputRef={inputPhoneRef}
        fullWidth
        onKeyDown={(e) => handleEnterKey(e, registerBtnRef)}
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
        inputRef={inputEmailRef}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        onKeyDown={(e) => handleEnterKey(e, registerBtnRef)}
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
        error={!!errors.password}
        helperText={errors.password}
        inputRef={inputPassRef}
        value={password}
        onKeyDown={(e) => handleEnterKey(e, registerBtnRef)}
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
        error={!!errors.confirmedPassword}
        helperText={errors.confirmedPassword}
        value={confirmedPassword}
        inputRef={inputConfirmedPassRef}
        onKeyDown={(e) => handleEnterKey(e, registerBtnRef)}
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
        ref={registerBtnRef}
        onClick={handleRegister}
        loading={isLoading}
      >
        Đăng ký
      </LoadingButton>
    </Box>
  );
};

export default RegisterForm;
