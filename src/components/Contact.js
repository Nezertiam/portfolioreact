import styled from 'styled-components'
import CardsContainer from './styledComponents/CardsContainer'
import Card from "./Card"

const Contact = ({ content }) => {

    return (
        <SectionStyled className="contact">
            <CardsContainer className="cards-container">

                { content.map( contact => {
                    return <Card content={ contact } />
                })}

            </CardsContainer>
        </SectionStyled>
    )
}

const SectionStyled = styled.section`

    .cards-container{
        .card {
            margin: 0.5rem;
            &:nth-child(1){
                border-radius: 10px 10px 10px 10px;
            }
            &:nth-child(2){
                border-radius: 10px 10px 10px 10px;
                &:last-child{
                    border-radius: 10px 10px 10px 10px;
                }
            }
        }
    }

`


export default Contact
