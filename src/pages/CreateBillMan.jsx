import { useEffect, useRef, useState } from "react";
import BillItemList from "../components/BillItemList";
import { IconButton, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import handleEnterKey from "../utils/handleEnterKey";

const CreateBillMan = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const wsRef = useRef(null);
  const searchBtnRef = useRef(null);

  const handleSearchClick = () => {
    // Filter by name
    const filterData = data.filter((item) =>
      item.nickname.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDisplayData(filterData);
  };

  useEffect(() => {
    try {
      // Establish WebSocket connection
      const ws = new WebSocket(
        `ws://localhost:3000/api/users/tiktokLive?token=${localStorage.getItem(
          "token"
        )}`
      );
      wsRef.current = ws;

      // Define event listeners
      ws.onopen = () => {
        console.log("WebSocket connection established");
      };

      ws.onmessage = (event) => {
        const newMessage = JSON.parse(event.data);
        console.log("message", newMessage);

        if (!newMessage.nickname && !newMessage.avatarUrl) {
          return;
        }

        // Ensure the same message is not added multiple times
        setData((prevData) => {
          // Filter out duplicate messages based on content
          const messageExists = prevData.some(
            (item) =>
              item.message === newMessage.message &&
              item.username === newMessage.username
          );
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

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    searchBtnRef.current.click();
  }, [data]);

  return (
    <>
      {/* Search */}
      <Paper
        elevation={3}
        sx={{ display: "flex", mb: 3, p: 0.5, maxWidth: 500 }}
      >
        <TextField
          fullWidth
          id="search-input"
          label="Tìm kiếm"
          variant="outlined"
          value={searchValue}
          onKeyDown={(e) => handleEnterKey(e, searchBtnRef)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <IconButton
          ref={searchBtnRef}
          aria-label="search"
          color="primary"
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* End Search */}
      <BillItemList data={displayData} />
    </>
  );
};

export default CreateBillMan;
