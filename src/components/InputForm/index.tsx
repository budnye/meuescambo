import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container, Label, InputBox } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
  label?: string;
}

export function InputForm({ control, name, error, label, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputBox>
          {label && <Label>{label}</Label>}
          <Input
            onChangeText={onChange}
            value={value}
            error={error}
            {...rest}
          />
          </InputBox>
        )}
        name={name}
      ></Controller>
    </Container>
  );
}
