import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Input, type InputProps } from './Input';

export interface FormInputProps<T extends FieldValues>
  extends Omit<InputProps, 'value' | 'onChangeText' | 'error'> {
  name: Path<T>;
  control: Control<T>;
}

export function FormInput<T extends FieldValues>({ name, control, ...rest }: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Input
          {...rest}
          value={field.value as string}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          error={fieldState.error?.message}
        />
      )}
    />
  );
}
