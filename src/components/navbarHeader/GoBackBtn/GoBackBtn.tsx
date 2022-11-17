import React from 'react';
import styled from 'styled-components'
import {Link, useNavigate} from "react-router-dom";
import goBackLinkFnc from "./goBackLinkFnc";
// const img = require('./images/Arrow_in_circle.svg.png')

const StyledGoBackBtn = styled(Link)<{img: string}>`
  display: block;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  //background-color: mediumvioletred;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
  background-position: center center; 
  transform: rotate(180deg);
  transition: transform 0.3s linear;
  :hover{
    transform: scale(1.2) rotate(180deg);
  }
`
const GoBackBtn = () => {
    return (
        <StyledGoBackBtn
            to = {goBackLinkFnc(window.location.pathname)}
            img={require('./images/Arrow_in_circle.svg.png').default}
        />
    );
};

export default GoBackBtn;