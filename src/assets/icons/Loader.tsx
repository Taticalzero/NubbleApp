import React from 'react';

import {Svg, Path, Circle} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';
import {palette} from '../../theme/theme';

export function LoaderIcon({size = 48, color = palette.grayBlack}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill={color}>
      <Path
        d="M38 23.9062C38 31.6382 31.732 37.9062 24 37.9062C16.268 37.9062 10 31.6382 10 23.9062C10 18.9409 12.5849 14.5793 16.4824 12.0937"
        stroke="black"
        stroke-width="3"
      />
    </Svg>
  );
}
