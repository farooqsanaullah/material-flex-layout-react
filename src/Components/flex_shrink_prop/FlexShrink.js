import React from 'react'
import Box from '@material-ui/core/Box';

function FlexShrink() {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" bgcolor="background.paper">
                <Box p={1}   width="100%" css={{background:'grey'}}>
                    Item 1
            </Box>
                <Box p={1} flexShrink={0} bgcolor="pink">
                    Item 2
            </Box>
                <Box p={1} flexShrink={1} bgcolor="grey.300">
                    Item 3
            </Box>
            </Box>
        </div>
    )
}

export default FlexShrink
// flex shrink is used shirk component. flexShrink props accept only 0 or 1 value 0
// 0 mean no shrink and 1 yes shrink the component  