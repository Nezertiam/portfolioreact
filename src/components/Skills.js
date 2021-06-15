import Card from './Card'
import CardsContainer from './styledComponents/CardsContainer'

const Skills = ({ content }) => {

    return (
        <section className="skills">
            <CardsContainer className="cards-container">

                { content.map(skill => {
                    return <Card content={ skill } />
                })}
                

            </CardsContainer>
        </section>
    )
}

export default Skills
