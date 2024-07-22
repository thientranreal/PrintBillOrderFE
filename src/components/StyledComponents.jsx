import { ListItemButton, styled } from "@mui/material";

export const ListItemButtonStyled = styled(ListItemButton)(
  ({ theme, active }) => ({
    ...(active && {
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
    ...(active && { color: theme.palette.primary.main }),
  })
);
