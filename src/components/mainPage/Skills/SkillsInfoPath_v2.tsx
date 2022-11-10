import React, { Fragment } from 'react';
import styled from 'styled-components'
import Skills_data from "./Skills_data";
import {observer} from "mobx-react";
import SkillAnimatedLines from "./SkillAnimatedLines";

const InfoPath = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-column-gap: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 350px;
  padding-right: 30px;
  font-family: 'Comfortaa', cursive;
`

const SkillHeading = styled.h3`
  position: relative;
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 10px;
`

const MainText = styled.p`
  white-space: pre-wrap;
  font-size: 1.5rem;
  line-height: 2;
`

const SkillsInfoPath_v2 = observer(() => {
    return (
        <InfoPath>
            {/*<h3>{Skills_data.skillsInfo[Skills_data.activeIndex].title}</h3>*/}
            <SkillAnimatedLines/>
            <div>
                <SkillHeading>{Skills_data.skillsInfo[Skills_data.activeIndex].title}</SkillHeading>
                <MainText>{Skills_data.skillsInfo[Skills_data.activeIndex].mainText}</MainText>
            </div>
            {/*<p>Info Path</p>*/}
        </InfoPath>
    );
})

export default SkillsInfoPath_v2;