import React, { Fragment } from "react";
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5vh;
    background: #3197A1;

    & #logo{
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        top: 20px;
        position: relative;
        width: 200px;
        height: 200px;
        border-radius: 100%;
        border: 10px solid #3197A1;
        background: white;

    }
    & #logo img{
        /* margin-top: 50px;
        margin-left: 30px; */
        width: 100px;
        height: auto;
    }

    & #main_menu, .menu, .social ul{
        display: flex;
        z-index: 1;
        align-items: center;
        margin-top: 20px;
        column-gap: 20px;
        width: auto;
    }
    & .social ul li{
        width: 32px;
    }
    & .menu a{
        color: white;
        text-transform: uppercase;
        font-size: .8em;
        padding: 0 1.5rem;
    }
    & .menu a, .social ul li{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        border-radius: 50px;
        background-color: #3197A1;
    }
    & .barra{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5vh;
        background: #3197A1;
    }
`
export const Main_header = ()=>{
    return(
        <Fragment>
            <Header id="main_header">
            <div className="barra"></div>
            <div id="logo">
                <img src="/imgs/logo.png" alt="Logo" />
            </div>
            <nav id="main_menu">
                <div className="menu">
                    <a href="#">Mesa</a>
                    <a href="#">Terapia</a>
                </div>
                <div className="social">
                    <ul>
                        <li><a href="#"><img src="/icons/Instagram_icon_white.svg" alt="IN" /></a></li>
                        <li><a href="#"><img src="/icons/youtube_icon_white.svg" alt="YTB" /></a></li>
                        <li><a href="#"><img src="/icons/tiktok_icon_white.svg" alt="TK" /></a></li>
                    </ul>
                </div>
            </nav>
            </Header>
        </Fragment>
    )
}