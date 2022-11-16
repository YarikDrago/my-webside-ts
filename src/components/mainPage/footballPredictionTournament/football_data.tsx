import {makeAutoObservable} from "mobx";

class football_data{
    constructor() {
        makeAutoObservable(this)
    }
    footballData: Array<Array<string>> = [
        ["none", "none"],
        ["none", "none"],
        ["none", "none"],
        ["none", "none"],
    ]

    setNewFootballData(newData: Array<Array<string>>){
        const amountColumns = newData[0].length
        console.log("amount of columns", amountColumns)
        const amountRows = newData.length
        newData.map((row, rowIndex)=>{
            for(let i = 0; i< amountColumns; i++){
                console.log(rowIndex, i, row[i])
                if (row[i] === "" || row[i] === undefined){
                    row[i] = " "
                }
            }
            // if (row.length !== amountColumns){
            //     console.log("dif", rowIndex, amountColumns - row.length)
            //     // for (let i = 0; i < amountColumns - row.length; i++){
            //     //     row.push("x")
            //     // }
            // }
        })
        this.footballData = newData
    }
}

export default new football_data()