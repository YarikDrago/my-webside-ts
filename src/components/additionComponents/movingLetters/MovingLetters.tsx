import React, {ReactElement, useEffect, useState} from 'react';
import styled from 'styled-components'
import {observer} from "mobx-react";
import languages_data from "../../../languages_data";


const StyledLetter = styled.span`  
  display: inline-block;
  //color: yellow;
  // color: ${props => props.color ? props.color : '#00000'};
  //display: block;
  //white-space: pre;
  //word-break: keep-all;
  transition: color .3s linear;
`
const Word = styled.span`
 display: inline-block;
  white-space: nowrap;
`

interface IMovingLetters{
    children: ReactElement | HTMLElement | null
    style?: React.CSSProperties
    specColor?: string
}
const MovingLetters = observer(({children}: IMovingLetters) => {
    const LetterTag = (children as ReactElement).type
    const elemStyle = (children as ReactElement).props.style
    const text = (children as ReactElement).props.children
    const [elemsData, setElemsData] = useState<Array<string[]>>([])
    //change to false after all
    // activate after adding of appearing condition
    // const [inActive, setInActive] =  useState(true)
    const inActive = true

    useEffect(()=>{
        SeparateTextToWords(text)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        // console.log("language has been changed")
        setElemsData([])
        SeparateTextToWords(text)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[languages_data.activeLang.abr])

    useEffect(()=>{
        // console.log("elems data", elemsData)
    },[elemsData])

    function SeparateTextToWords(t: string){
        const words = t.split(" ")
        // console.log("words", words)
        words.forEach((elem)=>{
            setElemsData(prevState => [...prevState, SeparateWordToLetters(elem)])
        })
    }

    function SeparateWordToLetters(w: string){
        const letters = w.split("")
        // console.log("letters", letters)
        return letters
    }

    function letterHover (letter: HTMLElement | null){
        // console.log("letter hover")
        const startAnime = Date.now()
        requestAnimationFrame(Anime)
        function Anime(){
            if (Date.now()- startAnime >= 1000){
                // cancelAnimationFrame(Anime)
            } else {
                if (letter !== null){
                    letter.style.transform = `scale( ${1+ 0.5  * (1 - (Date.now() - startAnime)/1000) *
                    (Math.sin((Date.now()- startAnime) / 200 * 1 *  Math.PI - Math.PI/2)+1)},1)`
                }
                requestAnimationFrame(Anime)
            }
        }
    }

    function renderElems(data : Array<string[]>){
        // console.log("data", data)
        return data.map((word, wordIndex) => {
            const spannedWordInner = word.map((letter, letterIndex) => {
                return <StyledLetter
                    // style = {style}
                    key = {Date.now() + 1000 + letterIndex}
                        onMouseOver={(e: React.MouseEvent)=>{
                        // console.log("mouse over", status, inActive)
                        // addition condition to activate wobbling of text after appear
                        if (inActive){
                            (e.target as HTMLElement).style.color = "red"
                            letterHover(e.target as HTMLElement)
                        }
                    }}
                    onMouseLeave={(e: React.MouseEvent)=>{
                        (e.target as HTMLElement).style.color = ""
                    }}
                >{letter}</StyledLetter>
            })
            const spannedWord = <Word
                // key = {"word"+toString(Date.now()+ wordIndex)}
            >{spannedWordInner}</Word>
            if (wordIndex+1 !== elemsData.length){
                return [spannedWord, " "]
            } else {
                return [spannedWord]
            }
        })
    }



    return (
        <LetterTag
            style = {elemStyle}
        >
            {renderElems(elemsData)}
        </LetterTag>
    );
})

export default MovingLetters;