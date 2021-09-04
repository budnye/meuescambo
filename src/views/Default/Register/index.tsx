import React from 'react';
import { RegisterHeader } from './RegisterHeader';
import { RegisterForm } from './RegisterForm';
import { 
  Container,
  Scroll
} from './styles';
import { KeyboardAvoidingView } from 'react-native';

export function Register({ navigation } : any){
  return(
    <Scroll>
      <KeyboardAvoidingView behavior="position">
      <Container>
      <RegisterHeader />
      <RegisterForm navigation={navigation}/>
      </Container>
      </KeyboardAvoidingView>
      {/* <RegisterFooter /> */}
    </Scroll>
  );
};