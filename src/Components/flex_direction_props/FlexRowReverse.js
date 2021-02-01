import React from 'react'
import Box from '@material-ui/core/Box';
import Card from "../Card"
function FlexRowReverse() {
    return (
        <Box p={2} display="flex" flexDirection="row-reverse">
            <Card />
            <Card />
            <Card />
        </Box>
    )
}

export default FlexRowReverse


//only different between  row-reverse flexDirection  start from flex end side(in other word rigth side of row). 