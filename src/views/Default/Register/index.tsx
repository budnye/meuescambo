import React from 'react';
import { RegisterHeader } from './RegisterHeader';
import { RegisterForm } from './RegisterForm';
import { 
  Container,
  Scroll
} from './styles';
import { KeyboardAvoidingView, Platform } from 'react-native';

export function Register({ navigation } : any){
  return(
    <Scroll>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : ""}>
      <Container>
      <RegisterHeader />
      <RegisterForm navigation={navigation}/>
      </Container>
      </KeyboardAvoidingView>
      {/* <RegisterFooter /> */}
    </Scroll>
  );
};