import React from "react";
import { Section_container } from "../components/Section_container";
const Home = ()=>{
    return(
        <>
            <Section_container />
            <section>
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
            </section>
            <section>
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
            </section>
        </>
    )
}
export default Home