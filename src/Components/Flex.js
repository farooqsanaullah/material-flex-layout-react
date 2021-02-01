import React from "react";
import Box from "@material-ui/core/Box/index";
import Card from "./Card";
export default function Flex() {
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" p={1} bgcolor="background.paper">
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


//flex bydefault display used inline display . it is not break like row .