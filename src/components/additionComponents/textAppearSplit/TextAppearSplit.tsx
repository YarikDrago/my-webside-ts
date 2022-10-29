import React, {Fragment, ReactElement, useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import {CSSTransition} from "react-transition-group";


const Path1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  
  &.split-transition-text-enter{
    opacity: 0;
    transform: translate(-50%, 50%);
  }
  &.split-transition-text-enter-active{
    transform: translate(0, 0);
    opacity: 1;
    transition: background-color 1s linear, transform 1s linear, opacity 0.3s linear;
  }
  &.split-transition-text-enter-active{
    opacity: 1;
  }
`

const Path2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 100%, 100% 0%, 100% 100%);
  
  &.split-transition-text-enter{
    transform: translate(50%, -50%);
  }
  &.split-transition-text-enter-active{
    transform: translate(0, 0);
    transition: background-color 1s linear, transform 1s linear;
  }
  
`

interface ITextAppearSplit{
    children: ReactElement
    singleAppear?: boolean
}
const TextAppearSplit = ({children, singleAppear}: ITextAppearSplit) => {
    const [inProp, setInProp] = useState(false)
    const [mainTagStyle, setMainTagStyle] = useState({color: "transparent"})
    const refMainText = useRef(null)

    const appearIntersectionOptions = {
        threshold: 1
    }

    const appearIntersectionScroll = new IntersectionObserver( (entries)=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                if (!singleAppear) {
                    setMainTagStyle({color: "transparent"})
                }
                // return;
            }else {
                setInProp(true)
                setTimeout(()=>{
                    setMainTagStyle({color: ""})
                },1400)
                setTimeout(()=>{
                    setInProp(false)
                },1500)

                if (singleAppear){
                    const textElem = refMainText.current as HTMLElement | null
                    if (textElem !== null){
                        appearIntersectionScroll.unobserve(textElem)
                    }
                }
            }
        })
    }, appearIntersectionOptions)


    useEffect(()=>{
        const textElem = refMainText.current as HTMLElement | null
        if (textElem !== null){
            appearIntersectionScroll.observe(textElem)
        }
    },[])

    const ChildTag = children.type
    return (
        <Fragment>
            <ChildTag
                ref={refMainText}
                style={mainTagStyle}>
                {children.props.children}
                <CSSTransition
                    in={inProp}
                    classNames={'split-transition-text'}
                    timeout={inProp ? 1500 : 0}
                    unmountOnExit
                >
                    <Path1><ChildTag>{children.props.children}</ChildTag></Path1>
                </CSSTransition>
                <CSSTransition
                    in={inProp}
                    classNames={'split-transition-text'}
                    timeout={inProp ? 1500 : 0}
                    unmountOnExit
                >
                    <Path2><ChildTag>{children.props.children}</ChildTag></Path2>
                </CSSTransition>
            </ChildTag>
        </Fragment>
    );
};

export default TextAppearSplit;