import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components'
import football_data from "./football_data";
import {observer} from "mobx-react";
import CheckboxElem from "./CheckboxElem";
import FootballTable from "./FootballTable";
import LittleLoader from "../../Loaders/LittleLoader";
import axios from "axios";
import FootballChat from "./FootballChat";

const Basement = styled.section<{imgUrl: string}>`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  //flex-direction: column;
  //justify-content: center;
  grid-template-rows: 100px 50px 1fr;
  width: 100vw;
  height: 100vh;
  //min-height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  background-position: center center; 
  font-family: 'Comfortaa', cursive;
  //overflow: auto;
  overflow: hidden;
  //scroll-behavior: auto;
  //background-color: green;
`

const MainHeading= styled.h1`
  margin: 50px auto 20px;
  //margin-top: 50px; 
  color: antiquewhite;
  text-shadow: 2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000,
             1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000;
`

const Options = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: rgba(53,171,112,0.5);
`

const TableContainer = styled.div`
  position: relative;
  //height: 400px;
  height: 100%;
  //max-height: 600px;
  overflow: auto;
  border: 1px solid;  
  //background-color: rgba(53,171,112,0.5);
  backdrop-filter: blur(5px);
`

export interface IFootballTableData {
    participants : {
        totalResult: string,
        totalPenalty: string,
    },
    countries : Array<string>,
    tableData: {
        amountRows: number,
        amountColumns: number,
        table: object
    }
}

const FootballModal = observer(() => {
    const [dataWaiter, setDataWaiter] = useState(false)

    useEffect(()=>{
        if (football_data.firstURL){
            getTableData()
        }
    },[])

    async function getTableData(){
        try{
            setDataWaiter(true)
            await axios.get(`http://${process.env.SERVER_IP}:${process.env.MAIN_PORT}/football_data`).then(res => {
                setDataWaiter(false)
                // setData(res.data)
                football_data.setNewFootballData(res.data)
            })
        }catch(e)
        {
            console.log("get table error:", e)
            setDataWaiter(false)
        }
    }

    return (
        <Basement
            imgUrl = {require('./images/football_field.jpeg').default}
        >
            <MainHeading>Football Prediction Table</MainHeading>
            {Object.keys(football_data.footballData).length > 0 &&
                <Fragment>
                    <Options>
                        <p>Options</p>
                        {Object.keys((football_data.footballData as IFootballTableData).participants).map((participant)=>
                            <CheckboxElem text={participant}/>
                        )}
                    </Options>
                    <TableContainer>
                        <FootballTable/>
                    </TableContainer>
                </Fragment>
            }
            <FootballChat/>
            {dataWaiter && <LittleLoader loaderText={'Loading data...'}/>}
        </Basement>
    );
})

export default FootballModal;