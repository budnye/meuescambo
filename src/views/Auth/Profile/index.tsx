import React, { useState, useEffect } from 'react';
// Apollo Client
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER, UPDATE_PROFILE } from '../../../graphql/requests';
// Components
import { ProfileHeader } from './ProfileHeader';
import { ProfileForm } from './ProfileForm';
import { ScreenLoader } from '../../../components/ScreenLoader';
import { Container, Scroll } from './styles';
import { StatusBar } from 'expo-status-bar';
import theme from '../../../global/styles/theme';
import { ProfileOptions } from './ProfileOptions';
import { getImagePermissions } from '../../../services/image';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getImageUrl, packFile } from '../../../services/s3';

export interface ProfileProps {
  avatarName?: string;
  editProfile: (edit: boolean) => void;
  edit: boolean;
  user: User;
}

interface User {
  name: string;
  email: string;
}

export function Profile({ navigation }) {
  const { data } = useQuery(GET_USER);
  const [update, { loading, error }] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [{ query: GET_USER }],
  });

  // const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const setUpload = (uri: string) => {
    const file = packFile(uri, 'profile');
    setFile(file);
    setImage(uri);
  };

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    console.log('RESULT IMAGE ROLL', result);

    if (!result.cancelled) {
      setUpload(result.uri);
      const uri = await getImageUrl(file);
      await uploadImage(uri);
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
      const uri = await getImageUrl(file);
      await uploadImage(uri);
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

  const uploadImage = async (uri: string) => {
    try {
      console.log('>>> Start uploadImage', uri);
      const { name, email } = data.getUser;

      let sendData = {
        name,
        email,
        avatar: uri,
      };

      const {
        data: { updateUser: user },
      } = await update({ variables: sendData });
      if (user) {
        Alert.alert('Sucesso', 'Imagem alterada com sucesso');
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert(
        'Ops!',
        error.message.toString() || 'Erro ao editar a imagem do perfil',
      );
    }
  };

  useEffect(() => {
    getImagePermissions();
  }, []);

  if (loading) return <ScreenLoader />;

  return (
    <Scroll>
      {console.log({ data, loading, error })}
      <StatusBar backgroundColor={theme.colors.primary} style="light" />
      <Container>
        {!loading && data?.getUser && (
          <ProfileHeader
            edit={false}
            editProfile={handlePick}
            user={data.getUser}
          />
        )}
        {/* <ProfileForm edit={edit} editProfile={setEdit}/> */}
        <ProfileOptions navigation={navigation} />
        {console.log(error)}
      </Container>
    </Scroll>
  );
}
