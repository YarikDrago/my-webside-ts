import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import SocialBar_v1 from "./socialBar/SocialBar_v1";
import ChoseLang_v1 from "./choseLang/ChoseLang_v1";
import contactMeData from "../contactMe/ContactMe_data";
import GoBackBtn from "./GoBackBtn/GoBackBtn";
import {useLocation, useNavigate} from "react-router";

const Basement = styled.section<{headerVisibility : boolean}>`
  position: fixed;
  left: 0;
  //top: 0;
  top: ${props => props.headerVisibility ? '0px' : '-50px' };
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background: linear-gradient(180deg, rgb(46, 196, 161), rgba(255, 0, 0, 0));
  transition: top  0.3s linear;
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
    const [currentURL, setCurrentURL] = useState('/')
    const location = useLocation()
    const [headerVisibility, setHeaderVisibility] = useState(true)
    const refScrollYPos = useRef(0)


    useEffect(()=>{
        // console.log("location", window.location.pathname)
        // console.log("navigate", location.pathname)
        setCurrentURL(location.pathname)
        refScrollYPos.current = window.pageYOffset
        window.addEventListener('scroll', showHideHeader)
    },[location.pathname])

    function showHideHeader(){
        if (refScrollYPos.current < window.pageYOffset){
            setHeaderVisibility(false)
        }
        if (refScrollYPos.current > window.pageYOffset){
            setHeaderVisibility(true)
        }
        refScrollYPos.current = window.pageYOffset
    }

    return (
        <Basement headerVisibility={headerVisibility}>
            {currentURL === '/' && <SocialBar_v1/>}
            {currentURL !== '/' && <GoBackBtn/>}
            <ChoseLang_v1/>
            <ContactBtn>
                <ContactMeBtnImg
                    src={require('./images/mail_black_logo.png').default}
                    onClick={()=>{
                        console.log("clicked")
                        contactMeData.setModalVisibility(true)}
                    }
                />
            </ContactBtn>

        </Basement>
    );
};

export default NavbarHeader_v1;
