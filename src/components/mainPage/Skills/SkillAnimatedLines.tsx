import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {CSSTransition} from "react-transition-group";


const Basement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  width: 200px;
  background-color: darkcyan;
`
const Line1 = styled.svg`
  --lineWidth: 15px;
  width: 100%;
  height: 200px;
  background-color: #adff00;
  clip-path: polygon(0% 100%, 100% 100%, 100% 0%, calc(100% - var(--lineWidth)) calc(var(--lineWidth)), 
    calc(100% - var(--lineWidth)) calc(100% - var(--lineWidth)),
    calc(var(--lineWidth)) calc(100% - var(--lineWidth))
  );
  
  @keyframes skill-line-draw{
    0%{
      clip-path: polygon(
          0% 100%, 
          100% 100%,
          100% calc(100% - var(--lineWidth) * 2),
          calc(100% - var(--lineWidth)) calc(100% - var(--lineWidth)), 
          calc(100% - var(--lineWidth)) calc(100% - var(--lineWidth)),
          calc(var(--lineWidth)) calc(100% - var(--lineWidth))
      );      
    }
    100%{
      clip-path: polygon(
          0% 100%, 
          100% 100%, 
          100% 0%, 
          calc(100% - var(--lineWidth)) calc(var(--lineWidth)), 
          calc(100% - var(--lineWidth)) calc(100% - var(--lineWidth)),
          calc(var(--lineWidth)) calc(100% - var(--lineWidth))
      );
    
    }
  }
    

    
  &.skill-transition-line-enter{
    background-color: orangered;
    clip-path: polygon(
      0% 100%, 
      100% 100%,
      100% calc(100% - var(--lineWidth) * 2),
      calc(100% - var(--lineWidth)) calc(100% - var(--lineWidth)), 
      calc(100% - var(--lineWidth)) calc(100% - var(--lineWidth)),
      calc(var(--lineWidth)) calc(100% - var(--lineWidth))
    );
  }
  &.skill-transition-line-enter-active{
    background-color: orange;
    
    transition: background-color 3s linear, clip-path 3s linear;
    animation: skill-line-draw 1s linear forwards;
    
  }
`
const SkillAnimatedLines = () => {
    const [inProp, setInProp]= useState(false)

    useEffect(()=>{
        setInProp(true)
    },[])

    return (
        <Basement>
            <CSSTransition
                in={inProp}
                classNames={'skill-transition-line'}
                timeout={5000}
                unmountOnExit
            >
                <Line1/>
            </CSSTransition>


        </Basement>
    );
};

export default SkillAnimatedLines;