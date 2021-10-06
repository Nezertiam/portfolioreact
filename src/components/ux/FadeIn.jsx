import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../animations/animations'

const FadeIn = (props) => {
    return (
        <motion.div
            variants={fadeIn}
            {...props}
        >
            {props.children}
        </motion.div>
    )
}

export default FadeIn
