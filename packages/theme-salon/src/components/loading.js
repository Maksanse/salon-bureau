import React from "react"
import { styled, keyframes } from "frontity"
import { Backdrop, CircularProgress } from '@mui/material'

const Loading = () => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loading


const fillWidth = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const Spinner = styled.div`
  height: 3px;
  width: 100%;
  background-color: grey;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  animation: ${fillWidth} 2s linear infinite;
  
`;