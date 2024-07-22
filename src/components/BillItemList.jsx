import PropTypes from "prop-types";
import BillItem from "./BillItem";

const BillItemList = ({ data }) => {
  return data.map((item) => (
    <BillItem
      key={item.id}
      avatarUrl={item.avatarUrl}
      userName={item.userName}
      billDetails={item.billDetails}
    />
  ));
};

BillItemList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BillItemList;
