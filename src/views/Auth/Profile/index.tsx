import React from 'react';
// Apollo Client
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../graphql/requests';
// Components
import { ProfileHeader } from './ProfileHeader';
import { ProfileForm } from './ProfileForm';
import { ScreenLoader } from '../../../components/ScreenLoader';
import { Container, Scroll } from './styles';

export function Profile(){
  const { data, loading } = useQuery(GET_USER);
  
  if (loading) return <ScreenLoader />;

  return(  
    <Scroll>
    <Container>
      <ProfileHeader />
      <ProfileForm />
    </Container>
    </Scroll>
  );
};