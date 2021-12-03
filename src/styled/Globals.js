import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root{
        --primary-bg: rgb(2,0,36);
        --secondary-bg: #DBE2EF;
        --text-color: #fff;
        --text-secondary: #112D4E;
        --accent-color: #a9333a;
        --color-dark: #111;
        --body-font: 'Shippori Antique', sans-serif;
        --header-font: "Alfa Slab One", cursive;
    }

    html{
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Shippori Antique', sans-serif;
        background: var(--primary-bg);
    }
    
    a{
        text-decoration: none;
        color: var(--bg-dark);
    }

    

    p{
        text-align: center;
        font-weight: bold;
        width: 90%;
        font-size: 1.2rem;
        margin: 10px auto;
        text-align: center;
        font-weight: bold;
        text-shadow: 3px 3px var(--color-dark), 4px 4px var(--accent-color);
    }

    

    .link-white{
        color: var(--text-color);
    }

    
    
`;
