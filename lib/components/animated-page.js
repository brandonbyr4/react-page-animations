import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPage = (props) => {
    const animations = {
        initial: {opacity: parseInt(props.initialOpacity), x: parseInt(props.initialX)},
        animate: {opacity: parseInt(props.finalOpacity), x: parseInt(props.finalX)},
        exit: {opacity: parseInt(props.exitOpacity), x: parseInt(props.exitX)},
    }
    return <motion.div
                variants={animations}
                initial="initial"
                animate="animate"
                exit="exit"
            >
        {props.children}
    </motion.div>
}

export default AnimatedPage