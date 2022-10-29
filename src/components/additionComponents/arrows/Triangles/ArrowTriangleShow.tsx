import React from 'react';
import styled from 'styled-components'

const StyledArrow = styled.svg<{side: number, arrowUp: boolean}>`
  --side: ${props => props.side}px;
  width: var(--side);
  height: calc(var(--side) * 0.866);
  background-color: #c39b4b;
  //transform: rotate();
  transform: rotate(${props => props.arrowUp ? 180 : 0}deg);
  transition: transform 0.3s linear, background-color 0.3s linear;
  clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
`

interface IArrow{
    side: number,
    arrowUp: boolean
}

const ArrowTriangleShow_v1 = ({side, arrowUp}: IArrow) => {
    return (
        <StyledArrow
            side={side}
            arrowUp={arrowUp}
        />
    );
};

export default ArrowTriangleShow_v1;
