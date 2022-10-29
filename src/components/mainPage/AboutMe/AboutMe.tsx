import React, {Fragment, useEffect, useRef} from 'react';
import styled from 'styled-components'
import FadeBackdrop from "./FadeBackdrop";
import AboutMeInfoBlock from "./AboutMeInfoBlock";
import AboutMe_data from "./AboutMe_data";
import languages_data from "../../../languages_data";
import {observer} from "mobx-react";
import TextAppearSplit from "../../additionComponents/textAppearSplit/TextAppearSplit";

const Basement = styled.section`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  overflow: hidden;
  //background-color: #070707;
  background-color: transparent;
  @media screen and (max-height: 460px){
    height: 150vh
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
  color: #0b885e;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.3rem;
  //margin-bottom: 40px;
  margin: 0;
  text-transform: uppercase; 
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 400px){
    font-size: 1.7rem;
  }
`

const AboutMe = observer(() => {
    const refBasement = useRef(null)
    let tempElem
    useEffect(()=>{
        tempElem = refBasement.current
    },[])

    return (
        <Fragment>
            <FadeBackdrop start={0.8} finish={0.4} refElem={refBasement}/>
            <Basement ref={refBasement}
            >
                <MainTitleContainer>
                    <TextAppearSplit singleAppear={true}>
                        <MainTitle >{AboutMe_data.title[languages_data.activeLang.abr as keyof object]}</MainTitle>
                    </TextAppearSplit>
                </MainTitleContainer>
                <AboutMeInfoBlock/>
            </Basement>
        </Fragment>

    );
})

export default AboutMe;