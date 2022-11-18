import React, {Fragment, useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import football_data from "../football_data";
import getCellData from "./getCellData";
import {IFootballTableData} from "../footballModal/FootballModal";
import {toJS} from "mobx";
import {observer} from "mobx-react";
import languages_data from "../../../../languages_data";
import footballTableLang_data from "./footballTableLang_data";
import footballModal_data from "../footballModal/footballModal_data";

const Table = styled.table<{sideProp: boolean}>`
  position: relative;
  //width: 100vw;
  min-width: 100%;
  border-collapse: collapse;
  border: 1px solid;  
  overflow-y: scroll; 
  //transform: translateX(-100px);
  color: antiquewhite;
  text-shadow: 2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000,
             1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000;
             
  tr:nth-child(2n){
    background-color: rgba(159,135,63,0.3);
  }
             
  td, tr, th {
    border:  1px solid whitesmoke;
  }
  
  td{
    text-align: center;
    box-sizing: border-box;
    padding: 5px 10px;
    border:  1px solid whitesmoke;
    :hover{
      background-color: rgb(84,248,219);
    }
    &.column-0{
      display: ${props => props.sideProp ? "none" : "table-cell"};
    }
    }
    
  }
  tr{  
    &.first-row{
      position: sticky;
      top: 0;
      left: 0;
      height: 25px;
      border: none;
      //border:  1px solid whitesmoke;
      //transform: translateY(-50px);
      th{
        position: relative;
        border:  1px solid;
      }
      th:nth-child(2n){
      background-color: #15b250;
      }
    }
    &.second-row{
      position: sticky;
      top: 25px;
      left: 0;
      height: 25px;
      border: none;
      //border:  1px solid;
    }
    &.third-row{
      position: sticky;
      top: 50px;
      left: 0;
      height: 25px;
      border: none;
      //border:  1px solid;
     
    &.match-row{
      box-sizing: border-box;
      height: 65px;
    }
    
    th:nth-child(2n-1){
      background-color: #1c8f31;
      }
  }
  
  th{
    box-sizing: border-box;
    padding: 3px 5px;
    background-color: #1a7c1a;
    //backdrop-filter: blur(10px);
    //border:  1px solid;
    border: none;
    
    &.column-0{
      display: ${props => props.sideProp ? "none" : "table-cell"};
      //display: table-cell;
    }
  }
`

const FootballTable = observer( () => {
    const amountRows = (football_data.footballData as IFootballTableData).tableData.amountRows
    const amountColumns = (football_data.footballData as IFootballTableData).tableData.amountColumns
    const tableUnchangedColumns = [
        "#",
        footballTableLang_data.date[languages_data.activeLang.abr as keyof object],
        // footballTableLang_data.matchStatus[languages_data.activeLang.abr as keyof object],
        footballTableLang_data.command1[languages_data.activeLang.abr as keyof object],
        footballTableLang_data.command2[languages_data.activeLang.abr as keyof object],
        // footballTableLang_data.round[languages_data.activeLang.abr as keyof object],
        footballTableLang_data.matchResult[languages_data.activeLang.abr as keyof object]
    ]

    const [participantsName, setParticipantsName] = useState<Array<string>>([])

    useEffect(()=>{
        // add participants to first row
        Object.keys((football_data.footballData as IFootballTableData).participants).forEach(part => {
            setParticipantsName(prevState => [...prevState, part])
        })
    },[])


    return (
        <Table sideProp = {footballModal_data.propSide}>
            {/*построчно рендер таблицы*/}
            {[...Array(amountRows)].map((row, rowIndex) =>{
                    // создание первых трех неподвижных строк, представленны как одна
                    if (rowIndex === 0){
                        return <Fragment>
                            <tr className={'first-row'}>{tableUnchangedColumns.concat(participantsName).map((column, columnIndex)=>{
                                    // -1 - Don't show STATUS Column,
                                    // -1 - Don't show ROUND Column
                                    if (columnIndex > 6 - 2){
                                        return <th colSpan={3}>{column}</th>
                                    } else {
                                        return <th className={columnIndex === 0 ? "column-0" : ""} rowSpan={3}>{column}</th>
                                    }
                                }
                            )}</tr>
                            {/*second row*/}
                            <tr className={'second-row'}>
                                {[...Array(Object.keys((football_data.footballData as IFootballTableData).participants).length)].map((subInfo)=>{
                                    return <Fragment>
                                        <th>{footballTableLang_data.participant.prediction[languages_data.activeLang.abr as keyof object]}</th>
                                        <th>{footballTableLang_data.participant.score[languages_data.activeLang.abr as keyof object]}</th>
                                        <th>{footballTableLang_data.participant.penalty[languages_data.activeLang.abr as keyof object]}</th>
                                    </Fragment>
                                })}
                            </tr>
                            {/*third row*/}
                            <tr className={'third-row'}>
                                {participantsName.map((participant)=>{
                                    // return <th>{(football_data.footballData as IFootballTableData)[participant as keyof object]["totalResult"]}</th>
                                    return <Fragment>
                                        <th></th>
                                        <th>{(football_data.footballData as IFootballTableData).participants[participant].totalResult}</th>
                                        <th>{(football_data.footballData as IFootballTableData).participants[participant].totalPenalty}</th>
                                    </Fragment>
                                })}
                            </tr>
                        </Fragment>
                    }else {
                        if (rowIndex >= 2){
                            return <tr className={'match-row'}>{[...Array(amountColumns)].map((column, columnIndex) =>{
                                    // don't render STATUS COLUMN
                                    if (columnIndex !== 2 && columnIndex !== 5){
                                        return <td
                                            className={columnIndex === 0 ? "column-0" : ""}
                                            onMouseEnter={(e: React.MouseEvent<HTMLTableDataCellElement>)=>{
                                                // console.log("hover", e.currentTarget.parentElement.style)
                                                if ( e.currentTarget.parentElement !== null){
                                                    e.currentTarget.parentElement.style.backgroundColor = 'rgb(63,159,140)'
                                                }
                                            }}
                                            onMouseLeave={(e: React.MouseEvent<HTMLTableDataCellElement>)=>{
                                                // console.log("hover", e.currentTarget.parentElement.style)
                                                if ( e.currentTarget.parentElement !== null){
                                                    e.currentTarget.parentElement.style.backgroundColor = ''
                                                }
                                            }}
                                        >{getCellData(rowIndex, columnIndex)}</td>
                                    }
                                }
                            )}</tr>
                        }
                    }
                }
            )}
        </Table>
    );
})

export default FootballTable;