import React from 'react';
import styled from 'styled-components'
import SocialBar_data from "./SocialBar_data";
import SocialButton_v1 from "./SocialButton_v1";

const Basement = styled.section`
  display: flex;
  box-sizing: border-box;
`

const SocialBar_v1 = () => {
    const linksData = SocialBar_data.socialLinks


    return (
        <Basement>
            {linksData.map((elem, index)=>{
                const dateKey = Date.now() + index
                return <SocialButton_v1
                    URLLink={elem.href}
                    btnImg={elem.path}
                    key={dateKey}/>
                }
            )}

        </Basement>
    );
};

export default SocialBar_v1;
