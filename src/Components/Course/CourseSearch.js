import { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

const box = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: "95%",
  boxShadow: 3,
  bgcolor: "#e9edf5",
  mx: "auto",
  borderRadius: 2,
};

export default function CourseSearch(props) {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  function onClickSearch(event) {
    event.preventDefault();
    props.onSearch(inputText);
  }

  return (
    <Box sx={box}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Course Title"
        inputProps={{ "aria-label": "search course" }}
        onChange={inputHandler}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onClickSearch}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
