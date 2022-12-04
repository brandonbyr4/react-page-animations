"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.parse-int.js");
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AnimatedPage = props => {
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
  return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    variants: animations,
    initial: "initial",
    animate: "animate",
    exit: "exit"
  }, props.children);
};
var _default = AnimatedPage;
exports.default = _default;