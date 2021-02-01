import React from 'react';
import Box from '@material-ui/core/Box';
import Card from "../Card"
export default function AlignContent() {
    return (
        <div style={{ width: '100%', background: 'red' }}>
            <Box
                display="flex"
                flexWrap="wrap"
                alignContent="flex-start"
                p={1}
                m={1}
                css={{  height: "90vh" }}
            >
                <Card/>
                <Card/>
                <Card/>
            </Box>


        </div>
    );
}

// alignContent props is used to content alignment in columns side (vertical direction)
// flex-start value is used content start from flex start mean top of flex
// bydefault content start from flex start side
// it almost same alignItems props