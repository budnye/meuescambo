import React, { useEffect, useState } from 'react';
import { Button as Btn, Image, View, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { Container, InputBox, Label, Footer, LoaderBox } from './styles';
import { Button } from '../../../../../components/Button';
import { InputForm } from '../../../../../components/InputForm';
import {
  GET_CATEGORIES,
  REGISTER_PRODUCT,
  GET_USER_PRODUCTS,
  UPDATE_PRODUCT,
} from '../../../../../graphql/requests';
import { CategorySelectButton } from '../../../../../components/CategorySelectButton';
import { SelectModal } from '../../../../../components/SelectModal';
import { getImageUrl, packFile } from '../../../../../services/s3';
import { getImagePermissions } from '../../../../../services/image';
import { ScreenLoader } from '../../../../../components/ScreenLoader';
import { EditProductCard } from '../../../../../components/EditProductCard';

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

export function EditProductForm({ navigation, product }: any) {
  const [updateProduct, { loading }] = useMutation(UPDATE_PRODUCT, {
    refetchQueries: [GET_USER_PRODUCTS],
  });

  const { data } = useQuery(GET_CATEGORIES);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { name, description, categories, id, image_url } = product;
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
    console.log(product);
    setValue('name', name);
    setValue('description', description);
    setImage(image_url);
    setSelectedCategory(categories[0]);
  }, []);
  const handleSelectCategory = (category: Option) => {
    setSelectedCategory(category);
    setModalVisible(false);
  };

  const handleRegister = async (form: FormData) => {
    try {
      console.log(form);
      const { name, description } = form;

      if (!selectedCategory) {
        Alert.alert('Ops!', 'Você deve selecionar uma categoria');
        return;
      }

      if (!image) {
        Alert.alert('Ops!', 'O produto deve ter uma foto.');
        return;
      }
      setIsLoading(true);
      const newImage = file ? await getImageUrl(file) : image_url;

      const sendData = {
        id,
        name,
        description,
        categories: [selectedCategory.id],
        image_url: newImage,
      };
      console.log('sendData Register products ' + JSON.stringify(sendData));

      const {
        data: { updateProduct: product },
      } = await updateProduct({ variables: sendData });
      console.log(data);

      if (product) {
        Alert.alert(
          'Isso aí!',
          'Produto alterado criado com sucesso, deseja continuar registrando produtos?',
          [
            {
              text: 'Continuar',
              style: 'cancel',
            },
            { text: 'Voltar', onPress: () => navigation.goBack() },
          ],
        );
        setIsLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert('Ops!', error.message.toString());
    }
  };

  const setUpload = (uri: string) => {
    const file = packFile(uri, 'product');
    setFile(file);
    setImage(uri);
  };

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.7,
      maxWidth: 1024,
      maxHeight: 1024,
    });

    console.log('RESULT IMAGE ROLL', result);

    if (!result.cancelled) {
      setUpload(result.uri);
    }
  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result: any = await ImagePicker.launchCameraAsync();
    console.log('RESULT CAMERA', result);

    if (!result.cancelled) {
      setUpload(result.uri);
    }
  };

  const handlePick = () => {
    Alert.alert(
      'Vamos lá',
      'Você gostaria de pegar uma imagem da câmera ou da biblioteca?',
      [
        {
          text: 'Camera',
          onPress: () => openCamera(),
          style: 'cancel',
        },
        { text: 'Biblioteca', onPress: () => pickImage() },
      ],
    );
  };

  useEffect(() => {
    getImagePermissions();
  }, []);

  if (loading) return <ScreenLoader />;

  return (
    <>
      {product && (
        <Container>
          {!isLoading ? (
            <EditProductCard
              product={product}
              activeImage={image}
              action={handlePick}
            />
          ) : (
            <LoaderBox>
              <ScreenLoader />
            </LoaderBox>
          )}
          {data && true && (
            <SelectModal
              visible={modalVisible}
              options={data.categories}
              title="Categorias"
              selected={selectedCategory}
              onSelect={handleSelectCategory}
            />
          )}

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
                selectedCategory
                  ? selectedCategory.name
                  : 'Selecione uma categoria'
              }
              onPress={() => setModalVisible(true)}
            />
          )}
          <Footer>
            <Button
              title={loading || isLoading ? 'Salvando...' : 'Salvar'}
              onPress={handleSubmit(handleRegister)}
            />
          </Footer>
        </Container>
      )}
    </>
  );
}
