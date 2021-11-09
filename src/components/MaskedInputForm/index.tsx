import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { MaskedInput } from '../MaskedInput';
import { Container, Label, InputBox } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
  label?: string;
}

export function MaskedInputForm({
  control,
  name,
  error,
  label,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputBox>
            {label && <Label>{label}</Label>}
            <MaskedInput
              onChangeText={onChange}
              value={value}
              type={'custom'}
              options={{
                mask: '99999-999',
              }}
              // error={error}
              {...rest}
            />
          </InputBox>
        )}
        name={name}
      ></Controller>
    </Container>
  );
}
