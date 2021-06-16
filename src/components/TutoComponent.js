import React from 'react'
import styled from 'styled-components'

const TutoComponent = () => {
    return (
        <StyledDiv>
            <h1>
                Hallo Welt !
            </h1>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background-color: violet;
    height: 100vh;
    width: 100vw;
`

export default TutoComponent
