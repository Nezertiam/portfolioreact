import styled from 'styled-components'
import Cards from "./Cards"
import ColoredSection from './ColoredSection'

const Contact = ({ cards, outro }) => {

    return (
        <>
            <ColoredSection content={ outro } />
            <section className="contact">
                <Cards joined={ false } content={ cards }/>
            </section>
        </>
    )
}


export default Contact
