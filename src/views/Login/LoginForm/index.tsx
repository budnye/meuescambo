import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../../components/Button';

import { InputForm } from '../../../components/InputForm';
import { Form, Title, Label, InputBox, Footer, Error, ErrorBox } from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../../graphql/requests';

interface FormData{
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup
    .string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: Yup
    .string()
    .required('Senha é obrigatório'),
})

export function LoginForm(){
  const [login, { data, loading, error }] = useMutation(LOGIN)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleLogin(form: FormData) {
    const { email, password } = form;
    try {
      const data = {
        email,
        password,
      }

      const { data: { login: {token}}} = await login({variables: data})

    } catch (e) {
      console.log(error);
    }
  }

  return(
    <Form>
      <Title>Entrar com seu e-mail</Title>
      <InputBox>
        <Label>E-mail</Label>
        <InputForm
          placeholder="usuario@email.com"
          control={control}
          name="email"
          maxLength={50}
          autoCorrect={false}
          autoCompleteType="email"
          keyboardType="email-address"
          error={errors.email && errors.email.message}
        />
      </InputBox>
      <InputBox>
        <Label>Senha</Label>
        <InputForm
          placeholder="********"
          secureTextEntry={true}
          control={control}
          maxLength={20}
          name="password"
          autoCorrect={false}
          autoCompleteType="password"
          error={errors.password && errors.password.message}
        />
      </InputBox>
      <ErrorBox>
        {error && error.graphQLErrors.map(err => <Error key={err.message}>{err.message}</Error>)}
      </ErrorBox>
      <Footer>
        <Button title={!loading ? "Entrar" : "Entrando..." }onPress={handleSubmit(handleLogin)}/>
      </Footer>
    </Form>
    
  );
};