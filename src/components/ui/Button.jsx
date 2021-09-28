import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick }) => {
    return (
        <StyledButton onClick={() => handleClick(onClick)}>
            {children}
        </StyledButton>
    )
}

const handleClick = (onClick) => {
    if (typeof onClick === "function") {
        onClick()
    }
}

const StyledButton = styled.button`
    border: none;
    background: none;
`

export default Button
