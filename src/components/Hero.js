import styled from 'styled-components'

const Hero = () => {

    return (
        <HeroStyled className="hero">
            <h1 className="hero__title">
                Développeur Web Junior
            </h1>
            <p className="hero__content">
                Je code en Front, je code en Back,<br/>et j'aime ça !
            </p>
        </HeroStyled>
    )
}


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
            margin-bottom: 1.5rem;
            color: var(--clr-primary);
        }
    }

`

export default Hero