import { motion } from 'framer-motion'
import React from 'react'
import { scrollReveal } from '../animations/animations'
import { useScroll } from '../services/useScroll';

const ScrollReveal = (props) => {
    const [element, controls] = useScroll();
    return (
        <motion.div
            variants={scrollReveal}
            initial="hidden"
            animate={controls}
            ref={element}
            {...props}
        >
            {props.children}
        </motion.div>
    )
}

export default ScrollReveal
