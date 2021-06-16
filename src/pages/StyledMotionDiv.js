import React from 'react'
import styled from 'styled-components'

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

export default StyledMotionDiv
