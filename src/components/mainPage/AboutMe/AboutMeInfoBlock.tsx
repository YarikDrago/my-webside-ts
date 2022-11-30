import React from 'react';
import styled from 'styled-components'
import AboutMe_data from "./AboutMe_data";

const InfoBlock = styled.div`
  position: relative;
  display: grid;
  padding-left: 10px;
  grid-template-columns: 1fr 1fr;
  
  p{
      font-size: 25px;
      //font-family: 'Russo One', sans-serif;
      font-family: 'Comfortaa', cursive;
  }
   
  .aboutme{    
    color: #0b885e;
  }
  @media screen and (min-width: 900px){
    margin-top: 50px;
    //letter-spacing: 1.5rem;
    line-height: 1.5;
  }
  @media screen and (max-width: 770px){
    grid-template-columns: 1.5fr 1fr;
  }
  @media screen and (max-width: 700px){
    grid-template-columns: 1.5fr 0;
    line-height: 1.5;
  }
  @media screen and (max-width: 500px){
    //grid-template-columns: 1.5fr 0;
    line-height: 1.2;
    
  }
  @media screen and (max-width: 400px){
    //grid-template-columns: 1.5fr 0;
    line-height: 1;
    
  }
`

const PhotoBlock= styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  object-fit: contain;
  //background-color: darkcyan;
  
`

const MyPhoto = styled.img`
  position: relative;
  width: 70%;
  max-width: 300px;
  object-fit: contain;
  border-radius: 10px;
  filter: sepia(50);
  transition: filter 1s linear;
  &:hover{
    filter: sepia(0);
  }
`
const AboutMeInfoBlock = () => {
    return (
        <InfoBlock>
            <p className={'aboutme'}>{AboutMe_data.commonText.en}</p>
            {/*<p className={'aboutme'}>Test</p>*/}
            {/*<h4 className={'aboutme'}>heading</h4>*/}
            <PhotoBlock>
                <MyPhoto src={require('./images/my_photo.jpeg').default} alt="my_photo"/>
            </PhotoBlock>
        </InfoBlock>
    );
};

export default AboutMeInfoBlock;