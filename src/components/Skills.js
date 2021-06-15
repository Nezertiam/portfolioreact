import React, { useState } from 'react'
import Card from './Card'
import CardsContainer from './styledComponents/CardsContainer'
import data from "../datas/data.js"

const Skills = () => {

    const [skills, setData] = useState(data().skills)

    return (
        <section className="skills">
            <CardsContainer className="cards-container">

                {skills.map(skill => {
                    return <Card content={skill} />
                })}
                

            </CardsContainer>
        </section>
    )
}

export default Skills
