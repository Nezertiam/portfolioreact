import { useState } from 'react'
import data from '../datas/data'
import ColoredSection from './ColoredSection'

const Outro = () => {

    const [outro, setOutro] = useState(data().coloredSections.outro)

    return (
        <ColoredSection content={outro} />
    )
}

export default Outro
