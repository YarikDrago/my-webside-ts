import React, {Fragment, useEffect, useRef} from 'react';
import styled from 'styled-components'

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: background-color 0.5s linear;
  pointer-events: none;
 :hover{
  background-color: #b3ffca;
 }
`

interface ICanvas{
    percentage: number
    animationDur?: number
}

const PercentageRoundCanvas = ({percentage, animationDur}: ICanvas) => {
    const refCanvas = useRef(null)
    const side = 100
    const littleRoundRadius = side/20

    useEffect(()=>{
        // console.log("canvas start")
        mainAnime()
    },[])


    function mainAnime(){
        const animeDuration = animationDur ? animationDur : 3000
        const startTime = Date.now()
        const canvasElem = refCanvas.current as HTMLCanvasElement | null

        if (canvasElem === null){
            return
        }
        const ctx = canvasElem.getContext('2d')

        if (ctx === null){
            return;
        }
        // draw center shadow
        ctx.beginPath()
        // ctx.fillStyle = 'rgba(149,157,165,0.34)'
        ctx.fillStyle = 'rgba(149,157,165,0.5)'
        ctx.ellipse(50,50, 20, 20, 0,0, Math.PI*2)
        ctx.filter = 'blur(15px)'
        ctx.fill()


        requestAnimationFrame(anime)


        function anime(){
            if (Date.now() - startTime <= animeDuration){
                if (ctx === null){
                    return
                }
                const perExecution = (Date.now() - startTime) / animeDuration
                const xCenterPos = side/2 + (side/2 - littleRoundRadius) * Math.cos(-Math.PI/2 + Math.PI*2*percentage * perExecution)
                const yCenterPos = side/2 + (side/2 - littleRoundRadius) * Math.sin(-Math.PI/2 + Math.PI*2*percentage * perExecution)
                ctx.beginPath()
                ctx.filter= 'none'
                ctx.fillStyle = '#0b885e'
                ctx.ellipse(xCenterPos,yCenterPos, littleRoundRadius, littleRoundRadius, 0,0, Math.PI*2)
                ctx.fill()
                window.requestAnimationFrame(anime)
            } else {
                if (ctx === null){
                    return
                }
                const perExecution = (Date.now() - startTime) / animeDuration
                const xCenterPos = side/2 + (side/2 - littleRoundRadius) * Math.cos(-Math.PI/2 + Math.PI*2*percentage)
                const yCenterPos = side/2 + (side/2 - littleRoundRadius) * Math.sin(-Math.PI/2 + Math.PI*2*percentage)
                ctx.beginPath()
                ctx.filter= 'none'
                ctx.fillStyle = '#0b885e'
                ctx.ellipse(xCenterPos,yCenterPos, littleRoundRadius, littleRoundRadius, 0,0, Math.PI*2)
                ctx.fill()

            }
        }
    }

    return (
        <Fragment>
            <Canvas
                ref={refCanvas}
                width={`${side}px`}
                height={`${side}px`}
            >
            </Canvas>
            {/*<SkillImg src={require('../../mainPage/Skills/images/React-icon.svg.png').default}/>*/}
        </Fragment>

    );
};

export default PercentageRoundCanvas;