import React from 'react'
import styled from 'styled-components'

const Container = ({ children, className }) => {

    return (
        <StyledContainer className={className}>
            {children}
        </StyledContainer>
    )
}

const StyledContainer = styled.main`
    height: 100vh;
    width: 100vw;
    padding: 0.75rem;
    padding-top: 69px;
`

export default Container
