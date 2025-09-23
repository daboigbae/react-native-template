import {
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'phone'
  | 'number'
  | 'multiline';

export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
  // Content
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;

  // Styling - can be overridden with className
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  errorClassName?: string;

  // Input Type
  type?: InputType;

  // Colors & Background
  backgroundColor?: string;
  borderColor?: string;
  labelColor?: string;
  placeholderColor?: string;
  textColor?: string;
  errorColor?: string;
  successColor?: string;

  // Dimensions
  width?: number | string;
  height?: number | string;
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

  // Icons
  leftIconName?: string;
  rightIconName?: string;
  leftIconSize?: number;
  rightIconSize?: number;
  leftIconColor?: string;
  rightIconColor?: string;
  iconFamily?:
    | 'MaterialIcons'
    | 'Ionicons'
    | 'FontAwesome'
    | 'AntDesign'
    | 'Feather'
    | 'Entypo';

  // States
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  required?: boolean;

  // Error handling
  errorMessage?: string;
  successMessage?: string;

  // Floating label
  floatingLabel?: boolean;
  floatingLabelColor?: string;
  floatingLabelActiveColor?: string;

  // Password visibility
  showPasswordToggle?: boolean;

  // Validation
  validateOnChange?: boolean;
  validationRules?: ValidationRules;

  // Callbacks
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
  onValidation?: (isValid: boolean, errorMessage?: string) => void;

  // Additional styles
  style?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
}
