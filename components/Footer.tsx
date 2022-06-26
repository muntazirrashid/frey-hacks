import { useState, useRef } from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from '@mui/icons-material/GitHub';
import Paper from "@mui/material/Paper";

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <a href="https://github.com/Vilayat-Ali/frey-hacks" target="_blank"> <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} /></a>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
