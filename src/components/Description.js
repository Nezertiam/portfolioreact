import React, { useState } from 'react'
import data from '../datas/data'
import ColoredSection from './ColoredSection'

const Description = () => {

    const [desc, setDesc] = useState(data().coloredSections.description)

    return (
        <ColoredSection content={desc} />
    )
}

export default Description
