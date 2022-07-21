/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {G, Rect, Defs} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={142}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Rect x={4} width={134} height={3} rx={1.5} fill="#FA4A0C" />
    </G>
    <Defs></Defs>
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
