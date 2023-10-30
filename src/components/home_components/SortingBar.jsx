import * as React from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SortingBar({ setSort, sort }) {
  const [sortUi, setSortUi] = React.useState("Sort");

  function sendSort(e) {
    setSort(e.target.value.toUpperCase());
    setSortUi(e.target.value);
  }

  return (
    <Box sx={{ minWidth: 120, maxWidth: 150 }} className={"sort-box"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortUi}
          label="Sort"
          onChange={sendSort}
        >
          <MenuItem value={"votes"}>Votes</MenuItem>
          <MenuItem value={"date"}>Date</MenuItem>
          <MenuItem value={"comments"}>Comments</MenuItem>
          <MenuItem value={""}>All Articles</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortingBar;
