import styled from 'styled-components'
import Cards from './Cards'

const Skills = ({ content }) => {

    return (
        <StyledSection className="skills">
            <Cards grouped={ true } joined={ true } content={ content }/>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    z-index: 1;
    padding-bottom: 10rem;
`

export default Skills
