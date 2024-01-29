import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #003366;
        --color-secondary: #52A49A;
        --color-accent: #E87B7B;
        --color-background: #F4F4F4; 
        --color-background-hover: #e0dddd; 
        --color-foreground: #333333; 
        --color-text: #333333; 
        --color-modal: #00336680;
        --box-shadow: -1px 1px 5px #333333;
        --btn-hover: #4d968d;
    }

    * {
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        margin: 0;
        height: 100vh;
    }
    
    main {
        position: relative;
    }
`;

export default GlobalStyle;
