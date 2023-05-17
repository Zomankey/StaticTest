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

export default function CourseSearch() {
  return (
    <Box sx={box}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Courses"
        inputProps={{ "aria-label": "search course" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
