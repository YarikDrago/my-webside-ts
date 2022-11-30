import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'
import PercentageRoundCanvas from "../../additionComponents/percentageRoundCanvas/PercentageRoundCanvas";
import Skills_data from "./Skills_data";

const Cell = styled.div<{skillCellSide? : number}>`
  //--side: 100px;
  --side: ${props => props.skillCellSide ? props.skillCellSide : 100}px;
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
    skillCellSide?: number
    key? : number | string
    index?: number
}
const SkillCell = ({percentValue, imgPath, skillCellSide, key, index}: ISkillCell) => {
    const refSkillCell = useRef(null)

    // skill cell with index "0" is preselected
    useEffect(()=>{
        if (refSkillCell.current === null) return
        const cellElem = refSkillCell.current as HTMLElement
        if (index === Skills_data.activeIndex){
            // console.log("skill cell position")
            Skills_data.setLine1Height(determineCenterYOfCell(cellElem))
            Skills_data.setLine1Width(determineCenterXOfCell(cellElem))
        }
    },[])


    function determineCenterYOfCell(cellElem: HTMLElement){
        // console.log(cellElem.offsetTop)
        const parentElem = cellElem.parentElement
        if (parentElem){
            // console.log(parentElem.offsetTop, cellElem.offsetHeight/2)
            // console.log("center coordinate",  cellElem.offsetTop - parentElem.offsetTop + cellElem.offsetHeight/2)
            return cellElem.offsetTop - parentElem.offsetTop + cellElem.offsetHeight/2
        }
        return 0
    }

    function determineCenterXOfCell(cellElem: HTMLElement){
        // console.log(cellElem.offsetTop)
        const parentElem = cellElem.parentElement
        if (parentElem){
            // console.log(parentElem.offsetTop, cellElem.offsetHeight/2)
            // console.log("center coordinate",  cellElem.offsetTop - parentElem.offsetTop + cellElem.offsetHeight/2)
            return cellElem.offsetLeft - parentElem.offsetLeft + cellElem.offsetWidth/2
        }
        return 0
    }


    function removeHoverClassForArray(elemArr: HTMLCollectionOf<Element>){
        Array.from(elemArr).forEach(elem => {
            elem.classList.remove('hovered')
        })
    }

    return (
        <Cell
            ref = {refSkillCell}
            skillCellSide = {skillCellSide}
            key={key}
            onClick = {(e : React.MouseEvent)=>{
                console.log("cell clicked")
                const parentElem  = e.currentTarget.parentElement as HTMLElement
                removeHoverClassForArray(parentElem.getElementsByClassName('hovered'))
                if (index !== undefined){
                    Skills_data.changeActiveIndex(index)
                    Skills_data.setLine1Height(determineCenterYOfCell(e.target as HTMLElement))
                    Skills_data.setLine1Width(determineCenterXOfCell(e.target as HTMLElement))
                }
                (e.target as HTMLElement).getElementsByTagName('img')[0].classList.add('hovered')

            }}
            onMouseEnter={(e : React.MouseEvent)=>{
                if (index !== undefined){
                    Skills_data.changeActiveIndex(index)
                    Skills_data.setLine1Height(determineCenterYOfCell(e.target as HTMLElement))
                    Skills_data.setLine1Width(determineCenterXOfCell(e.target as HTMLElement))
                }
                (e.target as HTMLElement).getElementsByTagName('img')[0].classList.add('hovered')
            }}
            onMouseLeave={(e : React.MouseEvent)=>{
                (e.target as HTMLElement).getElementsByTagName('img')[0].classList.remove('hovered')
            }}
            // onMouseOver={()=>{console.log("mouse over")}}
        >
            <PercentageRoundCanvas percentage={percentValue} diameter={skillCellSide}/>
            <SkillImg
                // onMouseEnter={()=>{console.log("mouse on img")}}
                src={require('./'+ imgPath).default}/>
        </Cell>
    );
};

export default SkillCell;