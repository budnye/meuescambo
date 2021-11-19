import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../graphql/reactivities/authVariables';

export const clearData = async () => {
  await AsyncStorage.clear();
  auth(false);
};
