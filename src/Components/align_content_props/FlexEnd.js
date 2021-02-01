import React from 'react'

import Box from '@material-ui/core/Box';
import Card from "../Card"


function FlexEnd() {
    return (
        <div style={{ width: '100%', background: 'red' }}>
        <Box
            display="flex"
            flexWrap="wrap"
            alignContent="flex-end"
            p={1}
            m={1}
            css={{  height: "90vh" }}
        >
            <Card/>
            <Card/>
            <Card/>
        </Box>


    </div>
    )
}

export default FlexEnd

// alignItems props is used to content alignment in columns side (vertical direction)
// flex-end value is used content start from flex end mean bottom of flex
// it almost same alignItems props
