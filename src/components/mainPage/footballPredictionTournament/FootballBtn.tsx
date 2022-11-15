import React, { Fragment, useState } from 'react';
import styled from 'styled-components'
import axios from "axios";
import LittleLoader from "../../Loaders/LittleLoader";
// import img from './images/football_filed.jpeg'
const img = require('./images/football_field.jpeg')

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
const FootballBtn = () => {
    const [dataWaiter, setDataWaiter] = useState(false)

    async function getTableData(){
        try{
            setDataWaiter(true)
            await axios.get('http://51.250.75.222:6600/football_data').then(res => {
            // await axios.get('http://'+ `${process.env.SERVER_IP}:${process.env.MAIN_PORT}`+ +'/football_data').then(res => {
                console.log("football data:", res.data)
                setDataWaiter(false)
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
                imgUrl = {require('./images/football_field.jpeg').default}
                onClick={()=>{getTableData()}}
            >
                <h3>Football Prediction Tournament</h3>
            </StyledBtn>
            {dataWaiter && <LittleLoader loaderText={'Loading data...'}/>}
        </Fragment>

    );
};

export default FootballBtn;