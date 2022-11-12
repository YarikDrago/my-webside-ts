import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'

const StyledCanvas = styled.canvas`
  cursor: pointer;
  overflow: hidden;
  position: fixed;
  background-color: black;
`

const BackdropHexagonMove = () => {
    const refCanvas = useRef(null)

    useEffect(()=>{
        mainAnime()
    },[])


    function mainAnime(){
        const canvasElem = refCanvas.current as HTMLCanvasElement | null
        if (canvasElem === null){
            return
        }
        const context = canvasElem.getContext('2d')
    }



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