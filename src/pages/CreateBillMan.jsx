import { useEffect, useRef, useState } from "react";
import BillItemList from "../components/BillItemList";
import { useDispatch } from "react-redux";
import { activateWS } from "../actions";

const CreateBillMan = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const wsRef = useRef(null);

  useEffect(() => {
    const initializeWebSocket = async () => {
      // Activate WS
      await dispatch(activateWS());

      // Establish WebSocket connection
      const ws = new WebSocket("ws://localhost:8080");
      wsRef.current = ws;

      // Define event listeners
      ws.onopen = () => {
        console.log("WebSocket connection established");
      };

      ws.onmessage = (event) => {
        const newMessage = JSON.parse(event.data);
        setData((prevData) => [...prevData, newMessage]);
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed");
      };
      return ws;
    };

    initializeWebSocket();

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [dispatch]);

  return (
    <>
      <BillItemList data={data} />
    </>
  );
};

export default CreateBillMan;
