import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./StyledComponents";
import { useState } from "react";
import TablePaginationActions from "./TablePaginationActions";

function createData(id, bankName, accNum, owner) {
  return { id, bankName, accNum, owner };
}

const rows = [
  createData("1727", "Á Châu (ACB)", "6590677", "NGUYEN VAN LUAT"),
  createData("1721", "Á Châu (ACB)", "6590677", "NGUYEN VAN LUAT"),
  createData("1722", "Á Châu (ACB)", "6590677", "NGUYEN VAN LUAT"),
  createData("1723", "Á Châu (ACB)", "6590677", "NGUYEN VAN LUAT"),
  createData("1724", "Á Châu (ACB)", "6590677", "NGUYEN VAN LUAT"),
];

const BankAccount = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Tài khoản ngân hàng
      </Typography>
      <Divider />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Tên ngân hàng</StyledTableCell>
              <StyledTableCell>Số tài khoản</StyledTableCell>
              <StyledTableCell>Tên chủ tài khoản</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.bankName}</StyledTableCell>
                <StyledTableCell>{row.accNum}</StyledTableCell>
                <StyledTableCell>{row.owner}</StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow sx={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={4}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BankAccount;
