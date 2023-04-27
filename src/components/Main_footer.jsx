import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 0 64px;
    background: linear-gradient(295.73deg, #0D4455 -5.79%, rgba(255, 255, 255, 0) 119.58%);
    background-repeat: no-repeat;
    background-size: 100%;
    
    & h2{
        color: white;
        font-weight: 800;
        font-size: 32px;
        margin-top: 40px;
    }

    & .footer_container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 80%;

        & .footer_logo, .footer_form{
            width: 50%;
        }


        & .footer_logo{
            display: flex;
            align-items: center;
            justify-content: center;

            & .icone{
                position: absolute;
            }
            & .nome{
                z-index: 1;
            }

        }
        .footer_form{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            row-gap: 20px;

            & input{
                width: 100%;
                height: 64px;
                padding: 20px;
            }
            & button{
                margin-top: 70px;
                height: 64px;
                width: 90%;
                font-weight: 500;
                font-size: 24px;
                color: white;
                border: 2px solid #FFFFFF;
                border-radius: 50px;
                background: transparent;
            }
        }
    }
`

export const Footer_container = ()=>{
    return(
        <Footer>
            <h2>Chamada persuasiva para o formulário</h2>
            <div className="footer_container">
                <div className="footer_logo">
                    <img className="icone" src="/imgs/icone.png" alt="Logo" />
                    <img className="nome" src="/imgs/logo_footer_nome.png" alt="Logo" />
                </div>
                <form className="footer_form">
                    <input type="text" placeholder="Label simples" />
                    <input type="text" placeholder="Label simples" />
                    <input type="text" placeholder="Label simples" />
                    <input type="text" placeholder="Label simples" />
                    <button>Botão de conversão</button>
                </form>
            </div>
        </Footer>
    )
}