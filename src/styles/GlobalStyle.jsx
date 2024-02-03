import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #003366;
        --color-secondary: #52A49A;
        --color-accent: #E87B7B;
        --color-foreground: #F4F4F4; 
        --color-background-hover: #e0dddd; 
        --color-background: #333333; 
        --color-text-gry: #C1C1C1; 
        --color-text-white: #F4F4F4; 
        --color-modal: #00336680;
        --box-shadow: -1px 1px 5px #333333;
        --btn-hover: #4d968d;


        --color-background-dm: #2A2A2A; 
        --color-foreground-dm: #F4F4F4; 
        --color-text-toned-dm: #C1C1C1;
        --color-text-dm:#F4F4F4;
        --color-background-hover-dm: #3d3d3d; 


        --color-searchbar-dm: #393939;
        --color-searchbar-hover-dm: #888888;
        --color-searchbar-result-bg-dm: #232323c0;
        --box-shadow-dm: -1px 1px 5px #080808b7;
        --box-shadow-hover-dm: -1px 1px 2px #080808b7;

        --color-filterbox-dm: #6161619d;

        

    }


    * {
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        margin: 0;
        height: 100vh;
        background-color: var(--color-background-dm);
    }
    
    main {
        position: relative;
        height: 200vh;
    }
`;

export default GlobalStyle;
