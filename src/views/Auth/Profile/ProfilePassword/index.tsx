import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { Container, InputBox, Label, Footer } from './styles';
import { Button } from '../../../../components/Button';
import { InputForm } from '../../../../components/InputForm';
import { Alert } from 'react-native';
import { REGISTER, UPDATE_PASSWORD } from '../../../../graphql/requests';
import theme from '../../../../global/styles/theme';

interface FormData {
  password: string;
  confirmPassword: string;
  oldPassword: string;
}
const schema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 8 caracteres')
    .max(12, 'A senha deve ter no máximo 12 caracteres')
    .required('Senha é obrigatório'),
  oldPassword: Yup.string()
    .min(6, 'A senha atual deve ter no mínimo 8 caracteres')
    .max(12, 'A senha atual deve ter no máximo 12 caracteres')
    .required('Senha atual é obrigatório'),
  confirmPassword: Yup.string().required('Confirmar Senha é obrigatório'),
});

export function ProfilePassword({ navigation }: any) {
  const [updatePassword, { loading }] = useMutation(UPDATE_PASSWORD);
  const [showOldPass, setShowOldPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
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
      const { oldPassword, password, confirmPassword } = form;

      if (password !== confirmPassword) {
        Alert.alert('Ops!', 'Senhas não conferem');
        return;
      }

      const sendData = {
        password,
        oldPassword,
      };

      const {
        data: { updatePassword: user },
      } = await updatePassword({ variables: sendData });

      if (user) {
        Alert.alert('Isso aí!', 'Senha alterada com sucesso', [
          {
            text: 'Sair',
            style: 'cancel',
          },
          { text: 'Voltar', onPress: () => navigation.goBack() },
        ]);
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
        placeholder="********"
        secureTextEntry={!showOldPass}
        control={control}
        maxLength={20}
        name="oldPassword"
        label="Senha Atual"
        autoCorrect={false}
        autoCompleteType="password"
        error={errors.oldPassword && errors.oldPassword.message}
        icon={!showOldPass ? 'eye' : 'eye-slash'}
        endIcon
        iconAction={() => setShowOldPass(!showOldPass)}
        iconColor={theme.colors.primary}
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
        error={errors.password && errors.password.message}
        icon={!showPass ? 'eye' : 'eye-slash'}
        endIcon
        iconAction={() => setShowPass(!showPass)}
        iconColor={theme.colors.primary}
      />
      <InputForm
        placeholder="********"
        secureTextEntry={!showPassConfirm }
        control={control}
        maxLength={16}
        name="confirmPassword"
        label="Confirmar Senha"
        autoCorrect={false}
        autoCompleteType="password"
        onSubmitEditing={() => handleSubmit(handleRegister)}
        error={errors.confirmPassword && errors.confirmPassword.message}
        icon={!showPassConfirm ? 'eye' : 'eye-slash'}
        endIcon
        iconAction={() => setShowPassConfirm(!showPassConfirm)}
        iconColor={theme.colors.primary}
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
