import React from 'react';
import Box from '@material-ui/core/Box';
import Card from "../Card"
export default function Order() {
    let firstOrderImage = "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
    let secondOrderImage = "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
    let thirdOrderImage = "https://www.freedigitalphotos.net/images/img/homepage/394230.jpg"
    return (
        <Box display="flex" p={1} flexWrap="wrap">
            <Box order={2}>
                <Card name={"order no 1"} url={firstOrderImage} />
            </Box>
            <Box order={1}>
                <Card name={"order no 2"} url={secondOrderImage} />
            </Box>
            <Box order={3}>
                <Card name={"order no 3"} url={thirdOrderImage} />
            </Box>

        </Box>
    );
}


// order props only used display colunms according our need