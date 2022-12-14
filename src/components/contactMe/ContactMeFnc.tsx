import React from "react";
import * as EmailValidator from "email-validator";
import axios from "axios";
import contactMe_data from "./ContactMe_data";
import contactMeData from "./ContactMe_data";

interface ITarget{
    // name: {value: string},
    name : HTMLFormElement,
    surname: HTMLFormElement,
    email: HTMLFormElement,
    telephone: HTMLFormElement,
    message: HTMLFormElement,
}

export function checkForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    let checkStatus = true
    // const highlightColor = "rgba(255,0,0,0.87)"
    const {name, surname, email, telephone, message} = e.target as typeof e.target & ITarget

    //verify name
    if (name.value === ""){
        name.classList.add("incorrect")
        checkStatus = false
    }
    //verify email
    if(EmailValidator.validate(email.value)){
        // console.log("email ok")
    } else {
        // console.log("wrong email")
        email.classList.add('incorrect')
        checkStatus = false
    }

    //verify message
    if (message.value === ""){
        message.classList.add("incorrect")
        checkStatus = false
    }
    if (checkStatus){
      // console.log("check status true")
      // contactMe_data.setLoaderVisibility(true)
      sendMessage(name.value, surname.value, email.value, telephone.value, message.value)
    }
}

async function sendMessage(name: string, surname: string, email: string, telephone: string, message: string) {
    console.log('trying to send message')
    contactMe_data.changeMessageStatus(0)
    contactMe_data.setLoaderVisibility(true)
    await axios.post(`${process.env.TP}://${process.env.SERVER_IP}:${process.env.MAIN_PORT}/send_email`, {
        "name": name,
        "surname": surname,
        "email": email,
        "telephone": telephone,
        "message": message
        //}).then(res => console.log('message was really sent in: ', res.status))
    }).then(res => {
        const emailDeliveryStatus = Number(res.status)
        if (emailDeliveryStatus == 250) {
            console.log("Good smtp status", res.status)
            contactMeData.setModalVisibility(false)
            contactMe_data.changeMessageStatus(emailDeliveryStatus)
        } else {
            console.log("Bad smtp status:", res.status)
            contactMe_data.changeMessageStatus(emailDeliveryStatus)
        }
        contactMe_data.setLoaderVisibility(false)
        return emailDeliveryStatus
        // setSmtpStatusBad(true)
        // console.log("Bad request: ", setSmtpStatusBad)

    }).catch((error) => {
        console.log("Sending Error", error)
        contactMe_data.changeMessageStatus(-1)
        contactMe_data.setLoaderVisibility(false)
        return "error"
        // setSmtpStatusBad(true)
    })
}

