import styled from "styled-components"
import AnimationContainer from "../ux/AnimationContainer"
import FadeIn from "../ux/FadeIn"
import Hide from "../ux/Hide"
import ScrollReveal from "../ux/ScrollReveal"
import SlideFromBottom from "../ux/SlideFromBottom"
import WordCarousel from "../wordCarousel/WordCarousel"
import Container from "./Container"

const ContactSection = () => {
    return (
        <Contact>
            <AnimationContainer className="container">
                <section className="hero">
                    <div className="hero-container">
                        <FadeIn className="word-carousel">
                            <WordCarousel />
                        </FadeIn>
                        <Hide>
                            <SlideFromBottom className="scroll-down-container">
                                <span className="fas fa-chevron-down" />
                                <p className="scroll-down-text">Scroll down</p>
                                <span className="fas fa-chevron-down" />
                            </SlideFromBottom>
                        </Hide>
                    </div>
                </section>


                <section className="links">
                    <h2 className="center">Contact</h2>
                    <ScrollReveal>
                        <div className="mail-container">
                            <h3>Any question?</h3>
                            <p>
                                Please feel free to contact me at:
                                <br />
                                <button className="mail-button">
                                    <a href="mailto:mawyn.nhek@gmail.com" className="mail">mawyn.nhek@gmail.com</a>
                                </button>
                            </p>
                        </div>
                        <FadeIn className="socials-container">
                            <h3>Socials</h3>
                            <p>
                                Don't forget to check my socials!
                            </p>
                            <div className="socials">
                                <FadeIn>
                                    <a href="https://www.linkedin.com/in/mawyn-nhek-131bb7206/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                </FadeIn>
                                <FadeIn>
                                    <a href="https://github.com/Nezertiam" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                                </FadeIn>
                            </div>
                        </FadeIn>
                    </ScrollReveal>
                </section>


            </AnimationContainer>
        </Contact>
    )
}

const Contact = styled(Container)`
    padding-top: 0;
    .hero {
        height: 100vh;
        display: grid;
        place-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
        text-align: center;
        .word-carousel {
            font-size: 2rem;
            font-weight: 500;
            letter-spacing: 3px;
        }
        .scroll-down-container {
            display: flex;
            justify-content: center;
            padding-top: 5rem;
            @media screen and (max-height: 360px) {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 45px;
            }
            .fa-chevron-down {
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                line-height: 1.5;
                animation: floatingChevron 0.75s ease-in-out infinite alternate;
            }
            .scroll-down-text {
                animation: floatingText 0.75s ease-in-out infinite alternate;
            }
        }
    }
    .links {
        padding: 0.75rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            padding-bottom: 3.5rem;
            text-align: center;
        }
        h3 {
            padding-bottom: 0.75rem;
            padding-top: 1.5rem;
        }
        .mail-container {
            padding-bottom: 2rem;
            .mail-button {
                background: none;
                border: none;
                margin: 1rem;
                margin-top: 1.5rem;
                .mail {
                    padding: 1rem;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                    text-align: center;
                    background-color: var(--primary-dark);
                    font-weight: 600;
                    letter-spacing: 1px;
                    border-radius: 50px;
                }
            }
        }
        .socials-container {
            .socials {
                display: flex;
                justify-content: center;
                .fab {
                    font-size: 3rem;
                    margin: 0.5rem;
                    margin-top: 1.5rem;
                }
            }
        }
    }

    @keyframes floatingText {
        0% {
            transform: translateY(5px)
        }
        100% {
            transform: translateY(-5px)
        }
    }
    @keyframes floatingChevron {
        0% {
            transform: translateY(3px)
        }
        100% {
            transform: translateY(-3px)
        }
    }
`

export default ContactSection
