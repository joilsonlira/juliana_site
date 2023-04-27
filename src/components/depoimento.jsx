import React from "react";
import styled from "styled-components";

const Depoimento = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 386px;
    height: 461px;
    padding: 20px;
    overflow: hidden;
    filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));
    background: white;
    background-image: url(./imgs/fundo_1.png);
    background-size: 90%;
    background-position-x: -100px;
    background-position-y: 50px;
    background-repeat: no-repeat;

    & header h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #DA145B;
        text-transform: capitalize;
    }

    & p{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        margin: auto 0;
    }
    & .imagem_fundo{
        position: absolute;
        right: -40%;
        top: -40%;
        animation: 60s roda ease infinite;
        @keyframes roda {
            0%{transform: rotate(0deg)}   
            50%{transform: rotate(180deg)}   
            100%{transform: rotate(360deg)}   
        }
    }
    `

export const Depoimento_container = ()=>{
    return(
        <Depoimento>
            <header>
                <h2>fermentum aliquet</h2>
                <small>placerat elit</small>
            </header>
            <p>Maecenas iaculis fermentum aliquet. Donec ut quam dignissim, iaculis purus eu, placerat elit. Mauris id rutrum purus. Praesent nec libero eu neque tincidunt vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In non porta justo, sed mollis sem.'</p>
            <img className="imagem_fundo" src="./imgs/turbilhao.png" alt="" />
        </Depoimento>
    )
}