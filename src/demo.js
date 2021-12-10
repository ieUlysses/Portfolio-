import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GitHubIcon from "@mui/icons-material/GitHub";
import SegmentIcon from "@mui/icons-material/Segment";
import Brightness1 from "@mui/icons-material/Brightness1";

//Notes:
// Basic nav bar componant for porfolio including theme toggleButton.
// Origional comp was mui's speeddial but i've tweaked it a little
// neccrcary to add external "SpeedDialAction outside of map as you would have 4 toggle buttons. Action can be replaced with text at afuture time "

//TODO:
//  Add Dynamic icon for theme toggle and add theme to toggle button along with all text + surfaces for navbar
//  Add Dynamic text for theme toggle button tooltip
//  remove background color for nav actions + button
//  Look into adding active color for ripple effect. mighht be a nice hioomage to the dark green....

const actions = [
  { icon: <InfoIcon />, name: "About" },
  { icon: <HomeIcon />, name: "Home" },
  { icon: <PermContactCalendarIcon />, name: "Contact" },
  { icon: <GitHubIcon />, name: "Projects" }
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        direction="left"
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          ".MuiSpeedDial-fab:hover": { color: "#fffff", bgcolor: "#d1d1d1" },
          ".MuiSpeedDial-fab": { color: "#fffff", bgcolor: "#d1d1d1" }
        }}
        icon={<SegmentIcon />}
      >
        <SpeedDialAction
          icon={<Brightness1 />}
          tooltipTitle={"Dark Mode"}
          tooltipPlacement="bottom"
        />
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="bottom"
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
