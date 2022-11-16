import React, {useEffect} from 'react';
import styled from 'styled-components'
import football_data from "./football_data";
import {observer} from "mobx-react";

const Basement = styled.section<{imgUrl: string}>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  //justify-content: center;
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

const Header = styled.header`
  position: relative;
  display: flex;
  background-color: antiquewhite;
`
const TableContainer = styled.div`
  position: relative;
  //height: 400px;
  max-height: 600px;
  overflow: auto;
  border: 1px solid;  
  //background-color: rgba(53,171,112,0.5);
  backdrop-filter: blur(5px);
  
`
const Table = styled.table`
  position: relative;
  //width: 100vw;
  border-collapse: collapse;
  border: 1px solid;  
  overflow-y: scroll; 
  color: antiquewhite;
  text-shadow: 2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000,
             1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000;
             
  td, tr {
    border:  1px solid;
  }
  td{
    text-align: center;
    box-sizing: border-box;
    padding: 5px 10px;
  }
  tr{
    &.first-row{
      position: sticky;
      top: 0;
      left: 0;
      //transform: translateY(-50px);
    }
  }
`

const FootballModal = observer(() => {
    const firstRaw = (football_data.footballData as Array<Array<string>>)[0]
    const data = football_data.footballData as Array<Array<string>>

    useEffect(()=>{
        if (football_data.footballData[0][0] === "none"){
            console.log("load new data")
        }
    },[])

    return (
        <Basement
            imgUrl = {require('./images/football_field.jpeg').default}
        >
            <MainHeading>Football Prediction Table</MainHeading>
            <Options>Options</Options>
            {/*<Header>*/}
            {/*    {firstRaw.map((elem, index) => {*/}
            {/*        return <div>{elem}</div>*/}
            {/*    })}*/}
            {/*</Header>*/}
            <TableContainer>
                <Table>
                    {data.map((row, rowIndex) => {
                        const className = rowIndex === 0 ? "first-row" : ""
                        return <tr className={className}>{row.map((elem, index)=>{
                            if (elem === ""){
                                <td>none</td>
                            }
                            return <td>{elem}</td>
                        })}</tr>
                    })}
                </Table>
            </TableContainer>
        </Basement>
    );
})

export default FootballModal;