import React, {Fragment, ReactElement, useEffect, useRef, useState} from 'react';
import styled, {AnyStyledComponent} from 'styled-components'
import {CSSTransition} from "react-transition-group";

interface ITextAppear{
    children: ReactElement
    key?: any
}

const BlockMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: mediumvioletred;
`

const TextAppearOneTagV2 = ({children, key} : ITextAppear) => {
    const text = children.props.children
    const ChildTag = children.type
    const refElem = useRef(null)
    const [inProp, setInProp] = useState(false)

    const MainTag = styled(ChildTag as AnyStyledComponent)`
      background-color: orangered;
      text-transform: uppercase;

    `

    const StyledTag = styled(ChildTag as AnyStyledComponent)`
      background-size: 200%;
      background-position-x: 200%;
      &.transition-enter{
        background: linear-gradient(90deg, black 70%, #fff 80%, black 100%);
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent;
        background-repeat: no-repeat;
        background-size: 200%;
        background-position-x: 200%;
      }
      &.transition-enter-active{
        background: linear-gradient(90deg, black 70%, #fff 80%, black 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-repeat: no-repeat;
        background-size: 200%;
        background-position-x: 0;
        transition: background-color 3s linear, background-position 1s linear;
      }
      &.transition-enter-done{
        background-color: aqua;
        //text-transform: uppercase;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-repeat: no-repeat;
      }
    `

    useEffect(()=>{
        setInProp(true)
        // const elem = refElem.current as HTMLElement | null
        // if (elem !== null){
        //     // console.log("refElem", elem)
        // }

    },[])

    return (
        <Fragment>
            {children}
            <MainTag>{text}</MainTag>
            <CSSTransition
                in={inProp}
                classNames={'transition'}
                timeout={3000}
                unmountOnExit
            >
                <StyledTag
                    key={key}
                    // tagType = {children.type}
                >
                    {text}
                </StyledTag>
            </CSSTransition>
            <BlockMask></BlockMask>
        </Fragment>

    );
};

export default TextAppearOneTagV2;