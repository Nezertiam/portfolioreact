import {Description, Hero, Portfolio, Skills, Contact} from '../components/index'


const Intro = ({ datas }) => {

    return (
        <>
            <Hero />
            <Description content={ datas.coloredSections.description }/>
            <Skills content={ datas.skills }/>
            <Portfolio />
            <Contact cards={ datas.contacts } outro={ datas.coloredSections.outro }/>
        </>
    )
}

export default Intro
