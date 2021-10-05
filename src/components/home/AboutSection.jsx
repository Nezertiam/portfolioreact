import styled from "styled-components"
import Container from "./Container"

const AboutSection = () => {
    return (
        <About>
            <p className="title">
                Hi, I'm Mawyn&nbsp;!<br />Nice to meet you&nbsp;!
            </p>
            <p className="description">
                PHP and React developer, I can work <span className="color">independently</span> when necessary.
            </p>
            <p>

            </p>
        </About>
    )
}

const About = styled(Container)`
    .title {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 1px;
        padding-bottom: 2rem;
    }
    .title, .description {
    }
    .color{
        color: var(--primary)
    }
`

export default AboutSection
