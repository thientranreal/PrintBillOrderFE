import { Box, Divider, Paper, Typography } from "@mui/material";

const BankAccount = () => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Tài khoản ngân hàng
      </Typography>
      <Divider />
      <Box sx={{ height: 800, width: "100%" }}></Box>
    </Paper>
  );
};

export default BankAccount;
