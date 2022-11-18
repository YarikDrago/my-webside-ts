import React, {
    ReactElement,
    useEffect,
    useRef, useState
} from 'react';
import styled, {AnyStyledComponent} from 'styled-components'
import './TextAppear.scss'

interface IAppearText{
    children: ReactElement
    animeDuration?: number
    animeDelay?: number
}

interface IStyledText{
    bgColor: string
    animeDuration?: number
}

const TextAppearOneTagV1 = ({children, animeDuration, animeDelay}: IAppearText) => {
    const animeDur = animeDuration ? animeDuration : 1
    const TextTag = children.type as AnyStyledComponent
    const childText = children.props.children
    const [bgColor, setBgColor] = useState(" black")
    const [elemClass , setElemClass] = useState("")
    const refTextElem = useRef<ReactElement>(null)
    let flag = true

    const StyledText = styled(TextTag)<IStyledText>`
    
      //background-position-x: 200px;
      //color: transparent;
      //transition: background-color 2s linear;
      &.hidden{
        color:transparent;
        background-color: transparent;
      }
      
      //background-color: transparent;
      &.animate{
        ${props => props.bgColor && `
        // background-color: transparent;
        background: linear-gradient(90deg, ${props.bgColor} 70%, #fff 80%, ${props.bgColor} 100%);
        -webkit-background-clip: text;    
        -webkit-text-fill-color: transparent;
        background-repeat: no-repeat;
        background-size: 200%;
        // background-position-x: 200%;
        animation-name: shine;
        // animation-duration: 5s;
        animation-duration: ${props.animeDuration}s;
        // animation-delay: 1s;
        // animation-iteration-count: forwards;
        

        @keyframes shine{
          0%{
            background-position-x: 200%;
            // background: linear-gradient(90deg, ${props.bgColor} 70%, #fff 80%, ${props.bgColor} 100%);
          }
          100%{
            background-position-x: 0;
            // background: linear-gradient(90deg, ${props.bgColor} 70%, #fff 80%, ${props.bgColor} 100%);
          }
        }
      `};
      
      }
      
    `

    useEffect(()=>{

        const currentElem = refTextElem.current as HTMLElement | null

        if (currentElem !== null){
            setBgColor(`${getComputedStyle(currentElem).color}`)
            setElemClass("hidden")
            // console.log("current elem class list", currentElem.classList)
            // currentElem.classList.add("appear-1")
            if (animeDelay){
                setTimeout(()=>{
                    // console.log("blabla")
                    // currentElem.classList.remove("appear-1")
                    // currentElem.classList.add("animate")
                    setElemClass('animate')

                }, animeDelay * 1000)
            } else {
                // console.log("blabla delay")
                // currentElem.classList.remove("appear-1")
                // currentElem.classList.add("oko")
                setElemClass('animate')
            }

        }
    },[])

    useEffect(()=>{
        if (elemClass === "animate" && flag){
            // console.log("again")
            flag = false
            setTimeout(()=>{setElemClass("")},3000)
        }
    },[elemClass])


    return (
        <StyledText
            // className={'appear-1'}
            className = {elemClass}
            ref = {refTextElem}
            bgColor = {bgColor}
            animeDuration = {animeDur}
        >
            {childText}
        </StyledText>
    );
};

export default TextAppearOneTagV1;