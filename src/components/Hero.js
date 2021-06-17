import styled from 'styled-components'
import { motion } from "framer-motion";
import { heroTitleAnimation } from "../animations"

const Hero = () => {

    return (
        <HeroStyled className="hero">
            <Hide>
                <motion.h1 variants={ heroTitleAnimation } className="hero__title">
                    Développeur Web Junior
                </motion.h1>
            </Hide>
            <Hide>
                <motion.p variants={ heroTitleAnimation } className="hero__content">
                    Je code en Front, je code en Back,<br/>et j'aime ça !
                </motion.p>
            </Hide>
        </HeroStyled>
    )
}

const Hide = styled.div`
    overflow: hidden;
    margin-bottom: 1.5rem;
`


const HeroStyled = styled.header`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: var(--clr-bg-primary);

    & .hero{
        &__content{
            color: var(--clr-bg-primary-font-color);
            font-family: var(--font-primary);
        }
    
        &__title{
            font-family: var(--font-secondary);
            font-size: var(--h1-size);
            color: var(--clr-primary);
            overflow: hidden;
        }
    }

`

export default Hero