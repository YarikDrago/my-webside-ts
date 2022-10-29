import React from 'react';
import styled from 'styled-components'

const Basement = styled.a`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: 0;
  margin: 0 5px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  transition: transform .3s linear;  
  //background-color: darkred;
`
const BtnImg = styled.img`
  width: 100%;
  height: 100%;
`

interface ISocialButton{
    URLLink: string,
    btnImg: string
}

const SocialButton_v1 = ({URLLink, btnImg}: ISocialButton) => {
    return (
        <Basement
            href={URLLink}
        >
            <BtnImg
                src={require('./'+ btnImg).default}
            />
        </Basement>
    );
};

export default SocialButton_v1;
