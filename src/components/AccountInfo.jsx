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
import { useRef, useState } from "react";
import handleEnterKey from "../utils/handleEnterKey";
import { LoadingButton } from "@mui/lab";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const AccountInfo = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const saveBtnRef = useRef(null);

  const handleSaveBtn = () => {
    console.log("Hello");
  };

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
            id="username"
            label="Tên người dùng"
            variant="standard"
            fullWidth
            autoFocus
            value={username}
            onKeyDown={(e) => handleEnterKey(e, saveBtnRef)}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            required
            value={email}
            onKeyDown={(e) => handleEnterKey(e, saveBtnRef)}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="phone"
            label="Số điện thoại"
            variant="standard"
            fullWidth
            required
            value={phone}
            onKeyDown={(e) => handleEnterKey(e, saveBtnRef)}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Stack>
        <Divider sx={{ mt: 5, mb: 2 }} />
        <Stack spacing={2} direction="row" justifyContent="flex-end">
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Xóa
          </Button>
          <LoadingButton
            loading={false}
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
