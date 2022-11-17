import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components'
import football_data from "./football_data";
import getCellData from "./getCellData";
import {IFootballTableData} from "./FootballModal";
import {toJS} from "mobx";

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

const FootballTable = () => {
    const amountRows = (football_data.footballData as IFootballTableData).tableData.amountRows
    const amountColumns = (football_data.footballData as IFootballTableData).tableData.amountColumns
    const [firstRow, setFirstRow] = useState(["#", "Date", "Status", "Command 1", "Command 2", "Round", "Result"])

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
    );
};

export default FootballTable;