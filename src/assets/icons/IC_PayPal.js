import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={40} height={40} rx={10} fill="#C4C4C4" />
    <Rect width={40} height={40} rx={10} fill="#0038FF" />
    <Path
      d="M17.481 21.247c-.11.6-.544 3.397-.672 4.188-.01.056-.032.078-.094.078h-2.331a.379.379 0 0 1-.378-.435l1.832-11.622a.635.635 0 0 1 .624-.528c4.76 0 5.16-.116 6.375.356 1.878.728 2.05 2.485 1.375 4.385-.671 1.956-2.265 2.797-4.378 2.822-1.355.022-2.171-.219-2.352.756h-.001Zm7.678-4.497c-.056-.04-.078-.056-.093.04a7.356 7.356 0 0 1-.275 1.05c-1.247 3.557-4.704 3.247-6.391 3.247-.19 0-.316.104-.34.294-.706 4.387-.848 5.303-.848 5.303-.031.222.11.403.332.403h1.984c.269 0 .49-.197.544-.465.022-.169-.034.19.45-2.854.144-.687.447-.615.916-.615 2.219 0 3.95-.9 4.465-3.51.203-1.087.144-2.231-.743-2.893Z"
      fill="#fff"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;