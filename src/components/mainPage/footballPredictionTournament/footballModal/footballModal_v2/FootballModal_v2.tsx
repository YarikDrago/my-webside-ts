import React from 'react';
import styled from 'styled-components'

const Basement = styled.section<{imgUrl: string}>`
  display: block;
  width: 100vw;
  height: 100vh;
    background-color: #fbdcb3;
  // background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  background-position: center center;   
`

const FootballModalV2 = () => {
    return (
        <Basement
            imgUrl = {require('../../images/football_field.jpeg').default}
        >
            Football Modal v2
        </Basement>
    );
};

export default FootballModalV2;