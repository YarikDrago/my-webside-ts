import React, {useEffect} from 'react';
import styled from 'styled-components'
import languages_data from '../../../languages_data';
import ShortAboutMe_data from './ShortAboutMe_data';
import {observer} from "mobx-react";
import MovingLetters from "../../additionComponents/movingLetters/MovingLetters";
import BackdropHexagonMove from "../../additionComponents/BackgroundHexagonMove/BackdropHexagonMove";

const StyledShortAboutMe = styled.section`
  //margin: 50px;
  position: relative;
  //padding: 65px 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  //background-color: black;
  text-align: center;
  font-size: 2rem;
  font-family: 'Comfortaa', cursive;
  //cursor: none;
  //cursor: pointer;
  h1{
    //color: rebeccapurple;
    margin: 10px;
    letter-spacing: 4px;
    cursor: auto;
  }
  h3 {
    font-size: 1rem;
    color: gray;
  }
`

const TextAppearBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: green;
  color: white;
  transition: transform 1s linear;
  &.scalled{
    transform: scale(10);
  }

`


const ShortAboutMe = observer(() => {

    useEffect(()=>{
        console.log("active language", languages_data.activeLang.abr, typeof languages_data.activeLang.abr)
    },[])

    // useEffect(()=>{},[languages_data.activeLang.])
    return (
        <StyledShortAboutMe>

            <BackdropHexagonMove/>
            <TextAppearBlock>
                {/*name*/}
                <MovingLetters>
                    <h1>{ShortAboutMe_data.text.name[languages_data.activeLang.abr as keyof object]}</h1>
                </MovingLetters>
                {/*surname*/}
                <MovingLetters>
                    <h1>{ShortAboutMe_data.text.surname[languages_data.activeLang.abr as keyof  object]}</h1>
                </MovingLetters>
                {/*/!*profession*!/*/}
                <h3
                    style={{margin: '0'}}
                >{ShortAboutMe_data.text.position[languages_data.activeLang.abr as keyof object]}</h3>
                {/*slogan*/}
                <MovingLetters>
                    <h1>{ShortAboutMe_data.text.slogan[languages_data.activeLang.abr as keyof object]}</h1>
                </MovingLetters>
            </TextAppearBlock>
        </StyledShortAboutMe>
    );
})

export default ShortAboutMe;