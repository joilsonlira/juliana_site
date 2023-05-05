import React from "react";
import { Section_container } from "../components/Section_container";

const Mesa = ()=>{
    return(
        <>
            <Section_container
            divs={["info", "imagem"]}
            isFirst={"first"}
            isHighlights={""}
            imagem={"./imgs/empresaria.png"} 
            direction={"row"}  
            width={"35%"} 
            text_align={"left"} 
            title={"Título que convença o visitante a continuar lendo"} 
            paragraph={"Subtítulo que desenvolva a sua proposta única de venda"} />
            <Section_container/>
        </>
    )
}
export default Mesa;