import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components'
import Skills_data from "./Skills_data";
import {observer} from "mobx-react";
import SkillAnimatedLines from "./SkillAnimatedLines";
import SkillAnimatedLines_v_l from "./SkillAnimatedLines_v_l";
import SkillAnimationLines_data from "./SkillAnimationLines_data";
import SkillAnimatedLines_h_up from "./SkillAnimatedLines_h_up";

const InfoPath = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 10px;
  box-sizing: border-box;
  width: 100%;
  //height: 100%;
  height: 350px;
  //min-height: 350px;
  padding-right: 30px;
  overflow-y: auto;
  font-family: 'Comfortaa', cursive;
  
  @media screen and (max-width: 1100px){
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 800px){
    grid-template-columns: none;
    grid-template-rows: 1fr;
    padding-right: 0;
    height: auto;
  }
`

const SkillHeading = styled.h3`
  position: relative;
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 10px;
  @media screen and (max-width: 900px){
    font-size: 1.2rem;
  }
`

const MainText = styled.p`
  white-space: pre-wrap;
  font-size: 1.5rem;
  line-height: 2;
  @media screen and (max-width: 900px){
    font-size: 1.2rem;
  }
`

const SkillsInfoPath_v3 = observer(() => {
    const [linesMode, setLinesMode] = useState(false)

    useEffect(()=>{
        setAnimatedLinesType()
        window.addEventListener("resize", setAnimatedLinesType)
    },[])


    function setAnimatedLinesType(){
        console.log("change lines file", )
        console.log(window.innerWidth)
        if (window.innerWidth <= 800){
            setLinesMode(true)
        } else {
            setLinesMode(false)
        }
    }
    return (
        <InfoPath>
            {/*{linesMode ? <SkillAnimatedLines_h_up/> : <SkillAnimatedLines_v_l/>}*/}
            <div
                onMouseEnter = {()=> SkillAnimationLines_data.setAlterModeTrue()}
                onMouseLeave = {()=> SkillAnimationLines_data.setAlterModeFalse()}
            >
                <SkillHeading>{Skills_data.skillsInfo[Skills_data.activeIndex].title}</SkillHeading>
                <MainText>{Skills_data.skillsInfo[Skills_data.activeIndex].mainText}</MainText>
            </div>
            {/*<p>Info Path</p>*/}
        </InfoPath>
    );
})

export default SkillsInfoPath_v3;