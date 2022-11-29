import React from 'react';
import styled from 'styled-components'

const Basement = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: #4343ea; 
  h1{
    font-size: 2rem;
  }
  h3{
    color: #43ead1; 
  }
`
const ErrorPage = () => {
    return (
        <Basement>
            <h1>OOOOpsss!</h1>
            <h3>Page not found!</h3>
        </Basement>
    );
};

export default ErrorPage;