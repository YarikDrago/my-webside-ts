import React, {RefObject, useState} from 'react';
import styled from 'styled-components'

const Backdrop = styled.div<{opacity: number}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  opacity: ${props => props.opacity};
  //opacity: 0.5;
  //transform: translateY(-100vh);
  background-color: orange;
  pointer-events: none;
  @media screen and (max-height: 460px){
    height: 250vh
  }
`
interface IFadeBackdrop{
    start: number
    finish: number
    // refElem?: ReactElement | HTMLElement | null
    // refElem?: React.ForwardedRef<HTMLElement>
    // refElem?: Ref<HTMLElement>
    refElem?: RefObject<HTMLElement>
}
const FadeBackdrop = ({start, finish, refElem} : IFadeBackdrop) => {
    const [backdropOpacity, setBackdropOpacity] = useState(0)

    // useEffect(()=>{
    //     // console.log("ref elem", refElem?.current)
    //
    //     // return ()=>{
    //     //     window.removeEventListener("scroll", recountOpacity)
    //     // }
    //
    // },[])

    window.addEventListener("scroll",recountOpacity)

    function recountOpacity(){
        if (refElem?.current !== null && refElem?.current !== undefined) {
            const percentScrH = refElem.current.getBoundingClientRect().top/ window.innerHeight
            if (percentScrH <= start && percentScrH > finish){
                setBackdropOpacity(( -percentScrH + start) / (start - finish))
            }
            if (percentScrH > start){
                setBackdropOpacity(0)
            }
            if (percentScrH < finish){
                setBackdropOpacity(1)
            }
        }
    }


    return (
        <Backdrop opacity={backdropOpacity}/>
    );
};

export default FadeBackdrop;