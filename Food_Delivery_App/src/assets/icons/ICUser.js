import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="#ADADAF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
