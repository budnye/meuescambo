import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const getImagePermissions = async () => {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    const { status: statusCamera } =
      await ImagePicker.requestCameraPermissionsAsync();
    if (statusCamera !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    }
  }
};
