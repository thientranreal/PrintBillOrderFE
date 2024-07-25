import React, { useEffect, useRef, useState } from "react";
import BillItemList from "../components/BillItemList"; // Adjust the path as needed

const CreateBillMan = () => {
  const [data, setData] = useState([]);
  const wsRef = useRef(null);

  useEffect(() => {
    const initializeWebSocket = async () => {
      try {
        // Establish WebSocket connection
        const ws = new WebSocket("ws://localhost:3000/api/users/tiktokLive");
        wsRef.current = ws;

        // Define event listeners
        ws.onopen = () => {
          console.log("WebSocket connection established");
        };

        ws.onmessage = (event) => {
          const newMessage = JSON.parse(event.data);
          console.log("message", newMessage);
          // Ensure the same message is not added multiple times
          setData((prevData) => {
            // Filter out duplicate messages based on content
            const messageExists = prevData.some(item => item.message === newMessage.message && item.username === newMessage.username);
            return messageExists ? prevData : [...prevData, newMessage];
          });
        };



        ws.onerror = (error) => {
          console.error("WebSocket error:", error);
        };

        ws.onclose = () => {
          console.log("WebSocket connection closed");
        };
      } catch (error) {
        console.error("Failed to initialize WebSocket:", error);
      }
    };

    initializeWebSocket();

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  return (
    <>
      <BillItemList data={data} />
    </>
  );
};

export default CreateBillMan;
