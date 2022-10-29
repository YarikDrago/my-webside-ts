import React from 'react';
import styled from 'styled-components'

const BasementBtn = styled.button<{size:number, hoverColor?: string}>`
  --size: ${props => props.size ? props.size : 20}px;
  width: var(--size);
  //width: 50px;
  height: var(--size);
  //height: 50px;
  //background-color: #c602f3;
  border: none;
  cursor: pointer;
  background-color: transparent;
  :hover {
    svg {
      background-color: ${props => props.hoverColor ? props.hoverColor : "#524f4f"};
    }
  }
`

const Line1 = styled.svg<{size: number, color?: string, hoverColor?: string}>`
  position: absolute;
  --size: ${props => props.size ? props.size : 20}px;
  top: 50%;
  left: 50%;
  width: var(--size);
  height: calc(var(--size) / 10);
  transform: translate(-50%, -50%) rotate(45deg);
  border-radius: calc(var(--size) / 20);
  background-color: ${props => props.color ? props.color : "#000"};
  pointer-events: none;
  transition: background-color .3s linear, transform .3s linear;
  
  &.close{
    animation: line1Anime 0.5s linear forwards;    
    @keyframes line1Anime{
      0%{
        transform: translate(-50%, -50%) rotate(45deg);
      }
      50%{
        width: var(--size);
        transform: translate(-50%, -50%) rotate(90deg);
      }
      100%{
        width: 0;
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }
`

const Line2 = styled.svg<{size: number, color?: string, hoverColor?: string}>`
  position: absolute;
  --size: ${props => props.size ? props.size : 20}px;
  top: 50%;
  left: 50%;
  width: var(--size);
  height: calc(var(--size)/10);
  transform: translate(-50%, -50%) rotate(-45deg);
  border-radius:  calc(var(--size)/20);
  background-color: ${props => props.color ? props.color : "#000"};
  pointer-events: none;
  transition: background-color .3s linear, transform .3s linear ;
  &.close{
    animation: line2Anime 0.5s linear forwards;
    @keyframes line2Anime{
      0%{
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      50%{
        width: var(--size);
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100%{
        width: 0;
      }
    }
  }
`

interface IBtn{
    size: number
    additionStyle?: object
    color?: string,
    hoverColor?: string,
    clickFnc: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const ClsBtnCrossAnime_v1 = ({size, color, hoverColor, additionStyle, clickFnc}:IBtn) => {

    function btnClick(e: React.MouseEvent<HTMLButtonElement>){
        e.stopPropagation()
        e.currentTarget.classList.add("close")
        // console.log("button was clicked", e.currentTarget.children)
        const childrenElements = e.currentTarget.children
        for (let i =0 ; i <childrenElements.length; i++){
            childrenElements[i].classList.add("close")
        }
        clickFnc(e)
    }
    return (
        <BasementBtn
            type={"button"}
            size={size}
            hoverColor={hoverColor}
            style={additionStyle}
            onClick={(e)=>{btnClick(e)}}
            // onClick={clickFnc}
        >
            <Line1 size={size} color={color}/>
            <Line2 size={size} color={color}/>
        </BasementBtn>
    );
};

export default ClsBtnCrossAnime_v1;
