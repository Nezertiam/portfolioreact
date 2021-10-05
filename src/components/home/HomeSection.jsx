import styled from "styled-components";
import Container from "./Container";
import { motion } from "framer-motion";
import { containerHome } from "../animations/animations"
import Hide from "../ux/Hide";

const HomeSection = () => {

    const item = {
        hidden: { y: 200 },
        show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } }
    }

    const itemFromRight = {
        hidden: { x: 300 },
        show: { x: 0, transition: { duration: 0.75, ease: "easeOut" } }
    }

    return (
        <Home>
            <motion.div
                variants={containerHome}
                initial="hidden"
                animate="show"
                className="container"
            >
                <section>
                    <Hide>
                        <motion.p
                            className="title orange"
                            variants={itemFromRight}
                        >
                            Portfolio
                        </motion.p>
                    </Hide>
                </section>
                <section className="name">
                    <Hide>
                        <motion.p
                            variants={item}
                        >
                            Mawyn Nhek
                        </motion.p>
                    </Hide>

                    <Hide>
                        <motion.p
                            className="orange"
                            variants={item}
                        >
                            Fullstack Developer
                        </motion.p>
                    </Hide>
                </section>

            </motion.div>
        </Home>
    )
}


const Home = styled(Container)`
    .name{
        margin-bottom: 2.5rem;
        @media screen and (min-width: 480px) {
            margin-left: 50px;
        }
        @media screen and (min-height: 700px) {
            margin-bottom: 6rem;
        }

        &>:first-child {
            font-size: 2rem;
            @media screen and (min-width: 560px) {
                font-size: 3rem;
                letter-spacing: 0.2rem;
                font-weight: 600;
            }
        }

        &>:last-child {
            p {
                letter-spacing: 0.2rem;
                color: orange;
            }
            @media screen and (min-width: 560px) {
                font-size: 1.5rem;
            }
        }
        
    }
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .title {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.5rem;
        display: flex;
        justify-content: flex-end;
        color: orange;
        margin-top: 4rem;
        margin-right: 1.25rem;
        @media screen and (min-width: 480px) {
            margin-right: 100px;
        }
        @media screen and (min-width: 560px) {
            font-size: 1.75rem;
        }
    }
`

export default HomeSection
