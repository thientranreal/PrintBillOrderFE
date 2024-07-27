import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import handleEnterKey from "../utils/handleEnterKey";
import { LoadingButton } from "@mui/lab";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validatePhoneNumber } from "../utils/validators";
import { updateProfileRequest } from "../actions";

const AccountInfo = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.profile);
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tiktokUsername, setTiktokUsername] = useState("");
  const [errors, setErrors] = useState({});

  const inputTUNRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPhoneRef = useRef(null);
  const inputShopNameRef = useRef(null);

  const saveBtnRef = useRef(null);

  const handleSaveBtn = () => {
    const checkErrors = {};

    if (!tiktokUsername) {
      checkErrors.tiktokUsername = "Vui lòng nhập tiktok username";
    }
    if (!shopName) {
      checkErrors.shopName = "Vui lòng nhập tên shop";
    }
    if (!email) {
      checkErrors.email = "Vui lòng nhập email";
    } else if (!validateEmail(email)) {
      checkErrors.email = "Email không hợp lệ";
    }
    if (!validatePhoneNumber(phone)) {
      checkErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (Object.keys(checkErrors).length === 0) {
      // FETCH API
      const info = { tiktokUsername, email, phone, shopName };
      dispatch(updateProfileRequest(info));
    } else {
      setErrors(checkErrors);

      if (checkErrors.tiktokUsername) {
        inputTUNRef.current.focus();
      } else if (checkErrors.shopName) {
        inputShopNameRef.current.focus();
      } else if (checkErrors.email) {
        inputEmailRef.current.focus();
      } else if (checkErrors.password) {
        inputPhoneRef.current.focus();
      }
    }
  };

  useEffect(() => {
    if (data.data && data.data.length > 0 && data.data[0].user) {
      setEmail(data.data[0].user.email || "");
      setPhone(data.data[0].user.phone || "");
      setTiktokUsername(data.data[0].user.tiktokUsername || "");
      setShopName(data.data[0].user.shopName || "");
    }
  }, [data]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Chỉnh sửa tài khoản
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack spacing={3}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <TextField
            id="tiktokUsername"
            label="Tiktok username"
            variant="standard"
            error={!!errors.tiktokUsername}
            helperText={errors.tiktokUsername}
            fullWidth
            autoFocus
            inputRef={inputTUNRef}
            value={tiktokUsername}
            onKeyDown={(e) => handleEnterKey(e, saveBtnRef)}
            onChange={(e) => {
              setTiktokUsername(e.target.value);
              if (errors.tiktokUsername) {
                setErrors({ ...errors, tiktokUsername: "" });
              }
            }}
          />
          <TextField
            id="shopName"
            label="Tên shop"
            variant="standard"
            fullWidth
            error={!!errors.shopName}
            helperText={errors.shopName}
            inputRef={inputShopNameRef}
            value={shopName}
            onKeyDown={(e) => handleEnterKey(e, saveBtnRef)}
            onChange={(e) => {
              setShopName(e.target.value);
              if (errors.shopName) {
                setErrors({ ...errors, shopName: "" });
              }
            }}
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            inputRef={inputEmailRef}
            error={!!errors.email}
            helperText={errors.email}
            value={email}
            onKeyDown={(e) => handleEnterKey(e, saveBtnRef)}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors({ ...errors, email: "" });
              }
            }}
          />
          <TextField
            id="phone"
            label="Số điện thoại"
            variant="standard"
            fullWidth
            inputRef={inputPhoneRef}
            error={!!errors.phone}
            helperText={errors.phone}
            value={phone}
            onKeyDown={(e) => handleEnterKey(e, saveBtnRef)}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone) {
                setErrors({ ...errors, phone: "" });
              }
            }}
          />
        </Stack>
        <Divider sx={{ mt: 5, mb: 2 }} />
        <Stack spacing={2} direction="row" justifyContent="flex-end">
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Xóa
          </Button>
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            ref={saveBtnRef}
            onClick={handleSaveBtn}
          >
            Lưu lại
          </LoadingButton>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AccountInfo;
