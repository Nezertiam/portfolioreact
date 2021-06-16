import styled from 'styled-components'
import Cards from "./Cards"
import StyledSectionOrange from './StyledSectionOrange'

const Contact = ({ cards, outro }) => {

    return (
        <>
            <StyledSection className="contact">
                {
                    outro.title &&
                    <h1 className="contact__title" dangerouslySetInnerHTML={{ __html: outro.title }}/>
                }

                {
                    outro.content &&
                    <p className="contact__content">
                        { outro.content.text && outro.content.text }
                        {
                            outro.content.url &&
                            <a href={ outro.content.url }>{ outro.content.label && outro.content.label }</a>
                        }
                    </p>
                }

                <Cards joined={ false } content={ cards }/>

            </StyledSection>
        </>
    )
}

const StyledSection = styled(StyledSectionOrange)`
    .contact{
        &__title, &__content{
            text-align: center;
        }
        &__content{
            max-width: var(--xs);
            margin: 0 auto;
            font-size: 1.2rem;
        }
        &__title{
            font-size: 1.75rem;
            margin-bottom: 2rem;
        }
    }
    &:after{
        z-index: -1;
    }
`

export default Contact
