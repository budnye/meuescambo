import React from 'react';
import AppLoading from 'expo-app-loading';

// Apollo Client
import { useQuery } from '@apollo/client'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Main } from '../views/Main';
import { Login } from '../views/Login';
import { Home } from '../views/Home';
import { GET_AUTH } from '../graphql/reactivities/authVariables';

export function Router(){
  const { loading, error, data } = useQuery(GET_AUTH);
  const Stack = createStackNavigator();
  
  if(loading){
    return <AppLoading />
  }

  return(
    <NavigationContainer>
      {console.log(data.auth)}
    <Stack.Navigator>
      <>
        {!data.auth ? (
          <>
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          </>
        ) : (
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        )}
      </>
    </Stack.Navigator>
  </NavigationContainer>
  );
};