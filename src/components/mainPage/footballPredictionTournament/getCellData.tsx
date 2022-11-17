import football_data from "./football_data";
import {toJS} from "mobx";
import {IFootballTableData} from "./FootballModal";
import React, { Fragment } from "react";
import NumberFormatOptions = Intl.NumberFormatOptions;
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import DateTimeFormatPart = Intl.DateTimeFormatPart;
import DateTimeFormat = Intl.DateTimeFormat;
import FootballLittleFlag from "./FootballLittleFlag";

interface ICell{
    row: number,
    column: number,
    rowIndex?: string | null,
    matchDate?: string | null,
    matchStatus?: string | null,
    command1?: string | null,
    command2?: string | null,
    round?: string | null,
    matchResult?: string | null,
    participant?: string | null,
    prediction?: string | null,
    point?: string | null,
    penalty?: string | null
}

function getCellData(row: number, col: number){
    const cellData = toJS(Object.values(((football_data.footballData as IFootballTableData).tableData.table as object))
        .find((elem: ICell) => elem.row === row && elem.column === col )) as ICell
    // console.log("cell data", cellData.row, cellData.column)
    // console.log("cell data", cellData)
    if (cellData.rowIndex){
        return cellData.rowIndex
    }
    if (cellData.matchDate){
        return recountDate(cellData.matchDate)
    }
    if (cellData.matchStatus){
        return cellData.matchStatus
    }
    if ("command1" in cellData){
        if (cellData.command1){
            return formCommandCell(cellData.command1)
        } else {
            return "unknown"
        }
    }
    if ("command2" in cellData){
        if (cellData.command2){
            return formCommandCell(cellData.command2)
        } else {
            return "unknown"
        }
    }

    if ("round" in cellData){
        if (cellData.round){
            return cellData.round
        } else {
            return "-"
        }
    }

    if ("matchResult" in cellData){
        if (cellData.matchResult){
            return cellData.matchResult
        } else {
            return "-"
        }
    }

    if ("prediction" in cellData){
        if (cellData.prediction){
            return cellData.prediction
        } else {
            return "-"
        }
    }

    if ("point" in cellData){
        if (cellData.point){
            return cellData.point
        } else {
            return "-"
        }
    }

    if ("penalty" in cellData){
        if (cellData.penalty){
            return cellData.penalty
        } else {
            return "-"
        }
    }


    return `r${row}c${col}`
}


function recountDate(date: string){
    const newDate = new Date(Date.parse(date))
    const options1: Intl.DateTimeFormatOptions = {
        day: "numeric", month: "numeric", year: "numeric"
    };
    const options2: Intl.DateTimeFormatOptions = {
        hour: "2-digit", minute: "2-digit", hour12: false,
    };
    return <Fragment>
        <p style={{whiteSpace: "nowrap"}}>{newDate.toLocaleString('ru', options1).toString()}</p>
        <p style={{whiteSpace: "nowrap"}}>{newDate.toLocaleString('en-US', options2).toString()}</p>
    </Fragment>
}

function formCommandCell(country: string | null){
    // console.log("country", country)
    if (country === null){
        return "unknown"
    }
    return <Fragment>
        <FootballLittleFlag country={country}/>
        <p>{country}</p>
    </Fragment>
}

export default getCellData