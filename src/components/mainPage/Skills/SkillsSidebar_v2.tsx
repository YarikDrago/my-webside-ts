import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import SkillCell from "./SkillCell";
import Skills_data from "./Skills_data";
import {toJS} from "mobx";

const StyledSkillsSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  //height: 350px;
  height: 100%;
  width: 100px;
  margin-left: 10px;
  //padding: 10px 5px 10px 10px;
  //grid-row-gap: 20px; 
  //grid-auto-rows: 100px;
  //padding-right: 10px;
  //grid-area: aside;
  //background-color: darkgoldenrod;
  @media screen and (max-height: 500px){
      width: 75px;
  }
  @media screen and (max-height: 400px){
      width: 60px;
  }
  @media screen and (max-width: 800px){
    flex-direction: row;
    height: 100px;
    width: 100%;
    //padding: 10px 20px 0 20px;
    margin-left: 0;
    margin-bottom: 5px;
    //padding-right: 20px;
    //padding-left: 20px;
    @media screen and (max-height: 500px){
      height: 75px;      
      justify-content: space-around;
    }
  }
  @media screen and (max-width: 450px){
    height: 75px;
    width: 100%;
  }
  
  
`

interface IElems{
    title: string
    path: string
    percentValue: number
}

const SkillsSidebar_v2 = () => {
    const [cellElems, setCellElems] = useState<Array<IElems>>([])
    const refSkillsSideBar = useRef(null)
    const [prevWindowWidth, setPrevWindowWidth] = useState(window.innerWidth)
    const [skillCellSide, setSkillCellSide] = useState(0)

    useEffect(()=>{
        // console.log("cell elems", Skills_data.skillsInfo.length)
        // Skills_data.skillsInfo.forEach((elem: IElems)=>{
        Skills_data.skillsInfo.forEach((elem: {path: string, title: string, percentValue: number})=>{
            setCellElems(prevState => [...prevState, toJS(elem)])
        })
        changeSkillCellSide()
    },[])

    // window.addEventListener("resize", changeSkillCellSide)
    // window.addEventListener("resize", recountActiveSkillCellPosition)
    window.addEventListener("resize", resizeResponseSkillBox)


    function resizeResponseSkillBox(){
        console.log("resize response skill box")
        changeSkillCellSide()
        recountActiveSkillCellPosition()
    }

    function changeSkillCellSide(){
        if (refSkillsSideBar.current === null){
            return
        }
        if ((refSkillsSideBar.current as HTMLElement).offsetWidth >= (refSkillsSideBar.current as HTMLElement).offsetHeight){
            setSkillCellSide((refSkillsSideBar.current as HTMLElement).offsetHeight)
        }else{
            setSkillCellSide((refSkillsSideBar.current as HTMLElement).offsetWidth)
        }
    }

    // determine center of active skill's cell after resizing
    function recountActiveSkillCellPosition(){
        // console.log("recount active skill cell position")
        if (refSkillsSideBar.current === null) return
        const barElem = refSkillsSideBar.current as HTMLElement
        const cellsArr = barElem.getElementsByTagName('div')
        const activeCellElem = cellsArr[Skills_data.activeIndex] as HTMLElement
        const centerXOfCell = activeCellElem.offsetLeft + activeCellElem.offsetWidth / 2
        const centerYOfCell = activeCellElem.offsetTop + activeCellElem.offsetHeight / 2
        if (window.innerWidth >= 800){
            // recount for vertical lines
            console.log("padding of bar", (refSkillsSideBar.current as HTMLElement).style.paddingTop)
            Skills_data.setLine1Height(centerYOfCell)
            Skills_data.setLine1Width(centerXOfCell)
            // console.log(activeCellElem.offsetTop, activeCellElem.offsetHeight)
        } else {
            // console.log(activeCellElem.offsetLeft, activeCellElem.offsetWidth)
            // const centerXOfCell = activeCellElem.offsetLeft + activeCellElem.offsetWidth / 2
            // const centerYOfCell = activeCellElem.offsetHeight + activeCellElem.offsetHeight / 2
            Skills_data.setLine1Height(centerYOfCell)
            // Skills_data.setLine1Height(100)
            Skills_data.setLine1Width(centerXOfCell)
            // Skills_data.setLine1Width(100)
        }
        // if (window.innerHeight < 500){
        //
        // }
    }

    return (
        <StyledSkillsSideBar
            ref = {refSkillsSideBar}
        >
            {cellElems.map((elem, index: number)=>{
                // console.log("elem", elem.percentValue)
                return <SkillCell
                    skillCellSide={skillCellSide}
                    key = {Date.now() + index}
                    percentValue = {elem.percentValue}
                    imgPath = {elem.path}
                    index = {index}
                />
            }

            )}

        </StyledSkillsSideBar>
    );
};

export default SkillsSidebar_v2;