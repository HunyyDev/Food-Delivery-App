import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={8}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={4} cy={4} r={4} fill="#C4C4C4" />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
