import React from "react"
import {connect, keyframes, styled} from "frontity"
import Image from "@frontity/components/image";
import {InView} from "react-intersection-observer";
import {Paper} from "@mui/material";
import MainPic from "../assets/ogi_drive_main.jpeg";


const Bestsellers = () => {
    return(
        <FlexBox>
            <FlexRow>
                <FlexContent>

                </FlexContent>
            </FlexRow>
            <FlexRow>
                <FlexContent>

                </FlexContent>
            </FlexRow>
            <FlexRow>
                <FlexContent>

                </FlexContent>
            </FlexRow>
            <FlexRow>
                <FlexContent>

                </FlexContent>
            </FlexRow>

        </FlexBox>
    )
}

export default connect(Bestsellers)

const FlexBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 5px;
`

const FlexRow = styled.div`
    display: flex;
    flex: 1;
    flex-flow: row-wrap;
    justify-content: center;
`

const FlexContent = styled.div`
    display: flex;
    height: 300px;
    width: 100%;    
    background: url('${MainPic}') no-repeat;
`