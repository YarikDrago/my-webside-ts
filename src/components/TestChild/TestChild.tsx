import React, {ReactElement} from 'react';
import styled from 'styled-components'

const Block = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 300px;
  height: 300px;
  background-color: orangered;
`
interface ITestChild{
    children: ReactElement | ReactElement[]
}
const TestChild = ({children}: ITestChild) => {
    return (
        <Block>
            {children}
        </Block>
    );
};

export default TestChild;