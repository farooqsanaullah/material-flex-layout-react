import React from 'react'
import Box from '@material-ui/core/Box';
import Card from "../Card"
function FlexWrap() {
    return (
        <Box p={2} display="flex" flexDirection="row" flexWrap="wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Box>
    )
}

export default FlexWrap

// flexWrap using as wrap value props is used to break the row 