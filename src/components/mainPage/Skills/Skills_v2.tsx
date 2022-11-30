import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import TextAppearSplit from "../../additionComponents/textAppearSplit/TextAppearSplit";
import SkillsInfoPath_v2 from "./SkillsInfoPath_v2";
import SkillsSidebar_v2 from "./SkillsSidebar_v2";
import SkillsInfoPath_v3 from "./SkillsInfoPath_v3";
import SkillAnimatedLines_h_up from "./SkillAnimatedLines_h_up";
import SkillAnimatedLines_v_l from "./SkillAnimatedLines_v_l";

const Backdrop = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100vw;
  background: white;
  padding: 50px 20px 50px 50px ;
  
  @media screen and (max-width: 800px){
    padding: 50px 20px 50px 10px ;
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
  margin: 0 0 20px 0;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.3rem;
  text-transform: uppercase; 
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 400px){
    font-size: 1.7rem;
  }
`

const MainBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`

const LinesBlock = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  height: 100%;
  width: 100px;
  margin: 0 10px;
  @media screen and (max-width: 800px){
  margin: 10px 0;
  height: 50px;
  width: 100%;
 }
 
`

const SkillsV2 = () => {
    const [lineMode, setLineMode] = useState(true)

    useEffect(()=>{
        checkLineMode()
    },[])

    window.addEventListener("resize", checkLineMode)

    function checkLineMode(){
        console.log("resize percentage")
        if (window.innerWidth <= 800){
            setLineMode(false)
        } else {
            setLineMode(true)
        }
    }

    return (
        <Backdrop>
            <MainTitleContainer>
                <TextAppearSplit singleAppear={true}>
                    <MainTitle>skills</MainTitle>
                </TextAppearSplit>
            </MainTitleContainer>
            <MainBlock>
                <SkillsSidebar_v2/>
                <LinesBlock>
                    {lineMode ? <SkillAnimatedLines_v_l/> : <SkillAnimatedLines_h_up/>}
                </LinesBlock>
                <SkillsInfoPath_v3/>
            </MainBlock>

            {/*<SkillsInfoPath_v3/>*/}

        </Backdrop>
    );
};

export default SkillsV2;