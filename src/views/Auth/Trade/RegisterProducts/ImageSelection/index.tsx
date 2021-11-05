import React, { useEffect, useState } from 'react';
import { Button, Image, View, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Container, Title } from './styles';

export function ImageSelection() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
        const { status: statusCamera } =
          await ImagePicker.requestCameraPermissionsAsync();
        if (statusCamera !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri);
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

  return (
    <Container>
      <Button title="Foto do produto" onPress={handlePick} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </Container>
  );
}
