import React from 'react';
import styled from 'styled-components'
import TextAppearSplit from "../../additionComponents/textAppearSplit/TextAppearSplit";
import SkillsInfoPath_v2 from "./SkillsInfoPath_v2";
import SkillsSidebar_v2 from "./SkillsSidebar_v2";

const Backdrop = styled.section`
  position: relative;
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
  //height: 350px;
  background: white;
  padding: 50px 20px 50px 50px ;
  
  @media screen and (max-width: 800px){
    grid-template-rows: 100px 100px 1fr ;
    grid-template-columns: none;
    grid-template-areas: 
    "title"
    "aside"
    "main"
  ;
  padding: 20px;
  }
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
  text-transform: uppercase; 
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 400px){
    font-size: 1.7rem;
  }
`

const Skills = () => {
    return (
        <Backdrop>
            <MainTitleContainer>
                <TextAppearSplit singleAppear={true}>
                    <MainTitle>skills</MainTitle>
                </TextAppearSplit>
            </MainTitleContainer>
            <SkillsSidebar_v2/>
            <SkillsInfoPath_v2/>
        </Backdrop>
    );
};

export default Skills;