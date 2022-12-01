import React, {useEffect, useRef, useState} from 'react';
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
    const [canvasWidth, setCanvasWidth] = useState(window.innerWidth)
    const [canvasHeight, setCanvasHeight] = useState(window.innerHeight)

    useEffect(()=>{
        const canvasElem = refCanvas.current as HTMLCanvasElement | null
        if (canvasElem !== null){
            mainAnime(canvasElem)
        }
    },[])

    window.addEventListener("resize", redrawCanvasHexagonAnimate)

    function redrawCanvasHexagonAnimate(){
        setCanvasWidth(window.innerWidth)
        setCanvasHeight(window.innerHeight)
    }

    return (
        <StyledCanvas
            ref ={refCanvas}
            width={`${canvasWidth}px`}
            height={`${canvasHeight}px`}
        >

        </StyledCanvas>
    );
};

export default BackdropHexagonMove;