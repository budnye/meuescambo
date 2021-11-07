import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { Container, InputBox, Label, Footer } from './styles';
import { Button } from '../../../../../components/Button';
import { InputForm } from '../../../../../components/InputForm';
import { Alert } from 'react-native';
import {
  GET_CATEGORIES,
  REGISTER_PRODUCT,
  GET_USER_PRODUCTS,
} from '../../../../../graphql/requests';
import { CategorySelectButton } from '../../../../../components/CategorySelectButton';
import { SelectModal } from '../../../../../components/SelectModal';
import { ImageSelection } from '../ImageSelection';

interface FormData {
  name: string;
  description: string;
  category: string;
}

export interface Option {
  id: string;
  name: string;
}

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'O nome ter no mínimo 2 caracteres')
    .max(200, 'O nome deve ter no máximo 200 caracteres')
    .required('Nome é obrigatório'),
  description: Yup.string()
    .min(2, 'A descrição ter no mínimo 2 caracteres')
    .max(200, 'A descrição deve ter no máximo 200 caracteres')
    .required('A descrição é obrigatória'),
});

export function ProductForm({ navigation }: any) {
  const [registerProduct, { loading }] = useMutation(REGISTER_PRODUCT, {
    refetchQueries: [GET_USER_PRODUCTS],
  });
  const { data } = useQuery(GET_CATEGORIES);
  const image_url = 'https://img.olx.com.br/images/35/352105707667580.jpg';

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
  });
  function handleSelectCategory(category: Option) {
    setSelectedCategory(category);
    setModalVisible(false);
  }
  async function handleRegister(form: FormData) {
    try {
      console.log(form);
      const { name, description } = form;

      if (!selectedCategory) {
        Alert.alert('Ops!', 'Você deve selecionar uma categoria');
        return;
      }
      const sendData = {
        name,
        description,
        categories: [selectedCategory.id],
        image_url,
      };

      const {
        data: { createProduct: product },
      } = await registerProduct({ variables: sendData });
      console.log(data);

      if (product) {
        Alert.alert(
          'Isso aí!',
          'Produto criado com sucesso, deseja continuar registrando produtos?',
          [
            {
              text: 'Continuar',
              onPress: () => setModalVisible(false),
              style: 'cancel',
            },
            { text: 'Voltar', onPress: () => navigation.goBack() },
          ],
        );
        reset();
        setSelectedCategory(null);
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert('Ops!', error.message.toString());
    }
  }

  return (
    <Container>
      {data && true && (
        <SelectModal
          visible={modalVisible}
          options={data.categories}
          title="Categorias"
          selected={selectedCategory}
          onSelect={handleSelectCategory}
        />
      )}
      <ImageSelection />

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
        placeholder="Descrição"
        control={control}
        name="description"
        label="Descrição"
        maxLength={255}
        multiline={true}
        autoCorrect={true}
        autoCapitalize="sentences"
        error={errors.description && errors.description.message}
      />
      {data && true && (
        <CategorySelectButton
          title={
            selectedCategory ? selectedCategory.name : 'Selecione uma categoria'
          }
          onPress={() => setModalVisible(true)}
        />
      )}
      <Footer>
        <Button
          title={!loading ? 'Registrar' : 'Salvando...'}
          onPress={handleSubmit(handleRegister)}
        />
      </Footer>
    </Container>
  );
}
