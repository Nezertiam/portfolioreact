import styled from "styled-components"
import StyledSectionOrange from "./StyledSectionOrange"

const Description = ({ content }) => {

    return (
        <StyledSection className="description">
            {
                content.title &&
                <h1 className="description__title" dangerouslySetInnerHTML={{ __html: content.title }}/>
            }

            {
                content.content &&
                <p className="description__content">
                    { content.content.text && content.content.text }
                    {
                        content.content.url &&
                        <a href={ content.content.url }>{ content.content.label && content.content.label }</a>
                    }
                </p>
            }
        </StyledSection>
    )
}

const StyledSection = styled(StyledSectionOrange)`
    .description{
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
`

export default Description
