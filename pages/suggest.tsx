import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";

type Props = {};

const suggest = (props: Props) => {
  const [mood, setMood] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setMood(event.target.value);
  };

  const recommend = () => {
    fetch("../data/icecream.js")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120, marginTop: "-20vh" }}>
        <InputLabel id="demo-simple-select-helper-label">Mood</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={mood}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"happy"}>Happy</MenuItem>
          <MenuItem value={"sad"}>Sad</MenuItem>
          <MenuItem value={"anxious"}>Anxious</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <Button variant="contained" onClick={recommend}>
        Recommend
      </Button>
    </>
  );
};

export default suggest;
