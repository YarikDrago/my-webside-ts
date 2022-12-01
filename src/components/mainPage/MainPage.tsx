import React from 'react';
import styled from 'styled-components'
import ShortAboutMe from "./ShortAboutMe/ShortAboutMe";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import FootballBtn from "./footballPredictionTournament/footballBtn/FootballBtn";
import SkillsV2 from "./Skills/Skills_v2";
import NewsFeed from "./newsFeed/NewsFeed";

const Basement = styled.main`
  position: relative;
  overflow-x: hidden;
`
const MainPage_v1 = () => {
    return (
        <Basement>
            <ShortAboutMe/>
            <FootballBtn/>
            {/*<NewsFeed/>*/}
            <AboutMe/>
            <SkillsV2/>
        </Basement>
    );
};

export default MainPage_v1;
