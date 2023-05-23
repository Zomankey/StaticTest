import ReactPlayer from "react-player";
import { useState } from "react";
import { Box } from "@mui/material";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const button = {
  bgcolor: "#e9edf5",
  border: 1,
  borderColor: "#405686",
  boxShadow: 1,
  borderRadius: 2,
  p: 2,
  maxWidth: "95%",
};

const courseStyle = { bgcolor: "#c1cbe0", mx: 0.5, fontSize: 14, pt: 1 };

function Course(props) {
  const [isClicked, setIsClicked] = useState(false);

  function clickHandler(event) {
    event.preventDefault();
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  }

  return (
    <List component="nav" aria-label="">
      <ListItemButton sx={button}>
        <ListItemText
          primary={props.name}
          secondary={props.description}
          onClick={clickHandler}
        />
      </ListItemButton>
      {isClicked && (
        <Box sx={courseStyle}>
          <ReactPlayer url={props.url} light={true} playing={true} />
        </Box>
      )}
    </List>
  );
}

export default Course;
