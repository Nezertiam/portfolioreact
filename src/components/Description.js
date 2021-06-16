import { useEffect, useState } from "react"
import styled from "styled-components"
import StyledSectionOrange from "./StyledSectionOrange"
import axios from "axios"

const Description = ({ content }) => {

    const [githubUser, setGithubUser] = useState([])

    useEffect(() => {
        axios.get("https://api.github.com/users/nezertiam").then((response) => {
            setGithubUser(response)
        })
    }, [])

    return (
        <StyledSection className="description">

            <figure className="description__figure">
                <img src={ githubUser.data.avatar_url } className="description__image" />
            </figure>

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
        &__title, &__content, &__figure{
            text-align: center;
        }
        &__image{
            height: 100%;
            border: 3px solid black;
            border-radius: 50%;
            background-color: lightsteelblue;
        }
        &__figure{
            height: 300px;
            margin-bottom: 2rem;
        }
        &__title{
            font-size: 1.75rem;
            margin-bottom: 2rem;
        }
        &__content{
            max-width: var(--xs);
            margin: 0 auto;
            font-size: 1.2rem;
        }
    }
`

export default Description
