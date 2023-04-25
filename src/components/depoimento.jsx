import React from "react";
import styled from "styled-components";

const Depoimento = styled.article`
    width: 386px;
    height: 461px;
    background: white;
`

export const Depoimento_container = ()=>{
    return(
        <Depoimento>
            <p>Maecenas iaculis fermentum aliquet. Donec ut quam dignissim, iaculis purus eu, placerat elit. Mauris id rutrum purus. Praesent nec libero eu neque tincidunt vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In non porta justo, sed mollis sem.'</p>
        </Depoimento>
    )
}