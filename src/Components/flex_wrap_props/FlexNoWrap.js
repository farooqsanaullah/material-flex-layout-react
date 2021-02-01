import React from 'react'
import Box from '@material-ui/core/Box';
import Card from "../Card"
function FlexNoWrap() {
    return (
        <Box p={2} display="flex" flexDirection="row" flexWrap="nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        
     
        </Box>
    )
}

export default FlexNoWrap

// flexWrap using as nowrap value props is used to not break the row.
// if u want your row do not break simple do not used flexwrap prop
// only used display flex prop  