import React from 'react';

import { Container, Scroll } from './styles';

import { SocialLogin } from './SocialLogin';
import { LoginDivider } from './LoginDivider';
import { LoginForm } from './LoginForm';
import { LoginFooter } from './LoginFooter';
import { KeyboardAvoidingView } from 'react-native';


export function Login(){
  return(
    <Scroll>
      <KeyboardAvoidingView behavior="position">
        <Container>
        <SocialLogin />
        <LoginDivider />
        <LoginForm />
        </Container>
      </KeyboardAvoidingView>
      <LoginFooter />
    </Scroll >

  );
};