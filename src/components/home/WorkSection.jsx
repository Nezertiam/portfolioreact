import { motion } from "framer-motion"
import Container from "./Container"

const WorkSection = () => {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                Work
            </motion.div>
        </Container>
    )
}

export default WorkSection
