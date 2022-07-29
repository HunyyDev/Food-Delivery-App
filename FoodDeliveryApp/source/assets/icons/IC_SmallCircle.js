import * as React from "react"
import Svg, { Circle } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={8}
    height={8}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={4} cy={4} r={4} fill={props.fill} />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
