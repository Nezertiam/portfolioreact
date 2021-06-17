import {Description, Hero, Portfolio, Skills, Contact} from '../components/index'
import styled from "styled-components"
// Animations
import { pageAnimation } from "../animations"
import StyledMotionGrid from "./StyledMotionGrid"

const Intro = ({ datas }) => {

    return (
        <StyledIntro variants={ pageAnimation } initial="hidden" animate="show" exit="exit">
            <Hero />
            <Description content={ datas.coloredSections.description } />
            <Skills content={ datas.skills }/>
            <Portfolio />
            <Contact cards={ datas.contacts } outro={ datas.coloredSections.outro } />
        </StyledIntro>
    )
}

const StyledIntro = styled(StyledMotionGrid)`
    .hero, .description, .skills, .contact, .footer{
        grid-column: 1/-1;
    }
`

export default Intro
