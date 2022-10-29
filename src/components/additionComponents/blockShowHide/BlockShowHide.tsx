import React, {Fragment, ReactElement, useState} from 'react';
import {CSSTransition} from "react-transition-group";
import styled from 'styled-components'

const Btn = styled.button`
  position: fixed;
  top: 100px;
  left: 40px;
`

interface IBlock{
    children: ReactElement | ReactElement[]
}
const BlockShowHide = ({children} : IBlock) => {
    const [inProp, setInProp] = useState(false)
    return (
        <Fragment>
            <CSSTransition
                in={inProp}
                classNames={'my-node'}
                timeout={1000}
                unmountOnExit
            >
                {children}
                {/*<SomeText>Common</SomeText>*/}
            </CSSTransition>
            <Btn
                onClick={()=>{setInProp(!inProp)}}
            >Click</Btn>

        </Fragment>
    );
};

export default BlockShowHide;