import styled from "styled-components"

const StyledSectionOrange = styled.section`
    background-color: var(--clr-primary);
    color: var(--clr-bg-secondary-font-color);
    margin-bottom: 4.5rem;
    padding: 10rem 0.75rem 3rem;

    &::after{
        content: "";
        display: block;
        position: absolute;
        height: 225px;
        width: 100%;
        background-color: var(--clr-primary);
        left: 0;
    }
`

export default StyledSectionOrange