import React, {Fragment, ReactElement} from 'react';
// import TextAppearOneTagV1 from "./textAppearOneTag_v1";
import TextAppearOneTagV2 from './textAppearOneTag_v2';

type ITextAppear ={
    children: ReactElement[] | ReactElement
    appearTime?: number
    appearDelay?: number
}

// const TextAppear_v1 = ({children, appearTime, appearDelay} : ITextAppear) => {
const TextAppear_v1 = ({children} : ITextAppear) => {
    let childrenElems: Array<ReactElement>;
    if (Array.isArray(children)) {
        childrenElems = Array.from(children)
    } else {
        childrenElems = [children]
    }

    return (
        <Fragment>
            {childrenElems.map((elem, index) =>
                <TextAppearOneTagV2
                    key={Date.now() + index}
                    // animeDuration={appearTime}
                    // animeDelay = {appearDelay}
                >{elem}</TextAppearOneTagV2>
            )}
        </Fragment>
    );
};

export default TextAppear_v1;
