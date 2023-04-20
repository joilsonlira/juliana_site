import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import {Wrapper} from "./styles/wrapper"
import { Main_header } from "./components/Main_header";
import React from "react";
function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
      <Main_header />
        
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
