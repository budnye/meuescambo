import React from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Main } from '../views/Main';
import { Login } from '../views/Login';
import { Home } from '../views/Home';

export function Router(){

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
    <Stack.Navigator>
      <>
        {!false ? (
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