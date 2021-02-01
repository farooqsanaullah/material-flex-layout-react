import React from 'react'

import Box from '@material-ui/core/Box';

function FlexCenter() {
    return (
        <Box>
            <Box display="flex" alignItems="center" style={{ height: "200px", background: 'green' }}>
                <div style={{ padding: 10, background: 'gray' }}>
                    alignItems center
              </div>
            </Box>
        </Box>
    )
}

export default FlexCenter

// alignItems props is used to content alignment in columns side (vertical direction)
// center value is used content start from flex center mean middle of flex
