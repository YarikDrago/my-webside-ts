import React from 'react';
import styled from 'styled-components'

const Flag = styled.div<{country: string}>`
  //width: 20px;
  height: 20px;
  margin: 0 auto;
  //border-radius: 50%;
  //background: url("https://countryflagsapi.com/png/" + ${props => props.country}) no-repeat;
   background: url('https://countryflagsapi.com/png/${props => props.country}') no-repeat;
  //background-size: cover;
  background-size: contain;
  background-position: center center;   
  //background-color: orangered;
`
const NewFlag = styled.img`
  height: 20px;
`
interface IFlag {
    country: string
}

const FootballLittleFlag = ({country}: IFlag) => {
    let countryAPI = country
    if ((/south korea/i).test(country)){
        countryAPI = "kr"
    }
    return (
        <Flag country={countryAPI}/>
        // <NewFlag src ={require(`./countries_flags/64x64/rounded/Flag_of_${countryAPI}_Flat_Round-64x64.png`).default}/>
    );
};

export default FootballLittleFlag;