import axios from "axios";
import football_data from "./football_data";
import workWithData from "./workWithData";

async function getTableData(){
    console.log("call function")
    const promise = await axios.get('http://158.160.37.52:6600/football_data')
    return promise.data
}

export default getTableData