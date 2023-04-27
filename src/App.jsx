import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import {Wrapper} from "./styles/wrapper"
import { Main_header } from "./components/Main_header";
import { Footer_container } from "./components/Main_footer";
import React from "react";
function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
      <Main_header />
        
      <Outlet />

      <Footer_container />
      </Wrapper>
    </Fragment>
  )
}

export default App
