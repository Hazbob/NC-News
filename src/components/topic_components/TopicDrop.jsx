import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

function TopicDrop({ setTopic, topic }) {
  return (
    <Box sx={{ minWidth: 120, maxWidth: 150 }} className={"sort-box"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={topic}
          label="Topic"
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        >
          <MenuItem value={"coding"}>Coding</MenuItem>
          <MenuItem value={"cooking"}>Cooking</MenuItem>
          <MenuItem value={"football"}>Football</MenuItem>
          <MenuItem value={""}>All Topics</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default TopicDrop;
