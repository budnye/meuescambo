import React from 'react';
import AppLoading from 'expo-app-loading';

// Apollo Client
import { useQuery } from '@apollo/client';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Main } from '../views/Default/Main';
import { Login } from '../views/Default/Login';
import { Register } from '../views/Default/Register';
import { Forgot } from '../views/Default/Forgot';
import { ProfileLocation } from '../views/Auth/Profile/ProfileLocation';
import { ProfilePersonal } from '../views/Auth/Profile/ProfilePersonal';
import { ProfilePassword } from '../views/Auth/Profile/ProfilePassword';
import { NavigationBar } from '../views/Auth/NavigationBar';
import { GET_AUTH } from '../graphql/reactivities/authVariables';
import { RegisterProducts } from '../views/Auth/Trade/RegisterProducts';
import { ProductModal } from '../views/Auth/Modal/ProductModal';

export function Router() {
  const { loading, error, data } = useQuery(GET_AUTH);
  const Stack = createStackNavigator();

  if (loading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      {console.log('auth Router ', typeof data.auth)}
      <Stack.Navigator>
        <>
          {!data.auth ? (
            <>
              <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Forgot"
                component={Forgot}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={NavigationBar}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterProducts"
                component={RegisterProducts}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileLocation"
                component={ProfileLocation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfilePersonal"
                component={ProfilePersonal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfilePassword"
                component={ProfilePassword}
                options={{ headerShown: false }}
              />
              <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen
                  name="ProductModal"
                  component={ProductModal}
                  options={{ headerShown: false }}
                />
              </Stack.Group>
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
