import React from 'react';
import styled from 'styled-components'
import SocialBar_v1 from "./socialBar/SocialBar_v1";
import ChoseLang_v1 from "./choseLang/ChoseLang_v1";
import contactMeData from "../contactMe/ContactMe_data";

const Basement = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background: linear-gradient(180deg, rgb(46, 196, 161), rgba(255, 0, 0, 0));
`

const ContactMeBtnImg = styled.img`
  //width: 40px;
  height: 30px;
  cursor: pointer;
`

const ContactBtn = styled.button`
  //width: 50px;
  height: 100%;
  //background: url('./images/mail_black_logo.png') no-repeat top left;
  background: transparent;
  border: none;
  cursor: pointer;
`


const NavbarHeader_v1 = () => {


    return (
        <Basement>
            <SocialBar_v1/>
            <ChoseLang_v1/>
            <ContactBtn>
                <ContactMeBtnImg
                    src={require('./images/mail_black_logo.png').default}
                    onClick={()=>{contactMeData.setModalVisibility(true)}}
                />
            </ContactBtn>

        </Basement>
    );
};

export default NavbarHeader_v1;
