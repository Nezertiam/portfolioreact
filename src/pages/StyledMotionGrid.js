import styled from 'styled-components'
import { motion } from "framer-motion"



const StyledMotionGrid = styled(motion.main)`
    display: grid;
    background-color: var(--clr-bg-primary);
    grid-template-columns: repeat(3, 1fr);
    grid-column: 1/-1;
`

export default StyledMotionGrid
