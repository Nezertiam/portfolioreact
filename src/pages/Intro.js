import {Description, Outro, Hero, Portfolio, Skills, Contact} from '../components/index'


const Intro = ({ datas }) => {

    return (
        <>
            <Hero />
            <Description content={ datas.coloredSections.description }/>
            <Skills content={ datas.skills }/>
            <Portfolio />
            <Outro content={ datas.coloredSections.outro }/>
            <Contact content={ datas.contacts }/>
        </>
    )
}

export default Intro
