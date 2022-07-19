import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.596.554a1.55 1.55 0 00-2.192 0L.554 11.404a1.55 1.55 0 002.192 2.192l.454-.454V23.35a1.55 1.55 0 001.55 1.55h3.1a1.55 1.55 0 001.55-1.55v-3.1a1.55 1.55 0 011.55-1.55h3.1a1.55 1.55 0 011.55 1.55v3.1a1.55 1.55 0 001.55 1.55h3.1a1.55 1.55 0 001.55-1.55V13.142l.454.454a1.55 1.55 0 002.192-2.192L13.596.554z"
        fill="#FA4A0C"
      />
    </Svg>
  )
}

export default SvgComponent
