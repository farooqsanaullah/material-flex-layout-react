import React from 'react'
import Card from "../Card"

import Box from '@material-ui/core/Box';

function FlexCenter() {
    return (
        <div style={{ width: '100%', background: 'red' }}>
        <Box
            display="flex"
            flexWrap="wrap"
            alignContent="center"
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

export default FlexCenter

// alignItems props is used to content alignment in columns side (vertical direction)
// center value is used content start from flex center mean middle of flex
// it almost same alignItems props