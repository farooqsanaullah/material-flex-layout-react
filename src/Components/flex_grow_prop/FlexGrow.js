import React from 'react';
import Box from '@material-ui/core/Box';
import Card from "../Card"
export default function FlexGrow() {

    return (
        <Box display="flex" p={1} flexWrap="wrap">
            <Box style={{background:'lightblue',padding:10}}>item 2</Box>
            <Box style={{background:'lightpink',padding:10}}>iten 3</Box>
            <Box style={{background:'lightpink',padding:10}}>iten 3</Box>
            <Box style={{background:'lightpink',padding:10}}>iten 3</Box>
            <Box style={{background:'lightpink',padding:10}}>iten 3</Box>
            <Box style={{background:'lightpink',padding:10}}>iten 3</Box>
            <Box flexGrow={1} style={{background:'gray',padding:10}}>flex grow</Box>
        </Box>
    );
}


// flex grow props is used fill extra space that available  