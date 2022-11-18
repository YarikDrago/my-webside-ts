import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import languages_data from "../../../languages_data";
import {observe, toJS} from "mobx";
import LangCell_v1 from "./LangCell";
import {CSSTransition} from "react-transition-group";
import checkLangLocalStorage from "./checkLangLocalStorage";
import {observer} from "mobx-react";

const Basement = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
`

interface IDropdown {
    abr: string,
    flagPath: string,
}

const ChoseLang_v1 = observer( () => {
    // const [dropdownElems, setDropdownElems] = useState<Array<object>>([])
    const [dropdownElems, setDropdownElems] = useState<Array<IDropdown>>([])
    const [inProp, setInProp] = useState(false);




    const LangCellTransition = (lang: string, flagPath: string, key?: number | string, top?: number, delayIn?: number) => {
       return <CSSTransition
           in={inProp}
           key={'1'}
           classNames={'my-node'}
           timeout={1500}
           unmountOnExit
       >
           <LangCell_v1
               key={key}
               top={top}
               lang={lang}
               flagPath={flagPath}
               className={'dropdown'}
               delayIn={delayIn}
               clickFnc={()=>{
                   setInProp(false)
                   setNewLang(lang, flagPath)
               }}
           />
       </CSSTransition>
    }

    useEffect(()=>{
        checkLangLocalStorage()
        languages_data.lang.forEach((elem: {abr: string, flagPath: string})=>{
            if (elem.abr !== languages_data.activeLang.abr){
                console.log(languages_data.activeLang.abr, elem.abr)
                setDropdownElems( prevState => [...prevState, toJS(elem)])
                // console.log("elem", typeof toJS(elem),toJS(elem))
            }
        })
    },[])

    useEffect(()=>{
        setDropdownElems([])
        languages_data.lang.forEach((elem: {abr: string, flagPath: string})=>{
            if (elem.abr !== languages_data.activeLang.abr){
                console.log(languages_data.activeLang.abr, elem.abr)
                setDropdownElems( prevState => [...prevState, toJS(elem)])
            }
        })
    },[languages_data.activeLang.abr])

    useEffect(()=>{
        // console.log("prop", inProp)
    },[inProp])

    function setNewLang(newLang: string, newFlagPath: string){
        localStorage.setItem("activeLang", newLang)
        languages_data.SetNewActiveLang(newLang, newFlagPath)
    }

    return (
        <Basement>
            <LangCell_v1
                key={"main_lang_cell"}
                className={""}
                clickFnc={()=>{setInProp(!inProp)}}
                lang={languages_data.activeLang.abr}
                flagPath={languages_data.activeLang.flagPath}
                arrowUp={inProp}
            />
            {dropdownElems.map((elem, index)=>{
                const currentKey= Date.now()+ index
                return LangCellTransition(elem.abr, elem.flagPath, currentKey, (index+1)*40, 150*index)
            })}
        </Basement>
    );
})

export default ChoseLang_v1;
