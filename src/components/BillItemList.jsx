import PropTypes from "prop-types";
import BillItem from "./BillItem";
import { Divider, Stack } from "@mui/material";

const BillItemList = ({ data }) => {
  return (
    <Stack spacing={2} divider={<Divider flexItem />}>
      {data.map((item) => (
        <BillItem
          key={item.userId}
          avatarUrl={item.avatarUrl}
          nickname={item.nickname}
          message={item.message}
        />
      ))}
    </Stack>
  );
};

BillItemList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BillItemList;
