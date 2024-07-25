const handleEnterKey = (event, buttonRef) => {
  if (event.key === "Enter") {
    buttonRef.current.click();
  }
};

export default handleEnterKey;
