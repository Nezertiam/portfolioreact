import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    
    html{
        // Couleurs
        --clr-primary: #f79424;
        --clr-primary-light: #ffb703;
        --clr-primary-dark: #ce6f04;
    
        --clr-secondary: #05beec;
        --clr-secondary-light: #8ecae6;
        --clr-secondary-dark: #006496;
    
        --clr-bg-primary: #343330;
        --clr-bg-primary-light: #63615b;
        --clr-bg-primary-font-color: #d6d6d6;
        --clr-bg-secondary: var(--clr-primary);
        --clr-bg-secondary-dark: var(--clr-primary-dark);
        --clr-bg-secondary-font-color: #000000ce;
    
        // Police
        --font-primary: Verdana, Geneva, Tahoma, sans-serif;
        --font-secondary: 'Audiowide', cursive;
    
        --h1-size: 2.2rem;
    
        // Breakpoints
        --xs: 478px;
        --s: 576px;
        --m: 768px;
        --l: 992px;
        --xl: 1200px;
        --xxl: 1400px;

        scroll-behavior: smooth;
    }


    *{
        font-family: var(--font-primary);
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    #root{
        display: grid;
        @media (min-width: 992px){
            grid-template-columns: repeat(12, 1fr);
        }
        @media (min-width: 768px) and (max-width: 991px){
            grid-template-columns: repeat(6, 1fr);
        }
        @media (max-width: 767px){
            grid-template-columns: repeat(3, 1fr);
        }
        background-color: var(--clr-bg-primary);
    }


    .skills, .contact{
        z-index: 1;
        padding-bottom: 10rem;
    }

    @media (min-width: 992px){
        .hero, .coloredSection, .skills, .contact{
            grid-column: 1/13;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        .hero, .coloredSection, .skills, .contact{
            grid-column: 1/7;
        }
    }
    @media (max-width: 767px){
        .hero, .coloredSection, .skills, .contact{
            grid-column: 1/4;
        }
    }

`

export default GlobalStyle