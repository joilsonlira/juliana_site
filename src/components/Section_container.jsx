import React, { Fragment }  from "react";
import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: ${prop => prop.direction};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95vh;
    padding: 20px 64px;
    background: #F3EAF6;

    & .info{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        width: ${prop => prop.width};
        text-align: ${prop => prop.text_align};
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

export const Section_container = (props)=>{
    return(
        <Fragment>
            <Section direction={props.direction} width={props.width} 
            text_align={props.text_align}>
                
                    {

                    (props.isFirst != "" &&
                        <>
                            <div className={props.divs[0]}>
                                <h2>{props.title}</h2>
                                <p>{props.paragraph}</p>
                            </div>
                            <div className={props.divs[1]}>
                                <img src={props.imagem} alt="" />
                            </div>
                        </>
                        
                    )
                    }
                    {
                    (props.isHighlights != "" &&
                        <>
                            <div className={props.divs[0]}>
                                <h2>{props.title}</h2>
                                <p>{props.paragraph}</p>
                            </div>
                            <div className={props.divs[1]}>
                                <div className="highlights"></div>
                                <div className="highlights"></div>
                                <div className="highlights"></div>
                                <div className="highlights"></div>
                            </div>
                        </>
                    )
                    }
                

            </Section>
        </Fragment>
    )
}