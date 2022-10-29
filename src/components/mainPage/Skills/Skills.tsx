import React from 'react';
import styled from 'styled-components'
import SkillsInfoPath from "./SkillsInfoPath";
import SkillsSidebar from "./SkillsSidebar";
import TextAppearSplit from "../../additionComponents/textAppearSplit/TextAppearSplit";

const Backdrop = styled.section`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: auto 5fr;
  grid-template-rows: 100px 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  grid-template-areas: 
    "title title"
    "aside main"
  ;
  width: 100vw;
  height: 75vh;
  //height: 100vh;
  background: white;
  //background-color: #7b7070;
  padding: 50px 20px 50px 50px ;
`
const MainTitleContainer = styled.div`
  grid-area: title;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const MainTitle = styled.h1`
  position: relative;
  display: inline;
  color: #0b885e;
  margin: 0;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.3rem;
  //margin-bottom: 40px;
  text-transform: uppercase; 
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 400px){
    font-size: 1.7rem;
  }
`

const TextPath = styled.p`
  grid-area: main;
`

const SideBar = styled.nav`
  grid-area: aside;
`
const Skills = () => {
    return (
        <Backdrop>
            <MainTitleContainer>
                <TextAppearSplit singleAppear={true}>
                    <MainTitle>skills</MainTitle>
                </TextAppearSplit>
            </MainTitleContainer>
            <SkillsSidebar/>
            <SkillsInfoPath/>

        </Backdrop>
    );
};

export default Skills;