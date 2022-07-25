import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={65}
    height={65}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        d="M33.596 14.554a1.55 1.55 0 0 0-2.192 0l-10.85 10.85a1.55 1.55 0 0 0 2.192 2.192l.454-.454V37.35a1.55 1.55 0 0 0 1.55 1.55h3.1a1.55 1.55 0 0 0 1.55-1.55v-3.1a1.55 1.55 0 0 1 1.55-1.55h3.1a1.55 1.55 0 0 1 1.55 1.55v3.1a1.55 1.55 0 0 0 1.55 1.55h3.1a1.55 1.55 0 0 0 1.55-1.55V27.142l.454.454a1.55 1.55 0 0 0 2.192-2.192l-10.85-10.85Z"
        fill={props.fill}
      />
    </G>
    <Defs></Defs>
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
