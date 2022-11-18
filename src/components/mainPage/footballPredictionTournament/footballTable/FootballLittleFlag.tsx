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
    );
};

export default FootballLittleFlag;