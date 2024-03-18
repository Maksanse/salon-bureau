import React from "react"
import {connect, keyframes, styled} from "frontity"
import Image from "@frontity/components/image";
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import {Paper} from "@mui/material";
import MainPic from "../assets/ogi_drive_main.jpeg";


const Bestsellers = () => {
    return(
        <FlexBox>
            <Paper square={false}variant="outlined" elevation={6} sx={{ width: "250px" , padding: "16px" }}>
                <Image
                    width="100%"
                    src={MainPic}
                />
            </Paper>
            <Paper square={false} variant="outlined" elevation={6} sx={{ width: "250px" , padding: "16px"}}>
                <Image
                    width="100%"
                    src={MainPic}
                />
            </Paper>
            <Paper square={false} variant="outlined" elevation={6} sx={{ width: "250px" , padding: "16px" }}>
                <Image
                    width="100%"
                    src={MainPic}
                />
            </Paper>
            <Paper square={false} variant="outlined" elevation={6} sx={{ width: "250px" , padding: "16px" }}>
                <Image
                    width="100%"
                    src={MainPic}
                />
            </Paper>
        </FlexBox>




)
}

export default connect(Bestsellers)

const FlexBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 2px;
    margin-top: 2rem;
`