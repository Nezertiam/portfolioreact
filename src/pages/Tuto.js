import TutoComponent from '../components/TutoComponent'

// Animations
import { pageAnimation } from "../animations"
import StyledMotionGrid from './StyledMotionGrid'

const Tuto = () => {
    return (
        <StyledMotionGrid variants={ pageAnimation } initial="hidden" animate="show" exit="exit">
            <TutoComponent/>
        </StyledMotionGrid>
    )
}



export default Tuto
