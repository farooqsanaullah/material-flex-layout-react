import React from 'react'

import Box from '@material-ui/core/Box';

function FlexStart() {
    return (
        <Box>
            <Box display="flex" alignItems="flex-start" style={{ height: "200px", background: 'green' }}>
                <div style={{ padding: 10, background: 'gray' }}>
                    alignItems flex start
              </div>
            </Box>
        </Box>
    )
}

export default FlexStart

// alignItems props is used to content alignment in columns side (vertical direction)
// flex-start value is used content start from flex start mean top of flex
// bydefault content start from flex start side