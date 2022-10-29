import React, {Fragment, ReactElement, useEffect, useRef, useState} from 'react';
import styled, {AnyStyledComponent} from 'styled-components'
import {CSSTransition} from "react-transition-group";

const Mask = styled.div<{top : number, left: number, width: number, height: number}>`
  position: absolute;
  top: ${props=>props.top}px;
  left: ${props=>props.left}px;
  width: ${props=>props.width}px;
  height: ${props=>props.height}px;
  opacity: 1;
`

interface IText {
    children: ReactElement
}

interface IAnimatedTag{
    bgColor: string
}

const TestTransitionText = ({children} : IText) => {
    const animationStartDelay = 1000
    const animationDuration = 3000
    const DynamicTag = children.type
    const refMainTag = useRef(null)
    const text = children.props.children
    const [fontColor, setFontColor] = useState("black")
    const [inProp, setInProp] = useState(false)
    const [mainTagClass, setMainTagClass] = useState("")
    const [maskTop, setMaskTop] = useState(0)
    const [maskLeft, setMaskLeft] = useState(0)
    const [maskWidth, setMaskWidth] = useState(0)
    const [maskHeight, setMaskHeight] = useState(0)
    const [elemStyle, setElemStyle] = useState({})
    // if (children !== null){
    //     setElemStyle(children.props.style)
    // }


    useEffect(()=>{
        const mainElem = refMainTag.current as HTMLElement | null

        setMainTagClass("hidden")

        if (mainElem !== null){
            // setElemStyle(mainElem.style)
            setFontColor(`${getComputedStyle(mainElem).color}`)
            console.log("main elem", mainElem.offsetTop, mainElem.offsetLeft, mainElem.offsetWidth, mainElem.offsetHeight)
            console.log("font height", children)
            setMaskTop(mainElem.offsetTop)
            setMaskLeft(mainElem.offsetLeft)
            setMaskWidth(mainElem.offsetWidth)
            setMaskHeight(mainElem.offsetHeight)
        }
        setTimeout(()=>{
            setInProp(false)
            setInProp(true)
        },animationStartDelay)
        setTimeout(()=>{
            setMainTagClass("")
            setInProp(false)
        }, animationDuration + animationStartDelay)
    },[])

    const MainTag = styled(DynamicTag as AnyStyledComponent)`
       box-sizing: border-box;
       //background-color: darkgoldenrod;
       transition: opacity 0.3s linear;
       &.hidden{
        opacity: 0;
       }
    `

    const StyledTag = styled(DynamicTag as AnyStyledComponent)<IAnimatedTag>`
        margin: 0;
        //background: linear-gradient(90deg, yellow 70%, white 80%, yellow 100%);
        ${props => props.bgColor && ` 
            background: linear-gradient(90deg, ${props.bgColor} 70%, white 80%, ${props.bgColor} 100%);
        `};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200%;
        background-position: 0;
        opacity: 0;
        background-repeat: no-repeat;
        
        &.transitionText-enter{
          opacity: 1;
          background-position-x: 200%;
        }
        &.transitionText-enter-active{
          background-position-x: 0;
          transition: opacity 2s linear, background-position 1s linear;          
        }
        &.transitionText-enter-done{
          opacity: 1;
        }
          
    `

    return (
        <Fragment>
            <MainTag
                style={elemStyle}
                className={mainTagClass}
                ref = {refMainTag}
            >
                {text}
            </MainTag>
            <Mask top={maskTop} left={maskLeft} width={maskWidth} height={maskHeight}>
                <CSSTransition
                    in={inProp}
                    timeout={inProp ? animationDuration : 0}
                    classNames={'transitionText'}
                    mountOnEnter
                    unmountOnExit
                >

                    <StyledTag bgColor={fontColor}>
                        {text}
                    </StyledTag>

                </CSSTransition>
            </Mask>

        </Fragment>

    );
};

export default TestTransitionText;