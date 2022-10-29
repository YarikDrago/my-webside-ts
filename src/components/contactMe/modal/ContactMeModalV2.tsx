import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components'
import {CSSTransition} from "react-transition-group";
import contactMeData from "../ContactMe_data";
import ContactForm from "./ContactForm";
import contactMe_data from "../ContactMe_data";
import MessageSendStatus from "../MessageSendStatus";
import LittleLoader from "../../Loaders/LittleLoader";
import {observer} from "mobx-react";

const Backdrop = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
  background-color: transparent;
  backdrop-filter: blur(10px);
  
  &.transition-enter{
    backdrop-filter: blur(0);
    opacity: 0;
  }
  &.transition-enter-active{
    backdrop-filter: blur(10px);
    opacity: 1;
    transition: backdrop-filter 1s linear, opacity 1s linear;
  }
  &.transition-exit{
    backdrop-filter: blur(10px);
    opacity: 1;
  }
  &.transition-exit-active{
    backdrop-filter: (0);
    opacity: 0;
    transition: backdrop-filter 1s linear, opacity 1s linear;
  }
  
  @media screen and (max-height: 610px){
      //display: block;
      align-items: flex-start;
      //background-color: darkgoldenrod;
    }
  
`

interface IContactMe{
    status: boolean
}
const ContactMeModalV2 = observer(({status}: IContactMe) => {

    useEffect(()=>{
        window.addEventListener("resize", resizeWindow)
    },[])

    function resizeWindow(){
        console.log(window.innerWidth, window.innerHeight)
    }
    return (
        <Fragment>
            <CSSTransition
                in = {status}
                classNames={'transition'}
                timein={1000}
                timeout={2000}
                unmountOnExit
            >
                <Backdrop
                    onClick={(e)=>{
                        e.stopPropagation()
                        contactMeData.setModalVisibility(false)
                    }}
                >
                    <ContactForm/>

                </Backdrop>
            </CSSTransition>
            {contactMeData.loaderVisibility && <LittleLoader loaderText={"Trying to send..."}/>}
            {contactMe_data.messageSendStatus !== 0 && <MessageSendStatus status={contactMe_data.messageSendStatus}/>}
            {/*<MessageSendStatus status={100}/>*/}
        </Fragment>


    );
})

export default ContactMeModalV2;