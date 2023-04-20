import React, { Fragment }  from "react";
import styled from "styled-components";

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 95vh;

    & .info{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        width: 35%;
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
`

export const Section_container = ()=>{
    return(
        <Fragment>
            <Section>
                <div className="info">
                    <h2>Título que convença o visitante a continuar lendo</h2>
                    <p>Subtítulo que desenvolva a sua proposta única de venda</p>
                </div>
                <div className="imagem">
                    <img src="./imgs/empresaria.png" alt="Imagem empresaria" />
                </div>
            </Section>
        </Fragment>
    )
}