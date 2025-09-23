import { TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  // Content
  label?: string;
  children?: React.ReactNode;

  // Styling - can be overridden with className
  className?: string;
  labelClassName?: string;
  containerClassName?: string;

  // Background & Colors
  backgroundColor?: string;
  labelColor?: string;

  // Dimensions
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;

  // Spacing
  padding?: number | string;
  paddingHorizontal?: number | string;
  paddingVertical?: number | string;
  margin?: number | string;
  marginHorizontal?: number | string;
  marginVertical?: number | string;

  // Border
  borderRadius?: number | string;
  borderWidth?: number;
  borderColor?: string;

  // Icon
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  iconPosition?: 'left' | 'right';
  iconFamily?:
    | 'MaterialIcons'
    | 'Ionicons'
    | 'FontAwesome'
    | 'AntDesign'
    | 'Feather'
    | 'Entypo';

  // States
  disabled?: boolean;
  loading?: boolean;

  // Disabled styling
  disabledBackgroundColor?: string;
  disabledLabelColor?: string;
  disabledBorderColor?: string;

  // Loading styling
  loaderColor?: string;
  loaderSize?: number | 'small' | 'large';

  // Callbacks
  onPress?: () => void;

  // Additional styles
  style?: ViewStyle;
  labelStyle?: TextStyle;
}
