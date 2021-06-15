import Cards from './Cards'

const Skills = ({ content }) => {

    return (
        <section className="skills">
            <Cards grouped={ true } joined={ true } content={ content }/>
        </section>
    )
}

export default Skills
