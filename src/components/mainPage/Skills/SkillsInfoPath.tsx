import React from 'react';
import styled from 'styled-components'
import Skills_data from "./Skills_data";
import {observer} from "mobx-react";
import SkillAnimatedLines from "./SkillAnimatedLines";
import SkillAnimatedLines_v2 from "./SkillAnimatedLines_v2";
import SkillAnimationLines_data from "./SkillAnimationLines_data";

const InfoPath = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-left: 100px;
  padding-right: 30px;
  font-family: 'Comfortaa', cursive;
  //background-color: aqua;
`

const SkillHeading = styled.h3`
  //text-align: center;
  font-size: 2rem;
  
  
`

const MainText = styled.p`
  white-space: pre-wrap;
  font-size: 1.5rem;
  line-height: 2;
`

const SkillsInfoPath = observer(() => {
    return (
        <InfoPath>
            <SkillHeading>{Skills_data.skillsInfo[Skills_data.activeIndex].title}</SkillHeading>
            <MainText
            >{Skills_data.skillsInfo[Skills_data.activeIndex].mainText}</MainText>
            {/*<SkillAnimatedLines_v2/>*/}
        </InfoPath>
    );
})

export default SkillsInfoPath;