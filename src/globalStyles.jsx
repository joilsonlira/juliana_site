import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        color: initial;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
    }
    
    body {

    background: #3197A1;

        
    }
`;

export default GlobalStyle
