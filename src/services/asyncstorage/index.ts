import AsyncStorage from '@react-native-async-storage/async-storage';


export async function getAuth(): Promise<boolean> {
  return await AsyncStorage.getItem('auth') === 'true';
}