import React from 'react';
import styled from 'styled-components'
import PercentageRoundCanvas from "../../additionComponents/percentageRoundCanvas/PercentageRoundCanvas";
import Skills_data from "./Skills_data";

const Cell = styled.div`
  --side: 100px;
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: var(--side);
  height: var(--side);
  //background-color: orangered;
`
const SkillImg = styled.img<{scale?: number}>`
  position: absolute;
  top: 50%;
  left: 50%;
  //transform: translate(-50%, -50%) scale(0.6);  
  transform: ${props => props.scale ? `translate(-50%, -50%) scale(${props.scale})` : `translate(-50%, -50%) scale(0.6)`};  
  width: 100%;
  //height: 100%;
  overflow: hidden;
  pointer-events: none;
  transition: transform 0.3s linear;
  &.hovered{
    transform: ${props => props.scale ? `translate(-50%, -50%) scale(${props.scale+ 0.1})` : `translate(-50%, -50%) scale(0.7)`}; 
  }
`

interface ISkillCell{
    percentValue: number
    imgPath: string
    key? : number | string
    index?: number
}
const SkillCell = ({percentValue, imgPath, key, index}: ISkillCell) => {
    return (
        <Cell
            key={key}
            onMouseEnter={(e : React.MouseEvent)=>{
                if (index !== undefined){
                    Skills_data.changeActiveIndex(index)
                }
                (e.target as HTMLElement).getElementsByTagName('img')[0].classList.add('hovered')
            }}
            onMouseLeave={(e : React.MouseEvent)=>{
                (e.target as HTMLElement).getElementsByTagName('img')[0].classList.remove('hovered')
            }}
            // onMouseOver={()=>{console.log("mouse over")}}
        >
            <PercentageRoundCanvas percentage={percentValue}/>
            <SkillImg
                // onMouseEnter={()=>{console.log("mouse on img")}}
                src={require('./'+ imgPath).default}/>
        </Cell>
    );
};

export default SkillCell;