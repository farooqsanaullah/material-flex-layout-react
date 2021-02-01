import React from "react";
import Box from "@material-ui/core/Box/index";
import Card from "./Card";
export default function Layout() {
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" flexWrap="wrap" p={1} bgcolor="background.paper">
        <Box component="div" style={{ paddingRight: 20 }}>
          <Card />
        </Box>
        <Box component="div" style={{ paddingRight: 20 }}>
          <Card />
        </Box>
        <Box component="div" style={{ paddingRight: 20 }}>
          <Card />
        </Box>
        <Box component="div" style={{ paddingRight: 20 }}>
          <Card />
        </Box>
        <Box component="div" style={{ paddingRight: 20 }}>
          <Card />
        </Box>
        <Box component="div" style={{ paddingRight: 20 }}>
          <Card />
        </Box>
        <Box component="div" style={{ paddingRight: 20 }}>
          <Card />
        </Box>
        <Box component="div" style={{ paddingRight: 20 }}>
          <Card />
        </Box>
      </Box>
    </div>
  );
}
