import { motion } from 'framer-motion'
import { container } from '../animations/animations'

const AnimationContainer = (props) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            {...props}
        >
            {props.children}
        </motion.div>
    )
}

export default AnimationContainer
