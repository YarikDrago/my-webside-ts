import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'
import mainAnime from "./mainAnimeFct";

const StyledCanvas = styled.canvas`
  cursor: pointer;
  overflow: hidden;
  position: fixed;
  background-color: black;
`

const BackdropHexagonMove = () => {
    const refCanvas = useRef(null)

    useEffect(()=>{
        const canvasElem = refCanvas.current as HTMLCanvasElement | null
        if (canvasElem !== null){
            mainAnime(canvasElem)
        }
    },[])


    return (
        <StyledCanvas
            ref ={refCanvas}
            width={`${window.innerWidth}px`}
            height={`${window.innerHeight}px`}
        >

        </StyledCanvas>
    );
};

export default BackdropHexagonMove;