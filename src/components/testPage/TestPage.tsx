import React, {useEffect} from 'react';
import styled from 'styled-components'
import axios from "axios";

const Basement = styled.section`
  position: absolute;
  display: block;
  height: 100vh;
  width: 100vw;
  background-color: #9c9c61;
`
const TestPage = () => {

    useEffect(()=>{
        console.log("test page request")
        // getTestData()

    },[])

    // async function getTestData(){
    //     try{
    //         await axios.get('http://localhost:6600/test_https').then(res => {
    //             console.log("response", res.data)
    //         })
    //     } catch (e) {
    //         console.log("data error")
    //     }
    // }

    return (
        <Basement>
            <h1>Test Page</h1>

        </Basement>
    );
};

export default TestPage;