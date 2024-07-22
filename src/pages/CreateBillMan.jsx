import { useEffect, useState } from "react";
import BillItemList from "../components/BillItemList";

const CreateBillMan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket("ws://localhost:8080");

    // Define event listeners
    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      const newBillData = {
        id: newMessage.userId,
        avatarUrl: newMessage.avatarUrl,
        userName: newMessage.nickname,
        billDetails: newMessage.message,
      };
      setData((prevData) => [...prevData, newBillData]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <BillItemList data={data} />
    </>
  );
};

export default CreateBillMan;
