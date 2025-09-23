import { ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';

export interface CardProps extends Omit<TouchableOpacityProps, 'style'> {
  // Content
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;

  // Styling
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  containerClassName?: string;

  // Background & Colors
  backgroundColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  borderColor?: string;

  // Dimensions
  width?: number | string;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;

  // Spacing
  padding?: number | string;
  paddingHorizontal?: number | string;
  paddingVertical?: number | string;
  margin?: number | string;
  marginHorizontal?: number | string;
  marginVertical?: number | string;

  // Border & Shadow
  borderRadius?: number | string;
  borderWidth?: number;
  elevation?: number; // Android shadow
  shadowOpacity?: number; // iOS shadow
  shadowRadius?: number; // iOS shadow
  shadowOffset?: { width: number; height: number }; // iOS shadow
  shadowColor?: string; // iOS shadow

  // Layout
  direction?: 'row' | 'column';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  // Interaction
  onPress?: () => void;
  pressable?: boolean;
  rippleColor?: string; // Android ripple effect

  // Header/Footer
  header?: React.ReactNode;
  footer?: React.ReactNode;

  // States
  disabled?: boolean;
  loading?: boolean;

  // Disabled styling
  disabledBackgroundColor?: string;
  disabledOpacity?: number;

  // Additional styles
  style?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  contentStyle?: ViewStyle;
}
