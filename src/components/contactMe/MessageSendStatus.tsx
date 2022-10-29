import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components'
import contactMeData from "./ContactMe_data";
import contactMe_data from "./ContactMe_data";

const StatusLine = styled.div<{ status: number }>`
  position: fixed;
  box-sizing: border-box;
  display: block;
  text-align: center;
  top: 50px;
  left: 10vw;
  width: 80vw;
  //height: 100px;
  padding: 10px;
  border-radius: 10px;
  //background-color: #5caf00;
  background-color: ${props => props.status === 200 ? "#5caf00" : "#e00639"};
  
`
interface IMessage{
    status : number,
    // errorMessage?: string
}

const MessageSendLine = ({status}: IMessage) => {
    useEffect(()=>{
        // console.log("message status")
        if (contactMe_data.messageSendStatus !== 0){
            setTimeout(()=>{
                contactMeData.changeMessageStatus(0)
            },5000)
        }
    },[contactMeData.messageSendStatus])

    return (
        <StatusLine status={status}>
            {status === 200 ?
                <h1>Message was sent</h1> :
                <Fragment>
                    <h1>Message was not sent</h1>
                    <p>{contactMe_data.sendingError}</p>
                </Fragment>
                }
        </StatusLine>
    );
};

export default MessageSendLine;
