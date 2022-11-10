import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import {CSSTransition} from "react-transition-group";
import Skills_data from "./Skills_data";
import {observer} from "mobx-react";


const Basement = styled.div<{line1Height: number}>`
  position: relative;
  --rowGap: 10px;
  //display: flex;
  display: grid;
  grid-template-rows: ${props => props.line1Height}px auto;
  flex-direction: column;
  //height: 100%;
  //height: 400px;
  height: 350px;  
  width: 100%;
  max-height: 100%;
  //background-color: darkcyan;
`

const Line1= styled.svg`
  --lineWidth: 10px;
  --lineGap: 10px;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #0b885e;
  //clip-path: polygon(
  //  0% calc(100% - var(--lineGap)/2), 
  //  100% calc(100% - var(--lineGap)/2), 
  //  100% 0%, 
  //  calc(100% - var(--lineWidth)) var(--lineWidth),
  //  calc(100% - var(--lineWidth)) calc(100% - var(--lineGap)/2 - var(--lineWidth)),
  //  var(--lineWidth) calc(100% - var(--lineGap)/2 - var(--lineWidth))
  //);
`

const Line2 = styled.svg`
  --lineWidth: 10px;
  --lineGap: 10px;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
  background-color: #0b885e;
  //clip-path: polygon(
  //  0% calc(var(--lineGap)/2), 
  //  100% calc(var(--lineGap)/2),
  //  100% 100%,
  //  calc(100% - var(--lineWidth)) calc(100% - var(--lineWidth)),
  //  calc(100% - var(--lineWidth)) calc(var(--lineGap) / 2 + var(--lineWidth)),
  //  var(--lineWidth) calc(var(--lineGap) / 2 + var(--lineWidth))
  //);
`

const SkillAnimatedLines_v2 = observer(() => {
    const linesGap = 10
    const lineWidth = 10
    const refBasement = useRef(null)
    const [line1Height, setLine1Height] = useState(Skills_data.line1Height)
    const refLine1 = useRef(null)
    const refLine2 = useRef(null)


    const mainAnimate = () =>{
        console.log('main Anime start 2')
        const startTime = Date.now()
        const animeDuration = 3000
        let horizontalWidth = 0
        const horizontalTime = 0.3 // percentage
        let section1Time = 0
        let section2Time = 0
        let section3Time = 0
        const basementElem = refBasement.current as HTMLElement | null
        const line1Elem = refLine1.current as HTMLElement | null
        const line2Elem = refLine2.current as HTMLElement | null
        if (basementElem !== null){
            horizontalWidth = basementElem.offsetWidth
            section1Time = lineWidth / horizontalWidth * animeDuration * horizontalTime
            section2Time = animeDuration * horizontalTime
            section3Time = section1Time + section2Time
        }
        console.log("horizontal width", horizontalWidth, lineWidth, lineWidth/horizontalWidth)
        console.log("section times", section1Time, section2Time, section3Time)

        requestAnimationFrame(anime)


        function anime(){
            if (Date.now() - startTime <= animeDuration){
                requestAnimationFrame(anime)
            }
            // const line1Elem = refLine1.current as HTMLElement | null
            // const line2Elem = refLine2.current as HTMLElement | null
            // if (line1Elem !== null && line2Elem !== null){
            //     line2Elem.style.clipPath = `polygon(
            //         0% ${linesGap/2}px,
            //         100% ${linesGap/2}px,
            //         100% 100%,
            //         calc(100% - ${lineWidth}px) calc(100% - ${lineWidth}px),
            //         calc(100% - ${lineWidth}px) calc(${linesGap/2}px + ${lineWidth}px),
            //         ${lineWidth}px calc(${linesGap/2}px + ${lineWidth}px)
            //     )`
            // }
            // time zone 1
            if (Date.now() - startTime <= section1Time){
                const perDraw = (Date.now() - startTime) / section1Time
                // console.log((Date.now() - startTime)/section1Time)
                if (line1Elem !== null && line2Elem !== null){
                    line2Elem.style.clipPath = `polygon(
                    0% ${linesGap / 2 * perDraw}px, 
                    ${lineWidth * perDraw}px ${linesGap / 2 * perDraw}px,
                    ${lineWidth * perDraw}px ${(linesGap / 2 + lineWidth) * perDraw}px
                )`
                }
            }
            // time zone 2
            if (Date.now() - startTime >= section1Time && Date.now() - startTime <= section2Time){
                const perDraw = (Date.now() - (startTime + section1Time)) / (section2Time - section1Time)
                if (line1Elem !== null && line2Elem !== null){
                    // console.log((Date.now() - (startTime + section1Time)) / (section2Time - section1Time))
                    line2Elem.style.clipPath = `polygon(
                    0% ${linesGap / 2}px, 
                    ${lineWidth}px ${linesGap / 2}px,
                    calc(${lineWidth}px + (100% - ${lineWidth}px)*${perDraw}) ${linesGap / 2}px,
                    calc(${lineWidth}px + (100% - ${lineWidth}px)*${perDraw}) ${(linesGap / 2 + lineWidth)}px,                    
                    ${lineWidth}px ${(linesGap / 2 + lineWidth)}px                    
                )`
                }
            }
            // time zone 3
            if (Date.now() - startTime >= section2Time && Date.now() - startTime <= section3Time){
                const perDraw = (Date.now() - (startTime + section2Time)) / (section3Time - section2Time)
                if (line1Elem !== null && line2Elem !== null){
                    // console.log((Date.now() - (startTime + section2Time)) / (section3Time - section2Time))
                    line2Elem.style.clipPath = `polygon(
                    0% ${linesGap / 2}px, 
                    ${lineWidth}px ${linesGap / 2}px,
                    100% ${linesGap / 2}px,
                    100% ${(linesGap / 2 + lineWidth)}px,
                    100% ${(linesGap / 2 + lineWidth + lineWidth * perDraw)}px,
                    calc(100% - ${lineWidth}px) ${(linesGap / 2 + lineWidth)}px,                    
                    ${lineWidth}px ${(linesGap / 2 + lineWidth)}px                    
                )`
                }
            }
            //time zone 4
            if (Date.now() - startTime >= section3Time && Date.now() - startTime <= animeDuration){
                const perDraw = (Date.now() - (startTime + section3Time)) / (animeDuration - section3Time)
                if (line1Elem !== null && line2Elem !== null){
                    // console.log((Date.now() - (startTime + section3Time)) / (animeDuration - section3Time))
                    line2Elem.style.clipPath = `polygon(
                    0% ${linesGap / 2}px, 
                    ${lineWidth}px ${linesGap / 2}px,
                    100% ${linesGap / 2}px,
                    100% ${(linesGap / 2 + lineWidth)}px,
                    100% calc(${(linesGap / 2 + 2 * lineWidth)}px + (100% - ${linesGap / 2 + 2 * lineWidth}px) * ${perDraw}),
                    calc(100% - ${lineWidth}px) calc(${(linesGap / 2 + lineWidth)}px + (100% - ${linesGap / 2 + 2 * lineWidth}px) * ${perDraw}),
                    calc(100% - ${lineWidth}px) ${(linesGap / 2 + lineWidth)}px,                    
                    ${lineWidth}px ${(linesGap / 2 + lineWidth)}px                    
                )`
                }
            }
        }
    }

    useEffect(()=>{
        console.log("skills amount", Skills_data.skillsInfo.length)
        mainAnimate()
    },[])

    useEffect(()=>{
        setLine1Height(Skills_data.line1Height)
    },[Skills_data.activeIndex])

    return (
        <Basement
            ref = {refBasement}
            line1Height={line1Height}
        >
            <Line1 ref={refLine1}/>
            <Line2 ref={refLine2}/>
        </Basement>
    );
})

export default SkillAnimatedLines_v2;