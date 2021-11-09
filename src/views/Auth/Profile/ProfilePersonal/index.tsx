import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { Container, InputBox, Label, Footer } from './styles';
import { Button } from '../../../../components/Button';
import { InputForm } from '../../../../components/InputForm';
import { Alert } from 'react-native';
import { GET_USER, UPDATE_PROFILE } from '../../../../graphql/requests';

interface FormData {
  name: string;
  email: string;
}

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'O nome ter no mínimo 2 caracteres')
    .max(200, 'O nome deve ter no máximo 200 caracteres')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .max(50, 'Email muito longo')
    .required('Email é obrigatório'),
});

export function ProfilePersonal({ navigation }: any) {
  const [updateUser, { loading }] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [GET_USER],
  });
  const { data, loading: loadingUser, error } = useQuery(GET_USER);
  const user = data?.getUser;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('email', user.email);
    }
  }, [user]);

  async function handleRegister(form: FormData) {
    try {
      const { name, email } = form;
      console.log(form);

      const sendData = {
        name,
        email,
      };

      const {
        data: { updateUser: user },
      } = await updateUser({ variables: sendData });

      if (user) {
        Alert.alert('Isso aí!', 'Dados alterados com sucesso.');
        reset();
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert('Ops!', error.message.toString());
    }
  }

  return (
    <Container>
      <InputForm
        placeholder="Nome"
        control={control}
        name="name"
        label="Nome"
        maxLength={200}
        autoCorrect={false}
        autoCompleteType="name"
        autoCapitalize="words"
        error={errors.name && errors.name.message}
      />
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
      <Footer>
        <Button
          title={!loading ? 'Salvar' : 'Salvando...'}
          onPress={handleSubmit(handleRegister)}
        />
      </Footer>
    </Container>
  );
}
