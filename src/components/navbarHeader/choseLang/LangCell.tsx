import React from 'react';
import styled from 'styled-components'
import ArrowTriangleShow_v1 from "../../additionComponents/arrows/Triangles/ArrowTriangleShow";

const StyledCell = styled.li<{top?: number, delayIn?: number}>`
    display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin: 0;
  padding: 0;
  width: 100px;
  height: 30px;
  background-color: rgba(17, 17, 17, 0.98);
  color: #0bbba1;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s linear;
  overflow: hidden;
  &.dropdown {
    position: absolute;
    //opacity: 0.5;
    left: 0;
    //background: orangered;
    top: ${props => props.top}px;
    &.my-node-enter {
      opacity: 0;
      left: -100px;
      //transition-delay: 1s;
      //background-color: green;
    }

    &.my-node-enter-active {
      opacity: 1;
      left: 0;
      //transition: background-color 1s, left 1s ease-in-out;
      //background-color: #84ff00;
      transition-property: left, opacity;
      transition-timing-function: linear;
      transition-duration: 1s, 1s;
      //transition-delay: 1s;
      transition-delay: ${props => props.delayIn}ms;
    }

    &.my-node-enter-done {
      opacity: 1;
      //background-color: blue;
      transition: background-color 1s linear;
    }

    &.my-node-exit {
      opacity: 1;
    }

    &.my-node-exit-active {
      opacity: 0;
      transition: opacity 1000ms;
    }
  }

  :hover {
    background-color: #044d42;
  }
  p {
    margin: 0;
    vertical-align: center;
    pointer-events: none;
    line-height: normal;
  }
`

const Flag = styled.img`
  height: 20px;
`

interface ILangCell{
    key?: number | string,
    className?: string,
    clickFnc?: ()=> void,
    lang: string,
    flagPath: string,
    arrowUp?: boolean,
    top?: number
    delayIn? : number
}

const LangCell_v1 = ({key, className, clickFnc, lang, flagPath, arrowUp, top, delayIn}:ILangCell) => {
    return (
        <StyledCell
            key={key}
            className={className}
            onClick={clickFnc}
            top={top}
            delayIn={delayIn}
        >
            <p>{lang}</p>
            <Flag src={flagPath} alt={"flag"}/>
            {
                arrowUp !== undefined &&
                <ArrowTriangleShow_v1 side={20} arrowUp={arrowUp}/>
            }
        </StyledCell>
    );
};

export default LangCell_v1;

