import React from 'react';

import { Container, Scroll } from './styles';

import { SocialLogin } from './SocialLogin';
import { LoginDivider } from './LoginDivider';
import { LoginForm } from './LoginForm';
import { LoginFooter } from './LoginFooter';
import { KeyboardAvoidingView, Platform } from 'react-native';

export function Login({ route }) {
  return (
    <Scroll>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'position' : 'position'}
      >
        <Container>
          <SocialLogin />
          <LoginDivider />
          <LoginForm route={route} />
        </Container>
      </KeyboardAvoidingView>
      <LoginFooter />
    </Scroll>
  );
}
