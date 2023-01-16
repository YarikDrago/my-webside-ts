import React from 'react';
import axios from "axios";

const TestApi = () => {
    async function getRequest(){
        await axios.get(`http://api.clinker.online/User/Get`).then((res) => {
            console.log("data",res.status)
            console.log("data",res.data)
        })
    }
    return (
        <div>
            <h1>Test API</h1>
            <button
                onClick={()=>{getRequest()}}
            >Test</button>
        </div>
    );
};

export default TestApi;