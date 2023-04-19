import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import {Wrapper} from "./styles/wrapper"
import React from "react";
function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>

        <header id="main_header">
          <div id="logo">
              <img src="/logo.svg" alt="Logo" />
          </div>
          <nav id="main_menu">
              <div className="menu">
                  <a href="#">Mesa</a>
                  <a href="#">Terapia</a>
              </div>
              <div className="social">
                  <ul>
                      <li><a href="#"><img src="#" alt="IN" /></a></li>
                      <li><a href="#"><img src="#" alt="YTB" /></a></li>
                      <li><a href="#"><img src="#" alt="TK" /></a></li>
                  </ul>
              </div>
          </nav>
        </header>
      <Outlet />
      <footer id="main_footer">
        <h2>Chamada persuasiva para o formulário</h2>
        <div className="footer_container">
          <div className="footer_logo">
            <img src="#" alt="footer logo" />
          </div>
          <form className="footer_form">
            <input type="text" placeholder="Label simples" />
            <input type="text" placeholder="Label simples" />
            <input type="text" placeholder="Label simples" />
            <input type="text" placeholder="Label simples" />
            <button>Botão de conversão</button>
          </form>
        </div>
      </footer>
      
      </Wrapper>
    </Fragment>
  )
}

export default App
