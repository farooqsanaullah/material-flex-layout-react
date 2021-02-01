import React from 'react'
import Box from '@material-ui/core/Box';
import Card from "../Card"
function FlexRow() {
    return (
        <Box p={2} display="flex" flexDirection="row">
            <Card />
            <Card />
            <Card />
        </Box>
    )
}

export default FlexRow


// flexDirection is used row and columns direction. if we do not used flex display prop
// it display only one component in one row.if we used flex prop is working like simple row 
// but it do not break like simple row in bootstrap.
//row flexDirection start from flex start side(in other word left side of row). 