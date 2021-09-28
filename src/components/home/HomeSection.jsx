import styled from "styled-components"
import Container from "./Container"

const HomeSection = () => {
    return (
        <Home>
            <p className="name">Mawyn Nhek</p>
            <p>Développeur Frontend et Backend</p>
        </Home>
    )
}

const Home = styled(Container)`
    .name{
        font-size: 2rem;
    }
`

export default HomeSection
