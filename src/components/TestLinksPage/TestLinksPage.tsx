import React from 'react';
import styled from 'styled-components'
import axios from "axios";

const Basement = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #a6dcee;
`
const TestLinksPage = () => {

    async function getSimpleDataFromServer(){
        // console.log("click")
        try{
            await axios.get(`https://uliantcev.ru/test`).then(res => {
                console.log("data",res.data)
            })
        }catch(e)
        {
            console.log("get table error:", e)
        }
    }

    async function getJSONPlaceholderData(){
        // console.log("click")
        try{
            await axios.get(`https://jsonplaceholder.typicode.com/users/1`).then(res => {
                console.log("data",res.data)
            })
        }catch(e)
        {
            console.log("get table error:", e)
        }
    }

    async function getServerSimpleData(){
        // console.log("click")
        try{
            await axios.get(`https://uliantcev.ru/test`).then(res => {
                console.log("data",res.data)
            })
        }catch(e)
        {
            console.log("get table error:", e)
        }
    }

    async function getServerJSONPlaceholderData(){
        // console.log("click")
        try{
            await axios.get(`https://uliantcev.ru/testhttps`).then(res => {
                console.log("data",res.data)
            })
        }catch(e)
        {
            console.log("get table error:", e)
        }
    }

    async function getServerFootballData(){
        // console.log("click")
        try{
            await axios.get(`https://uliantcev.ru/football_data`).then(res => {
                console.log("data",res.data)
            })
        }catch(e)
        {
            console.log("get table error:", e)
        }
    }


    return (
        <Basement>
            <h1>Test page to justify CORS work</h1>
            <button onClick={()=>{getJSONPlaceholderData()}}>JSONPlaceholder</button>
            <button>Football Data</button>
            <h3>Throw server</h3>
            <button onClick={()=>{getServerSimpleData()}}>Simple GET data from server</button>
            <button onClick={()=>{getServerJSONPlaceholderData()}}>JSON Placeholder</button>
            <button onClick={()=>{getServerFootballData()}}>Football Data</button>

        </Basement>
    );
};

export default TestLinksPage;