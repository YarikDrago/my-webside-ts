import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from 'styled-components'

const Basement = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: block;
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  background-color: #fcfcf5;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: grid;
  width: 100%;
  height: 50px;
  grid-template-columns: 1fr 50px;
  background-color: #95c57d;
`

const SendBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: #397f67;
  :hover{
    background-color: #23e1a1;
  }
`
const FootballChat = () => {
    // const socket = new WebSocket('ws://localhost:5000')
    const socket = new WebSocket('ws://localhost:6600/footballchat')
    const [message, setMessage] = useState('')
    const [chatMsg, setChatMsg] = useState<Array<string>>([])

    useEffect(()=>{
        socket.onopen = () => {
            console.log('Подключение установлено')
            // слушатель сообщений от сервера
            socket.onmessage =  (event)=>{
                console.log("сообщение с сервера: ", event.data)
                // setServerMessage(prevState => [...prevState, event.data])
                setChatMsg(prevState => [...prevState, event.data])
            }

        }
    },[])

    function sendMsg(){
        console.log("sending msg:", message)
        socket.send(message)
    }

    return (
        <Basement>
            {chatMsg.map((msg)=>{
                return <p>{msg}</p>
            })}
            <Footer>
                <input type="text" placeholder={'message'}
                       onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                           setMessage(e.target.value)
                       }}
                />
                <SendBtn
                    onClick = {()=> {
                        // socket.send('Hi, Mr Server!!!')
                        sendMsg()
                    }}
                >Send</SendBtn>
            </Footer>

        </Basement>
    );
};

export default FootballChat;