import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={23}
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.708.625A10.875 10.875 0 003.833 11.5H.208l4.7 4.7.085.17 4.882-4.87H6.25a8.452 8.452 0 018.458-8.458 8.452 8.452 0 018.459 8.458 8.452 8.452 0 01-8.459 8.458A8.39 8.39 0 018.74 17.47l-1.716 1.716a10.819 10.819 0 007.685 3.19 10.875 10.875 0 000-21.75zM13.5 6.667v6.041l5.136 3.045.93-1.558-4.253-2.526V6.667H13.5z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
