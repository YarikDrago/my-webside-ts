import React, {Fragment} from 'react';
import styled from 'styled-components'
import TestTransitionText from "./TestTransitionText";

const StyledLine = styled.input`
  border: none;
  border-bottom: 1px solid;
  background-color: transparent;
  text-align: center;
  color: #b5efcd;
  transition: background-color 0.3s linear, border-bottom-color 0.3s linear, color 0.3s linear;

  ::placeholder {
    text-align: center;
    color: rgba(245, 222, 179, 0.61);
    transition: color 0.3s linear;
  }

  :focus {
    outline: none;
    border: none;
    border-bottom: 1px solid;
    border-color: #6fe0ba;

    ::placeholder {
      color: rgba(181, 239, 205, 0.31);
    }
  }

  &.incorrect {
    border-bottom-color: rgba(255, 0, 0, 0.87);

    ::placeholder {
      color: rgba(255, 0, 0, 0.87);
    }
  }

  :-webkit-autofill,
  :-webkit-autofill:active,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #affa94;
    border-color: #6fe0ba;
  }
`

interface IContactLine {
    title : string,
    name: string,
    type?: string,
    autoComplete?: boolean
    placeholder?: string
}

const InputLine_v1 = ({title, name, type, autoComplete, placeholder}: IContactLine) => {
    const newType = type || "text"

    // useEffect(()=>{
    //     console.log("type", type)
    // },[])

    return (
        <Fragment>
            <TestTransitionText>
                <h3>{title}</h3>
            </TestTransitionText>
            <StyledLine type={newType} name={name} placeholder={placeholder}
                        autoComplete={autoComplete ? "on" : "off"}
                        onClick={(e: React.MouseEvent<HTMLInputElement>)=>{
                            (e.target as Element).classList.remove("incorrect")
                        }}
                        onChange={(e: React.FormEvent<HTMLInputElement>)=>{
                            (e.target as Element).classList.remove("incorrect")
                        }}
            />
        </Fragment>
    );
};

export default InputLine_v1;
