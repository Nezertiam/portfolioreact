import {Description, Hero, Portfolio, Skills, Contact} from '../components/index'
// Animations
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
// import StyledMotionDiv from './StyledMotionDiv'
import styled from 'styled-components'

const Intro = ({ datas }) => {

    return (
        <StyledMotionDiv variants={ pageAnimation } initial="hidden" animate="show">
            <Hero />
            <Description content={ datas.coloredSections.description } />
            <Skills content={ datas.skills }/>
            <Portfolio />
            <Contact cards={ datas.contacts } outro={ datas.coloredSections.outro } />
        </StyledMotionDiv>
    )
}

const StyledMotionDiv = styled(motion.div)`
    display: grid;
    background-color: var(--clr-bg-primary);
    grid-template-columns: repeat(3, 1fr);
    grid-column: 1/4;

    @media (min-width: 768px){
        grid-template-columns: repeat(6, 1fr);
        grid-column: 1/7;
    }
    @media (min-width: 992px){
        grid-template-columns: repeat(12, 1fr);
        grid-column: 1/13;
    }
`

export default Intro
