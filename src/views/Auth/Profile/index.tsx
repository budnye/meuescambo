import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Title } from './styles';
import { ProfileHeader } from './ProfileHeader';

export function Profile(){
  return(
    <Container>
      <StatusBar style="light" />
      <ProfileHeader />
    </Container>
  );
};