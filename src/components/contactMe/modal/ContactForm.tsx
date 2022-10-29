import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import InputLine_v1 from "./InputLine";
import TestTransitionText from "./TestTransitionText";
import contactMeData from "../ContactMe_data";
import {checkForm} from "../ContactMeFnc";
import ClsBtnCrossAnime_v1 from "../../additionComponents/buttons/CloseBtn/ClBtnCrossAnimate_v1";

const StyledContactForm = styled.form`
  padding: 0px 20px 50px 20px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(#05a24a, #504303);
  font-family: Comfortaa;
  width: 300px;
  h1, h3 {
    white-space: nowrap;
    color: #affa94;
  }
  
  
  @media screen and (max-width: 600px){
    width: 100vw;
    //height: 100vh;
    border-radius: 0;
    //padding: 0;
    margin: 0;
    
    textarea{
      width: 400px;
    }
    
    @media screen and (min-height: 610px){
      height: 100vh;
    }
  }
  
  @media screen and (max-width: 400px){
    textarea{
      width: 95%;
    }
  }
  
  @media screen and (max-height: 610px){
    //display: block;
    //overflow-y: scroll;
    border-radius: unset;
  }
`
const MessageField = styled.textarea`
  color: #b5efcd;
  box-sizing: border-box;
  background-color: rgba(240, 248, 255, 0.45);
  transition: background-color 0.3s linear;
  width: 80%;
  resize: none;
  border: none;
  border-radius: 5px;
  
  &.incorrect{
    border: 1px rgba(255, 0, 0, 0.87) solid;
    ::placeholder{
      color: rgba(255, 0, 0, 0.87);
    }
  }

  ::placeholder {
    //text-align: center;
    color: wheat;
    transition: color 0.3s linear;
  }

  :focus {
    ::placeholder {
      color: rgba(181, 239, 205, 0.4);
      outline: none;
    }
  }
  
  @media screen and (max-width: 500px){
    width: 80%;
  }
`


const SendBtn = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  display: block;
  margin: 20px 0;
  padding: 0px;
  border: none;
  min-height: 25px;
  font-weight: 900;
  border-radius: 10px;
  text-align: center;
  text-justify: auto;
  justify-self: center;
  align-self: center;
  letter-spacing: 5px;
  font-family: Poppins;
  background-color: #cbaf27;
  color: #0b885e;
  //color: rgba(255, 0, 0, 0.72);
  cursor: pointer;
`



const ContactForm = () => {
    const [closeBtnVisibility, setCloseBtnVisibility] = useState(false)
    const refContactForm = useRef<HTMLFormElement>(null)

    const clsBtnStyle = {
        // backgroundColor: "red",
        position: "absolute",
        top: "5px",
        right: "5px",
    }

    useEffect(()=>{
        // setBackVisibility(true)
        changeCloseBtnVisibility()
        window.addEventListener("resize", changeCloseBtnVisibility)

    },[])

    function changeCloseBtnVisibility(){
        console.log("resize")
        if (window.innerWidth <= 600){
            setCloseBtnVisibility(true)
        }else{
            setCloseBtnVisibility(false)
        }
    }

    function stretchMsgForm(e: React.ChangeEvent){
        const elem= e.target as HTMLElement
        elem.style.height = Math.max(e.currentTarget.scrollHeight, elem.offsetHeight)+ "px"
    }

    function closeBtnClick(e: React.MouseEvent<HTMLButtonElement>){
        e.stopPropagation()
        console.log("button was clicked")
        // setBackVisibility(false)
        contactMeData.setModalVisibility(false)
        setTimeout(()=>{
            contactMeData.setModalVisibility(false)
        },1000)
    }



    return (
        <StyledContactForm
            ref = {refContactForm}
            onClick={(e)=>{
                e.stopPropagation()
            }}
            // onSubmit={(event: React.FormEvent<HTMLFormElement>)=>{checkForm(event)}}
            onSubmit={(event: React.FormEvent<HTMLFormElement>)=>{checkForm(event)}}
        >
            {closeBtnVisibility && <ClsBtnCrossAnime_v1
                size={30}
                color={'#84cc18'}
                hoverColor={'#9bfd00'}
                additionStyle={clsBtnStyle}
                clickFnc={(e: React.MouseEvent<HTMLButtonElement>)=>{closeBtnClick(e)}}
            />}
            <TestTransitionText>
                <h1 style={{fontSize: "40px"}}>Contact Form</h1>
            </TestTransitionText>
            {/*<TestTransitionText>*/}
            {/*    <h1>My Name</h1>*/}
            {/*</TestTransitionText>*/}
            <InputLine_v1 title={"Name*"} name={"name"} autoComplete={true} placeholder={"Name"}/>
            <InputLine_v1 title={"Surname"} name={"surname"} autoComplete={true} placeholder={"Surname"}/>
            <InputLine_v1 title={"E-mail*"} name={"email"} autoComplete={true} placeholder={"E-mail"}/>
            <InputLine_v1 title={"Phone"} name={"telephone"} autoComplete={true} placeholder={"Phone"}/>
            <TestTransitionText>
                <h3>Message*</h3>
            </TestTransitionText>
            <MessageField rows={3} name={'message'} autoComplete={"on"} placeholder={"Text of message"}
                onClick={(e)=>{(e.target as Element).classList.remove("incorrect")}}
                onChange={(e)=>{
                    (e.target as Element).classList.remove("incorrect")
                    stretchMsgForm(e)
                }}
            />
            <SendBtn
                type={"submit"}
                onClick={(e)=>{
                    // e.preventDefault()
                }}
            >SEND</SendBtn>
            <TestTransitionText>
                <p>* required fields</p>
            </TestTransitionText>



        </StyledContactForm>
    );
};

export default ContactForm;