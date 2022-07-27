import * as React from "react"
import Svg, { Path, Mask } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={134}
    height={128}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M51.138 123c5.6 0 10.142-4.541 10.142-10.142 0-5.602-4.541-10.142-10.142-10.142-5.602 0-10.143 4.54-10.143 10.142 0 5.601 4.541 10.142 10.143 10.142ZM107.702 123c5.601 0 10.142-4.541 10.142-10.142 0-5.602-4.541-10.142-10.142-10.142-5.602 0-10.143 4.54-10.143 10.142 0 5.601 4.541 10.142 10.143 10.142Z"
      stroke="#C7C7C7"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Mask
      id="a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0.014}
      width={134}
      height={98}
      fill="#000"
    >
      <Path fill="#fff" d="M0 .014h134v98H0z" />
      <Path d="M10 10.014h20.569l13.78 68.854a10.284 10.284 0 0 0 10.285 8.279h49.982a10.284 10.284 0 0 0 10.285-8.28l8.227-43.142H35.711" />
    </Mask>
    <Path
      d="M10 .014c-5.523 0-10 4.477-10 10s4.477 10 10 10v-20Zm20.569 10 9.805-1.963A10 10 0 0 0 30.57.014v10Zm13.78 68.854 9.81-1.948-.004-.015-9.805 1.963Zm10.285 8.279v-10c-.064 0-.128 0-.191.002l.191 9.998Zm49.982 0 .192-9.998a9.454 9.454 0 0 0-.192-.002v10Zm10.285-8.28 9.808 1.95.015-.076-9.823-1.873Zm8.227-43.142 9.823 1.873a10 10 0 0 0-9.823-11.873v10Zm-87.417-10c-5.523 0-10 4.477-10 10s4.477 10 10 10v-20ZM10 20.014H30.568v-20H10v20Zm10.763-8.037L34.544 80.83l19.611-3.925-13.78-68.854-19.612 3.926Zm13.778 68.84a20.285 20.285 0 0 0 7.176 11.848l12.542-15.58a.284.284 0 0 1-.1-.165L34.54 80.816Zm7.176 11.848a20.285 20.285 0 0 0 13.109 4.48l-.383-19.996a.285.285 0 0 1-.184-.063l-12.542 15.58Zm12.917 4.482h49.982v-20H54.634v20Zm49.791-.002c4.759.091 9.4-1.495 13.108-4.48l-12.541-15.58a.285.285 0 0 1-.184.064l-.383 19.996Zm13.108-4.48a20.29 20.29 0 0 0 7.176-11.849l-19.617-3.896a.283.283 0 0 1-.1.166l12.541 15.58Zm7.191-11.924 8.227-43.143-19.646-3.746-8.227 43.143 19.646 3.746Zm-1.596-45.016-.001-10H35.711v20H123.127l.001-10Z"
      fill="#C7C7C7"
      mask="url(#a)"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
