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
      console.log(getValues());
      const { name, cep, password, confirmPassword } = form;

      if (password !== confirmPassword) {
        Alert.alert('Ops!', 'Senhas não conferem');
        return;
      }
      console.log(`cep ` + cep);

      const location = await getAddress({ cep });
      console.log(location);

      const sendData = {
        name,
        cep,
        password,
      };

      const {
        data: { createUser: user },
      } = await registerUser({ variables: sendData });

      if (user) {
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
        maxLength={50}
        autoCorrect={false}
        autoCapitalize="none"
        error={errors.street && errors.street.message}
      />
      <InputForm
        placeholder="Apto 000 bl 1"
        control={control}
        name="complement"
        label="Complemento"
        maxLength={50}
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
        maxLength={70}
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
      {/* <InputForm
          placeholder="********"
          secureTextEntry={true}
          control={control}
          maxLength={20}
          name="password"
          label="Senha"
          autoCorrect={false}
          autoCompleteType="password"
          error={errors.password && errors.password.message}
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
          onSubmitEditing={() => handleSubmit(handleRegister)}
          error={errors.confirmPassword && errors.confirmPassword.message}
        /> */}
      <Footer>
        <Button
          title={!loading ? 'Salvar' : 'Salvando...'}
          onPress={handleSubmit(handleRegister)}
        />
      </Footer>
    </Container>
  );
}
