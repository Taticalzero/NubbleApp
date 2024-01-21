import React from 'react';
import {EyeOffSvg} from '../../assets/icons/EyeoffSvg';
import {EyeOnSvg} from '../../assets/icons/EyeOnSvg';
import { ThemeColors } from '../../theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}
export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
} 

const iconRegistry = {
  eyeOn: EyeOnSvg,
  eyeOff: EyeOffSvg,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
