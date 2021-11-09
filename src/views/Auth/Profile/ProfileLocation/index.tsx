import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { Container, InputBox, Label, Footer, Row } from './styles';
import { Button } from '../../../../components/Button';
import { InputForm } from '../../../../components/InputForm';
import { Alert } from 'react-native';
import { REGISTER } from '../../../../graphql/requests';
import { getAddress } from '../../../../services/cep';
import { MaskedInputForm } from '../../../../components/MaskedInputForm';

interface FormData {
  cep: string;
  street: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
}
const schema = Yup.object().shape({
  cep: Yup.string()
    .required('O CEP é obrigatório')
    .min(9, 'O CEP ter no mínimo 9 caracteres')
    .max(9, 'O CEP deve ter no máximo 9 caracteres'),
  street: Yup.string()
    .required('A rua é obrigatório')
    .min(3, 'A rua deve ter no mínimo 3 caracteres')
    .max(100, 'A rua deve ter no máximo 100 caracteres'),
  complement: Yup.string().max(
    30,
    'O complemento deve ter no máximo 30 caracteres',
  ),
  neighborhood: Yup.string()
    .required('O bairro é obrigatório')
    .min(3, 'O bairro deve ter no mínimo 3 caracteres')
    .max(100, 'O bairro deve ter no máximo 100 caracteres'),
  city: Yup.string()
    .required('A cidade é obrigatório')
    .min(3, 'A cidade deve ter no mínimo 3 caracteres')
    .max(100, 'A cidade deve ter no máximo 100 caracteres'),
  state: Yup.string()
    .required('O estado é obrigatório')
    .min(2, 'O estado deve ter no mínimo 2 caracteres')
    .max(2, 'O estado deve ter no máximo 2 caracteres'),
});
export function ProfileLocation({ navigation }: any) {
  const [registerUser, { loading }] = useMutation(REGISTER);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const setLocation = (info: string) => {
    console.log(info);

    getAddress({ cep: info })
      .then((data) => {
        console.log(data);
        setValue('street', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('state', data.uf);
      })
      .catch((err) => {
        Alert.alert(err.response.data);
      });
  };

  async function handleRegister(form: FormData) {
    try {
      // console.log(getValues());
      // const { cep, street, city, state } = form;

      // const sendData = {
      //   name,
      //   cep,
      //   password,
      // };

      // const {
      //   data: { createUser: user },
      // } = await registerUser({ variables: sendData });

      if (false) {
        Alert.alert(
          'Seja bem-vindo!',
          'Usuário criado com sucesso, agora é só fazer o login',
          [
            {
              text: 'Sair',
              onPress: () => navigation.goBack(),
              style: 'cancel',
            },
            { text: 'Login', onPress: () => navigation.navigate('Login') },
          ],
        );
        reset();
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert('Ops!', error.message.toString());
    }
  }

  return (
    <Container>
      <MaskedInputForm
        placeholder="00000-000"
        control={control}
        name="cep"
        label="CEP"
        maxLength={9}
        autoCorrect={false}
        type={'custom'}
        options={{
          mask: '99999-999',
        }}
        onChange={(e) => {
          if (e.nativeEvent.text.length === 9) {
            setLocation(e.nativeEvent.text);
          }
        }}
        error={errors.cep && errors.cep.message}
      />
      <InputForm
        placeholder="R. Seu endereço"
        control={control}
        name="street"
        label="Rua"
        maxLength={100}
        autoCorrect={false}
        autoCapitalize="none"
        error={errors.street && errors.street.message}
      />
      <InputForm
        placeholder="Apto 000 bl 1"
        control={control}
        name="complement"
        label="Complemento"
        maxLength={30}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="numeric"
        error={errors.complement && errors.complement.message}
      />
      <InputForm
        placeholder="Bairro"
        control={control}
        name="neighborhood"
        label="Bairro"
        maxLength={70}
        autoCorrect={false}
        autoCapitalize="words"
        error={errors.neighborhood && errors.neighborhood.message}
      />
      <InputForm
        placeholder="Estado"
        control={control}
        name="state"
        label="Estado"
        maxLength={2}
        autoCorrect={false}
        autoCapitalize="words"
        error={errors.state && errors.state.message}
      />
      <InputForm
        placeholder="Bairro"
        control={control}
        name="city"
        label="Cidade"
        maxLength={70}
        autoCorrect={false}
        autoCapitalize="words"
        error={errors.city && errors.city.message}
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
