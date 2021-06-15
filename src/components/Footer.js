import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter className="footer">
            <p className="copy">
                2021 - &copy; Copyright - Mawyn Nhek
            </p>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    text-align: center;
    
    & .copy{
        padding: 2rem 0 1.5rem;
        color: gray;
        font-weight: bolder;
    }
`

export default Footer
