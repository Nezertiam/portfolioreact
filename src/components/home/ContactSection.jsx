import { motion } from "framer-motion"
import styled from "styled-components"
import { container, fadeIn, scrollReveal, slideFromBottom } from "../animations/animations"
import { useScroll } from "../services/useScroll"
import Hide from "../ux/Hide"
import WordCarousel from "../wordCarousel/WordCarousel"
import Container from "./Container"

const ContactSection = () => {
    const [element, controls] = useScroll();
    return (
        <Contact>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="container"
            >
                <div className="hero">
                    <div className="hero-container">
                        <motion.div
                            className="word-carousel"
                            variants={fadeIn}
                        >
                            <WordCarousel />
                        </motion.div>
                        <Hide>
                            <motion.div
                                className="scroll-down-container"
                                variants={slideFromBottom}
                            >
                                <span className="fas fa-chevron-down" />
                                <p className="scroll-down-text">Scroll down</p>
                                <span className="fas fa-chevron-down" />
                            </motion.div>
                        </Hide>
                    </div>
                </div>

                <motion.div
                    className="test"
                    variants={scrollReveal}
                    initial="hidden"
                    animate={controls}
                    ref={element}
                >
                    Contact me wesh
                </motion.div>
            </motion.div>
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
    .test{
        background: blue;
        height: 100vh;
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
