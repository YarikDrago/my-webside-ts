import React from 'react';
import styled from 'styled-components'
import ShortAboutMe from "./ShortAboutMe/ShortAboutMe";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";

const Basement = styled.main`
  overflow-x: hidden;
`
const MainPage_v1 = () => {
    return (
        <Basement>
            <ShortAboutMe/>
            <AboutMe/>
            <Skills/>
        </Basement>
    );
};

export default MainPage_v1;
