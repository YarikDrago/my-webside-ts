import React, {useEffect} from 'react';
import styled from 'styled-components'
import axios from "axios";
import AuthBlock from "./clinker/AuthBlock";

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

    return (
        <Basement>
            <h1>Test Page</h1>
            <AuthBlock/>
        </Basement>
    );
};

export default TestPage;