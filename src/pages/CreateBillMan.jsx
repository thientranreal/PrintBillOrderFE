import BillItemList from "../components/BillItemList";

const data = [
  {
    id: 1,
    avatarUrl: "test.com",
    userName: "test1",
    billDetails: "info info info",
  },
  {
    id: 2,
    avatarUrl: "test.com",
    userName: "test1",
    billDetails: "info info info",
  },
  {
    id: 3,
    avatarUrl: "test.com",
    userName: "test1",
    billDetails: "info info info",
  },
  {
    id: 4,
    avatarUrl: "test.com",
    userName: "test1",
    billDetails: "info info info",
  },
];

const CreateBillMan = () => {
  return (
    <>
      <BillItemList data={data} />
    </>
  );
};

export default CreateBillMan;
