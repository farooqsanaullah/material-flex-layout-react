import React from 'react'

import Box from '@material-ui/core/Box';
import Card from "../Card"
function FlexEnd() {
    return (
        <Box m={0} style={{ height: "93vh", background: "red" }}>
            <Box p={2} display="flex" flexDirection="row" justifyContent="flex-end">
                <Card />
                <Card />
            </Box>
        </Box>
    )
}

export default FlexEnd

// justifyContent props is used to content alignment in row side (Horizontal direction)
// flex-end value is used content start from flex end side mean in right side
