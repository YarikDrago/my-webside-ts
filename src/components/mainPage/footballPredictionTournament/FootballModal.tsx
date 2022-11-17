import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components'
import football_data from "./football_data";
import {observer} from "mobx-react";
import { toJS } from 'mobx';
import CheckboxElem from "./CheckboxElem";
import getCellData from "./getCellData";

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

const Header = styled.header`
  position: relative;
  display: flex;
  background-color: antiquewhite;
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
const Table = styled.table`
  position: relative;
  //width: 100vw;
  min-width: 100%;
  border-collapse: collapse;
  border: 1px solid;  
  overflow-y: scroll; 
  color: antiquewhite;
  text-shadow: 2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000,
             1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000;
             
  td, tr, th {
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
  th{
    box-sizing: border-box;
    padding: 0 5px;
  }
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
    const amountRows = (football_data.footballData as IFootballTableData).tableData.amountRows
    const amountColumns = (football_data.footballData as IFootballTableData).tableData.amountColumns
    const [firstRow, setFirstRow] = useState(["#", "Date", "Status", "Command 1", "Command 2", "Round", "Result"])
    // const firstRaw = (football_data.footballData as Array<Array<string>>)[0]
    // const data = football_data.footballData as Array<Array<string>>

    useEffect(()=>{
        // if (football_data.footballData[0][0] === "none"){
        //     console.log("load new data")
        //     console.log()
        // }
        console.log(toJS(football_data.footballData))
        Object.keys((football_data.footballData as IFootballTableData).participants).forEach(part => {
            setFirstRow(prevState => [...prevState, part])
        })
    },[])

    return (
        <Basement
            imgUrl = {require('./images/football_field.jpeg').default}
        >
            <MainHeading>Football Prediction Table</MainHeading>
            <Options>
                <p>Options</p>
                {Object.keys((football_data.footballData as IFootballTableData).participants).map((participant, partIndex)=>
                    <CheckboxElem text={participant}/>
                )}
            </Options>
            <TableContainer>
                <Table>
                    {[...Array(amountRows)].map((row, rowIndex) =>{
                        if (rowIndex === 0){
                            return <Fragment>
                                <tr>{firstRow.map((column, columnIndex)=>{
                                        if (columnIndex > 6){
                                            return <th colSpan={3}>{column}</th>
                                        } else {
                                            return <th rowSpan={2}>{column}</th>
                                        }
                                    }
                                )}</tr>
                                <tr>
                                    {[...Array(Object.keys((football_data.footballData as IFootballTableData).participants).length)].map((subInfo)=>{
                                        return <Fragment>
                                            <td>Pred</td>
                                            <td>Score</td>
                                            <td>Penalty</td>
                                        </Fragment>
                                    })}
                                </tr>
                            </Fragment>
                        }else {
                            if (rowIndex >= 2){
                                return <tr>{[...Array(amountColumns)].map((column, columnIndex) =>{
                                        return <td>{getCellData(rowIndex, columnIndex)}</td>
                                    }
                                )}</tr>
                            }
                        }
                    }
                    )}

                </Table>
            </TableContainer>
        </Basement>
    );
})

export default FootballModal;