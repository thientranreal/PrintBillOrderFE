import {
  ListItemButton,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";

export const ListItemButtonStyled = styled(ListItemButton)(
  ({ theme, active }) => ({
    ...(active === "true" && {
      border: `1.3px solid ${theme.palette.primary.main}`,
      borderRadius: "5px",
      color: theme.palette.primary.main,
      margin: "0 5px",
    }),
  })
);

export const NestedListItemButtonStyled = styled(ListItemButton)(
  ({ theme, active }) => ({
    paddingLeft: theme.spacing(4),
    ...(active === "true" && { color: theme.palette.primary.main }),
  })
);

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
