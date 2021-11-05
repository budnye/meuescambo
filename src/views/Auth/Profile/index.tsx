import React, { useState } from 'react';
// Apollo Client
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../graphql/requests';
// Components
import { ProfileHeader } from './ProfileHeader';
import { ProfileForm } from './ProfileForm';
import { ScreenLoader } from '../../../components/ScreenLoader';
import { Container, Scroll } from './styles';
import { StatusBar } from 'expo-status-bar';
import theme from '../../../global/styles/theme';
import { ProfileOptions } from './ProfileOptions';

export interface ProfileProps {
  avatarName?: string;
  editProfile: (edit: boolean) => void;
  edit: boolean;
  user: User;
}

interface User {
  name: string;
  email: string;
}

export function Profile({ navigation}){
  const { data, loading } = useQuery(GET_USER);
  const [edit, setEdit] = useState(false)
  
  const a = `../../../../assets/avatar/Dog_7.png`;
const u = {
  name: 'John Doe',
  email: 'teste@teste.com'
}
  
  if (loading) return <ScreenLoader />;

  return(  
    <Scroll>
      <StatusBar backgroundColor={theme.colors.primary} style="light"/>
    <Container>
      <ProfileHeader edit={edit} editProfile={setEdit} avatarName={a} user={u}/>
      {/* <ProfileForm edit={edit} editProfile={setEdit}/> */}
      <ProfileOptions navigation={navigation}/>
    </Container>
    </Scroll>
  );
};