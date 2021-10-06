import { motion } from 'framer-motion'
import React from 'react'
import { slideFromBottom } from '../animations/animations'

const SlideFromBottom = (props) => {
    return (
        <motion.div
            variants={slideFromBottom}
            {...props}
        >
            {props.children}
        </motion.div>
    )
}

export default SlideFromBottom
