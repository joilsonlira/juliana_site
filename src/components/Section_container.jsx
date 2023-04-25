import React, { Fragment }  from "react";
import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: ${prop => prop.direction};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95vh;
    padding: 20px 0;

    & .info{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        width: ${prop => prop.width};
        text-align: ${prop=> prop.text_align};
    }
    & .info h2{
        font-size: 48px;
        color: #431525;
    }
    & .info p{
        font-size: 32px;
        font-weight: 500;
        color: #3197A1;
    }

    & .imagem{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65%;
        height: 100%;
    }
    
    & .imagem img{
        width: auto;
        height: 100%;
    }

    & .highlight_container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    & .highlights{
        width: 264px;
        height: 264px;
        /* filter: drop-shadow(10px 0 0.75rem crimson); */
        clip-path: polygon(
            50% 0%, 
            80% 10%, 
            100% 35%, 
            100% 70%, 
            80% 90%, 
            50% 100%, 
            20% 90%, 
            0% 70%, 
            0% 35%, 
            20% 10%
        );
        background: white;
    }
`

export const Section_container = ()=>{
    return(
        <Fragment>
            <Section direction={"row"}  width={"35%"} text_align={"left"}>
                <div className="info">
                    <h2>Título que convença o visitante a continuar lendo</h2>
                    <p>Subtítulo que desenvolva a sua proposta única de venda</p>
                </div>
                <div className="imagem">
                    <img src="./imgs/empresaria.png" alt="Imagem empresaria" />
                </div>
            </Section>
            <Section direction={"column"} width={"55%"} text_align={"center"}>
                <div className="info">
                    <h2>Lista apresentando mais benefícios da sua oferta</h2>
                    <p>Texto apresentando os principais benefícios da sua oferta em tom leve, porém objetivo e claro.</p>
                </div>
                <div className="highlight_container">
                    <div className="highlights"></div>
                    <div className="highlights"></div>
                    <div className="highlights"></div>
                    <div className="highlights"></div>
                </div>
            </Section>
        </Fragment>
    )
}