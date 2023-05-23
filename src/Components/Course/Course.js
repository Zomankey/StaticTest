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

function Course(props) {
  return (
    <List component="nav" aria-label="">
      <ListItemButton sx={button}>
        <ListItemText primary={props.name} secondary={props.description} />
      </ListItemButton>
    </List>
  );
}

export default Course;
