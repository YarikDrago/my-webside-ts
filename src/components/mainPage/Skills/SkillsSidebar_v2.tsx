import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import SkillCell from "./SkillCell";
import Skills_data from "./Skills_data";
import {toJS} from "mobx";

const StyledSkillsSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 350px;
  //grid-row-gap: 20px; 
  //grid-auto-rows: 100px;
  padding-right: 10px;
  grid-area: aside;
  //background-color: darkgoldenrod;
`

interface IElems{
    title: string
    path: string
    percentValue: number
}

const SkillsSidebar_v2 = () => {
    const [cellElems, setCellElems] = useState<Array<IElems>>([])

    useEffect(()=>{
        console.log("cell elems", Skills_data.skillsInfo.length)
        // Skills_data.skillsInfo.forEach((elem: IElems)=>{
        Skills_data.skillsInfo.forEach((elem: {path: string, title: string, percentValue: number})=>{
            setCellElems(prevState => [...prevState, toJS(elem)])
        })
    },[])
    return (
        <StyledSkillsSideBar>
            {cellElems.map((elem, index: number)=>{
                console.log("elem", elem.percentValue)
                return <SkillCell
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