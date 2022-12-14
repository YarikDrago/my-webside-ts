import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from "axios";
import LittleLoader from "../../../Loaders/LittleLoader";
import {useNavigate} from "react-router-dom";
import football_data from "../football_data";
import {observer} from "mobx-react";
import footballBtn_data from "./footballBtn_data";
import languages_data from '../../../../languages_data';

const StyledBtn = styled.div<{imgUrl: string}>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  background-position: center center; 
  top: 50px;
  left: 0; 
  width: 100vw;
  height: 50px;
  min-height: 50px;
  //background-color: grey;
  cursor: pointer;
  color: antiquewhite;
  text-shadow: 2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000,
             1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000;
  font-family: 'Comfortaa', cursive;
  h3{
    margin: 0;  
    transition: transform 0.5s linear; 
  }
  :hover {
    h3{
      transform: scale(1.2);
      color: #f9f493;
      pointer-events: none;
    }
  }
`
const FootballBtn = observer(() => {
    const navigate = useNavigate();
    const [dataWaiter, setDataWaiter] = useState(false)
    const [goToFootballPage, setGoToFootballPage] = useState(false)
    // const [data, setData] = useState<Object>({})

    useEffect(()=>{
       football_data.setFirstURLChecked()
    },[football_data.footballData])

    useEffect(()=>{
        if (goToFootballPage){
            // console.log("go to football page")
            navigate('/football')

        }
    },[goToFootballPage])


    async function getTableData(){
        // console.log("click")
        try{
            setDataWaiter(true)
            // await axios.get(`https://uliantcev.ru/football_data`).then(res => {
            await axios.get(`${process.env.TP}://${process.env.SERVER_IP}:${process.env.MAIN_PORT}/football_data`).then(res => {
                console.log("data",res.data)
                // setData(res.data)

                setDataWaiter(false)
                football_data.setNewFootballData(res.data)
                setGoToFootballPage(true)
            })
        }catch(e)
        {
            console.log("get table error:", e)
            setDataWaiter(false)
        }
    }

    return (
        <Fragment>
            <StyledBtn
                imgUrl = {require('../images/football_field_medium.jpg').default}
                onClick={()=>{getTableData()}}
            >
                {/*<h3>Football Prediction Tournament</h3>*/}
                <h3>{footballBtn_data.text[languages_data.activeLang.abr as keyof object]}</h3>
            </StyledBtn>
            {dataWaiter && <LittleLoader loaderText={'Loading data...'}/>}
            {/*{data.length !== 0 && <FootballModal/>}*/}
        </Fragment>

    );
})

export default FootballBtn;