import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        color: initial;
        list-style: none;
        text-decoration: none;
        font-family: sans-serif;
        box-sizing: border-box;
        background: #F3EAF6;
    }
`;

export default GlobalStyle
