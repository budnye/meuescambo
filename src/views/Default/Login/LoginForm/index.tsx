import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../../../components/Button';

import { InputForm } from '../../../../components/InputForm';
import {
  Form,
  Title,
  Label,
  InputBox,
  Footer,
  Error,
  ErrorBox,
} from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../../graphql/requests';
import { auth } from '../../../../graphql/reactivities/authVariables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../../../../global/styles/theme';
interface FormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatório'),
});

export function LoginForm({ route }) {
  const [login, { loading, error }] = useMutation(LOGIN);
  const [showPass, setShowPass] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Debug mode
  useEffect(() => {
    if (route.params) {
      const { email, password } = route.params;
      handleLogin({ email, password });
    } else {
      setValue('email', 'vargas@teste.com');
      setValue('password', '1234mudar');
    }
  }, []);

  async function handleLogin(form: FormData) {
    const { email, password } = form;
    try {
      const data = {
        email,
        password,
      };

      const {
        data: {
          login: { token },
        },
      } = await login({ variables: data });

      auth(true);
      AsyncStorage.setItem('token', token);
      AsyncStorage.setItem('auth', 'true');
    } catch (e) {
      console.log(error);
    }
  }

  return (
    <Form>
      <Title>Entrar com seu e-mail</Title>
      <InputForm
        placeholder="usuario@email.com"
        control={control}
        name="email"
        label="E-mail"
        maxLength={50}
        autoCorrect={false}
        autoCompleteType="email"
        autoCapitalize="none"
        keyboardType="email-address"
        error={errors.email && errors.email.message}
      />
      <InputForm
        placeholder="********"
        secureTextEntry={!showPass}
        control={control}
        maxLength={20}
        name="password"
        label="Senha"
        autoCorrect={false}
        autoCompleteType="password"
        returnKeyType="go"
        error={errors.password && errors.password.message}
        onSubmitEditing={handleSubmit(handleLogin)}
        icon={!showPass ? 'eye' : 'eye-slash'}
        endIcon
        iconAction={() => setShowPass(!showPass)}
        iconColor={theme.colors.primary}
      />
      <ErrorBox>
        {error &&
          error.graphQLErrors.map((err) => (
            <Error key={err.message}>{err.message}</Error>
          ))}
      </ErrorBox>
      <Footer>
        <Button
          title={!loading ? 'Entrar' : 'Entrando...'}
          onPress={handleSubmit(handleLogin)}
        />
      </Footer>
    </Form>
  );
}
