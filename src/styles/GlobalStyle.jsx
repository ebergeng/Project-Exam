import { createGlobalStyle } from "styled-components";
import Oswald from "../font/Oswald-Regular.ttf";
import OswaldBold from "../font/Oswald-Bold.ttf";

const GlobalStyle = createGlobalStyle`

    @font-face {
            font-family: 'Oswald';
            src: local("Oswald"), url(${Oswald}) format("truetype");
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'Oswald';
            src: local("Oswald"), url(${OswaldBold}) format("truetype");
            font-weight: bold;
            font-style: normal;
        }

   


    :root {
        --color-background-body: #cfcfcf;
        --color-primary: #003366;
        --color-secondary: #52A49A;
        --color-accent: #E87B7B;
        --color-foreground: #333333; 
        --color-background: #F4F4F4; 
        --color-background-hover: #e0dddd; 
        --color-modal: #00336680;
        --box-shadow: -1px 1px 5px #333333;
        --btn-hover: #4d968d;
    

        --color-foreground-venue: #333333; 
        --color-background-venue: #F4F4F4; 
        --color-background-hover-venue: #e0dddd; 
        --color-text-gry-venue: #C1C1C1; 
        --color-text-venue: #333333; 


        --color-background: #333333; 
        --color-secondary-background: #464646; 
        --color-foreground-dm: #F4F4F4; 
        --color-text-toned: #C1C1C1;
        --color-text:#F4F4F4;
        --color-secondary-background-hover: #e0dddd; 

        --color-searchbar: #393939;
        --color-searchbar-hover: #888888;
        --color-searchbar-result-bg: #232323c0;
        --box-shadow-dm: -1px 1px 5px #080808b7;
        --box-shadow-hover-dm: -1px 1px 2px #080808b7;

        --color-filterbox: #6161619d;

        
        
        
        
    }


    * {
        box-sizing: border-box;
        text-decoration: none;
    }

    #root {
        min-height: 100vh;
        position: relative;
    }

    body{
        
        margin: 0;
        background-color: var(--color-background-body);
        font-family: 'Oswald', Arial, Helvetica, sans-serif; 
    }
    
    main {
        position: relative;
        min-height: 70vh;
    }
`;

export default GlobalStyle;
