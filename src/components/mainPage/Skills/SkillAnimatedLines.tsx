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
  clip-path: polygon(
    0% calc(100% - var(--lineGap)/2), 
    100% calc(100% - var(--lineGap)/2), 
    100% 0%, 
    calc(100% - var(--lineWidth)) var(--lineWidth),
    calc(100% - var(--lineWidth)) calc(100% - var(--lineGap)/2 - var(--lineWidth)),
    var(--lineWidth) calc(100% - var(--lineGap)/2 - var(--lineWidth))
  );
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
  clip-path: polygon(
    0% calc(var(--lineGap)/2), 
    100% calc(var(--lineGap)/2),
    100% 100%,
    calc(100% - var(--lineWidth)) calc(100% - var(--lineWidth)),
    calc(100% - var(--lineWidth)) calc(var(--lineGap) / 2 + var(--lineWidth)),
    var(--lineWidth) calc(var(--lineGap) / 2 + var(--lineWidth))
  );
`

const SkillAnimatedLines = observer(() => {
    const [inProp, setInProp]= useState(false)
    const refBasement = useRef(null)
    // const [line1Height, setLine1Height] = useState(Skills_data.line1Height)
    // const [line2Height, setLine2Height] = useState(Skills_data.line1Height)



    useEffect(()=>{
        setInProp(true)
        // console.log("skills amount", Skills_data.skillsInfo.length)
        // if (refBasement.current){
        //     // console.log((refBasement.current as HTMLElement).offsetHeight)
        //     // console.log((refBasement.current as HTMLElement).offsetWidth)
        //     //determine real height of line 2
        // }
    },[])



    // useEffect(()=>{
    //     // console.log("new active index", Skills_data.activeIndex)
    //     // setCenterYcoord(Skills_data.centerYActiveElem)
    //     setLine1Height(Skills_data.line1Height)
    // },[Skills_data.activeIndex])



    return (
        <Basement
            ref = {refBasement}
            // line1Height={line1Height}
            line1Height={Skills_data.line1Height}

        >
            <CSSTransition
                in={inProp}
                classNames={'skill-transition-line'}
                timeout={5000}
                unmountOnExit
            >
                <Line1/>
                {/*<Line1Temp line1Height={line1Height}/>*/}
            </CSSTransition>
            <CSSTransition
                in={inProp}
                classNames={'skill-transition-line'}
                timeout={5000}
                unmountOnExit
            >
                <Line2 />
            </CSSTransition>
        </Basement>
    );
})

export default SkillAnimatedLines;