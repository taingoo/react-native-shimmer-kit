import type { ViewStyle } from 'react-native';

export interface ShimmerProps {
  width: number;
  height: number;
  borderRadius?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  colors?: any;
  duration?: number;
  isLoop?: boolean;
  customStyle?: ViewStyle;
  children?: any;
}
