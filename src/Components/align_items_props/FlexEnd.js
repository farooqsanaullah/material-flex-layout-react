import React from 'react'

import Box from '@material-ui/core/Box';

function FlexEnd() {
    return (
        <Box>
            <Box display="flex" alignItems="flex-end" style={{ height: "200px", background: 'green' }}>
                <div style={{ padding: 10, background: 'gray' }}>
                    alignItems flex end
              </div>
            </Box>
        </Box>
    )
}

export default FlexEnd

// alignItems props is used to content alignment in columns side (vertical direction)
// flex-end value is used content start from flex end mean bottom of flex
