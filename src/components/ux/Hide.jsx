import React from 'react'
import styled from 'styled-components'

const Hide = ({ children }) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    overflow: hidden;
`

export default Hide
