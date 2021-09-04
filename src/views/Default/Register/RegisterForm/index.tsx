import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { Container, InputBox, Label, Footer } from './styles';
import { Button } from '../../../../components/Button';
import { InputForm } from '../../../../components/InputForm';
import { Alert } from 'react-native';
import { REGISTER } from '../../../../graphql/requests';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = Yup.object().shape({
  name: Yup.string().min(2,'O nome ter no mínimo 2 caracteres').max(200,'O nome deve ter no máximo 200 caracteres').required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').max(50,'Email muito longo').required('Email é obrigatório'),
  password: Yup.string().min(6,'A senha deve ter no mínimo 8 caracteres').max(12,'A senha deve ter no máximo 12 caracteres').required('Senha é obrigatório'),
  confirmPassword: Yup.string().required('Confirmar Senha é obrigatório'),
});
export function RegisterForm({ navigation }: any){
  const [registerUser, { loading }] = useMutation(REGISTER);
  
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  async function handleRegister(form: FormData) {
    try {
      console.log(form);
      const {
        name,
        email,
        password,
        confirmPassword,
      } = form;
  
  
      if (password !== confirmPassword) {
        Alert.alert('Ops!', 'Senhas não conferem');
        return;
      }
  
      const sendData = {
        name,
        email,
        password,
      };
  
      const {
        data : { createUser: user }
      } = await registerUser({ variables: sendData });
  
      if (user) {
        Alert.alert('Seja bem-vindo!', 'Usuário criado com sucesso, agora é só fazer o login',
        [
          {
            text: "Sair",
            onPress: () => navigation.goBack(),
            style: "cancel"
          },
          { text: "Login", onPress: () => navigation.navigate('Login') }
        ]);
        reset();
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert('Ops!', error.message.toString());
    }
  };

  return(
    <Container>
      <InputBox>
        <Label>Nome</Label>
        <InputForm
          placeholder="Nome"
          control={control}
          name="name"
          maxLength={200}
          autoCorrect={false}
          autoCompleteType="name"
          autoCapitalize="words"
          error={errors.name && errors.name.message}
        />
      </InputBox>
      <InputBox>
        <Label>E-mail</Label>
        <InputForm
          placeholder="usuario@email.com"
          control={control}
          name="email"
          maxLength={50}
          autoCorrect={false}
          autoCompleteType="email"
          autoCapitalize="none"
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
      <InputBox>
        <Label>Confirmar Senha</Label>
        <InputForm
          placeholder="********"
          secureTextEntry={true}
          control={control}
          maxLength={16}
          name="confirmPassword"
          autoCorrect={false}
          autoCompleteType="password"
          onSubmitEditing={() => handleSubmit(handleRegister)}
          error={errors.confirmPassword && errors.confirmPassword.message}
        />
      </InputBox>
      <Footer>
        <Button
          title={!loading ? 'Registrar' : 'Salvando...'}
          onPress={handleSubmit(handleRegister)}
        />
      </Footer>
    </Container>
  );
};