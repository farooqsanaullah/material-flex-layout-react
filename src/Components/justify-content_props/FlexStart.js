import React from 'react'

import Box from '@material-ui/core/Box';
import Card from "../Card"
function FlexStart() {
    return (
        <Box m={0} style={{ height: "93vh", background: "red" }}>
            <Box p={2} display="flex" flexDirection="row" justifyContent="flex-start">
                <Card />
                <Card />
            </Box>
        </Box>
    )
}

export default FlexStart

// justifyContent props is used to content alignment in row side (Horizontal direction)
// flex-start value is used content start from flex start side mean in left side
// bydefault content start from flex start side