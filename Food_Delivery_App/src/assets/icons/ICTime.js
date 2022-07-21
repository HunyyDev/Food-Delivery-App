import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={26}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.708.625A10.875 10.875 0 0 0 3.833 11.5H.208l4.7 4.7.085.17 4.882-4.87H6.25a8.452 8.452 0 0 1 8.458-8.458 8.452 8.452 0 0 1 8.459 8.458 8.452 8.452 0 0 1-8.459 8.458A8.39 8.39 0 0 1 8.74 17.47l-1.716 1.716a10.819 10.819 0 0 0 7.685 3.19 10.875 10.875 0 0 0 0-21.75ZM13.5 6.667v6.041l5.136 3.045.93-1.558-4.253-2.526V6.667H13.5Z"
      fill="#000"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
