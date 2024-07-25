import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PropTypes from "prop-types";

const BillItem = ({ avatarUrl, nickname, message }) => {
  return (
    <Stack pb={2} direction="row" spacing={3}>
      <Avatar alt="User" src={avatarUrl} sx={{ width: 50, height: 50 }} />
      <Box>
        <Typography variant="subtitle1">{nickname}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: "70%" }}>
          {message}
        </Typography>
        <Stack direction="row" spacing={1} mt={1}>
          <LoadingButton
            loading={false}
            loadingPosition="start"
            startIcon={<InsertDriveFileIcon />}
            variant="contained"
          >
            Tạo đơn
          </LoadingButton>
          <LoadingButton
            loading={false}
            loadingPosition="start"
            startIcon={<InfoIcon />}
            variant="contained"
            color="secondary"
          >
            Thông tin
          </LoadingButton>
        </Stack>
      </Box>
    </Stack>
  );
};

BillItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default BillItem;
