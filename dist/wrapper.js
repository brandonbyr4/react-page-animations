import { motion } from 'framer-motion';
module.exports = {
  AnimatedPage: props => {
    const animations = {
      initial: {
        opacity: parseInt(props.initialOpacity),
        x: parseInt(props.initialX)
      },
      animate: {
        opacity: parseInt(props.finalOpacity),
        x: parseInt(props.finalX)
      },
      exit: {
        opacity: parseInt(props.exitOpacity),
        x: parseInt(props.exitX)
      }
    };
    return /*#__PURE__*/React.createElement(motion.div, {
      variants: animations,
      initial: "initial",
      animate: "animate",
      exit: "exit"
    }, props.children);
  }
};