import React from "react";
import { Section_container } from "../components/Section_container";
import { Depoimento_container } from "../components/depoimento";
const Home = ()=>{
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

            <Section_container
            divs={["info", "highlight_container"]}
            isFirst={""}
            isHighlights={"hg"}
            imagem={""} 
            direction={"column"} 
            width={"55%"} 
            text_align={"center"}
            title={"Título que convença o visitante a continuar lendo"} 
            paragraph={"Subtítulo que desenvolva a sua proposta única de venda"} />

            <Section_container
            divs={["teste", "teste"]}
            isFirst={""}
            isHighlights={""}
            imagem={""} 
            direction={"row"} 
            width={""} 
            text_align={""}
            title={""} 
            paragraph={""}>

                <Depoimento_container />
            </Section_container>
            {/* <section>
                <div className="depoimento_container">
                    <article className="depoimento">
                        <header className="depoimento_header">
                            <img src="" alt="" />
                            <h3></h3>
                        </header>
                        <div className="depoimento_info">
                        <p>Maecenas iaculis fermentum aliquet. Donec ut quam dignissim, iaculis purus eu, placerat elit. Mauris id rutrum purus. Praesent nec libero eu neque tincidunt vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In non porta justo, sed mollis sem.</p>
                        </div>
                    </article>
                    <article className="depoimento">
                        <header className="depoimento_header">
                            <img src="" alt="" />
                            <h3></h3>
                        </header>
                        <div className="depoimento_info">
                        <p>Maecenas iaculis fermentum aliquet. Donec ut quam dignissim, iaculis purus eu, placerat elit. Mauris id rutrum purus. Praesent nec libero eu neque tincidunt vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In non porta justo, sed mollis sem.</p>
                        </div>
                    </article>
                    <article className="depoimento">
                        <header className="depoimento_header">
                            <img src="" alt="" />
                            <h3></h3>
                        </header>
                        <div className="depoimento_info">
                            <p>Maecenas iaculis fermentum aliquet. Donec ut quam dignissim, iaculis purus eu, placerat elit. Mauris id rutrum purus. Praesent nec libero eu neque tincidunt vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In non porta justo, sed mollis sem.</p>
                        </div>
                    </article>
                </div>
                <div className="btn_container">
                    <button>CTA</button>
                </div>
            </section> */}
        </>
    )
}
export default Home