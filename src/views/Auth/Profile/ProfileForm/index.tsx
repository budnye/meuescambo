import React, { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Container, Title, Footer } from './styles';
import { InputForm } from '../../../../components/InputForm';
import { Button } from '../../../../components/Button';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../../graphql/requests';

const schema = Yup.object().shape({
  name: Yup.string().min(2,'O nome ter no mínimo 2 caracteres').max(200,'O nome deve ter no máximo 200 caracteres').required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').max(50,'Email muito longo').required('Email é obrigatório'),
  password: Yup.string().min(6,'A senha deve ter no mínimo 8 caracteres').max(12,'A senha deve ter no máximo 12 caracteres').required('Senha é obrigatório'),
  confirmPassword: Yup.string().required('Confirmar Senha é obrigatório'),
});

export function ProfileForm(){
  const [edit, setEdit] = useState(false)
  const { data: { getUser: user }} = useQuery(GET_USER);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSubmitForm(form: FormData) {
    console.log(form);
    
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
          defaultValue={user.name}
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
        />
        <InputForm
          placeholder="********"
          secureTextEntry={true}
          control={control}
          maxLength={20}
          name="password"
          label="Senha"
          autoCorrect={false}
          autoCompleteType="password"
          error={errors.password && errors.password.message}
          editable={edit}
        />
        <InputForm
          placeholder="********"
          secureTextEntry={true}
          control={control}
          maxLength={16}
          name="confirmPassword"
          label="Confirmar Senha"
          autoCorrect={false}
          autoCompleteType="password"
          onSubmitEditing={() => handleSubmit(handleSubmitForm)}
          error={errors.confirmPassword && errors.confirmPassword.message}
          editable={edit}
        />
        <Footer>
        <Button
          title={!false ? 'Registrar' : 'Salvando...'}
          onPress={handleSubmit(handleSubmitForm)}
        />
      </Footer>
    </Container>
  );
};