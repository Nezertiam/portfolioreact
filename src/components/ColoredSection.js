import styled from "styled-components"

function ColoredSection({content}){

    return(
        <StyledSection className="coloredSection">
            {
                content.title &&
                <div className="coloredSection__header">
                    <h1 className="coloredSection__title" dangerouslySetInnerHTML={{ __html: content.title }}/>
                </div>
            }

            {
                content.content &&
                <div className="coloredSection__body">
                    <p className="coloredSection__content">
                        { content.content.text && content.content.text }
                        {
                            content.content.url &&
                            <a href={ content.content.url }>{ content.content.label && content.content.label }</a>
                        }
                    </p>
                </div>
            }
        </StyledSection>
    )

}

const StyledSection = styled.section`
    background-color: var(--clr-primary);
    margin-bottom: 4.5rem;
    color: var(--clr-bg-secondary-font-color);
    padding: 10rem 0.75rem 3rem;

    .coloredSection{
        &__header, &__body{
            text-align: center;
        }
        &__header{
            margin-bottom: 2rem;
        }
        &__content{
            max-width: var(--xs);
            margin: 0 auto;
            font-size: 1.2rem;
        }
        &__title{
            font-size: 1.75rem;
        }
    }

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

export default ColoredSection