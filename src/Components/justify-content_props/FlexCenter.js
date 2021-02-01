import React from 'react'

import Box from '@material-ui/core/Box';
import Card from "../Card"
function FlexCenter() {
    return (
        <Box m={0} style={{ height: "93vh", background: "red" }}>
            <Box p={2} display="flex" flexDirection="row" justifyContent="center">
                <Card />
                <Card />
            </Box>
        </Box>
    )
}

export default FlexCenter

// justifyContent props is used to content alignment in row side (Horizontal direction)
// center value is used content start from flex center 
