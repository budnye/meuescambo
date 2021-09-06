import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Container, Title, Footer } from './styles';
import { InputForm } from '../../../../components/InputForm';
import { Button } from '../../../../components/Button';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER, UPDATE_PROFILE } from '../../../../graphql/requests';
import { ProfileProps } from '..';
import { Alert } from 'react-native';

interface FormData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const schema = Yup.object().shape({
  name: Yup.string().min(2,'O nome ter no mínimo 2 caracteres').max(200,'O nome deve ter no máximo 200 caracteres').required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').max(50,'O e-mail deve ter no máximo 50 caracteres').required('Email é obrigatório'),
  password: Yup.string().min(6,'A senha deve ter no mínimo 8 caracteres').max(12,'A senha deve ter no máximo 12 caracteres'),
  confirmPassword: Yup.string(), 
});

export function ProfileForm({ edit, editProfile }: ProfileProps ){
  const [update, { loading, error }] = useMutation(UPDATE_PROFILE);
  const { data: { getUser: user }} = useQuery(GET_USER);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields },
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue('name', user.name); 
    setValue('email', user.email); 
  }, [])

  async function handleSubmitForm(form: FormData) {
    try {
      const { name, email } = form;

      let data: FormData = {
        name,
        email,
      }

      console.log(data);
  
      const {
        data :{ updateUser: user }
      } = await update({ variables: data });
      if (user) {
        Alert.alert('Sucesso', 'As informações do perfil foram alteradas');
      }
      editProfile(false);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Ops!', error.message.toString() || 'Erro ao editar o perfil');
    }
  }

  return(
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
          editable={edit}
          onFocus={() => clearErrors('name')}
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
          editable={edit}
          defaultValue={user.email}
          onFocus={() => clearErrors('email')}
        />
     
        <Footer>
        <Button
          title={!loading ? 'Salvar' : 'Salvando...'}
          onPress={handleSubmit(handleSubmitForm)}
          disabled={!edit}
        />
      </Footer>
    </Container>
  );
};