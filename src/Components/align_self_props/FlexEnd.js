import React from 'react';
import Box from '@material-ui/core/Box';

export default function FlexEnd() {
    return (
        <div style={{ width: '100%' }}>
            <Box
                display="flex"
                alignItems="flex-start"
                p={1}
                m={1}
                bgcolor="background.paper"
                css={{ height: 100 }}
            >
                <Box p={1} bgcolor="grey.300">
                    Item 1
                </Box>
                <Box p={1} bgcolor="grey.300" alignSelf="flex-end">
                    Item 2
                 </Box>
                <Box p={1} bgcolor="grey.300">
                    Item 3
                 </Box>
            </Box>
        </div>
    );
}

// alignSelf props is used to content alignment in columns side (vertical direction)
// flex-end value is used content start from flex end mean bottom of flex
// bydefault alignSelf flex-start