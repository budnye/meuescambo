import React, { useState } from 'react';
// Apollo Client
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../graphql/requests';
// Components
import { ProfileHeader } from './ProfileHeader';
import { ProfileForm } from './ProfileForm';
import { ScreenLoader } from '../../../components/ScreenLoader';
import { Container, Scroll } from './styles';

export interface ProfileProps {
  avatarName?: string;
  editProfile: (edit: boolean) => void;
  edit: boolean;
}

export function Profile(){
  const { data, loading } = useQuery(GET_USER);
  const [edit, setEdit] = useState(false)
  
  const a = `../../../../assets/avatar/Dog_7.png`;

  
  if (loading) return <ScreenLoader />;

  return(  
    <Scroll>
    <Container>
      <ProfileHeader edit={edit} editProfile={setEdit} avatarName={a}/>
      <ProfileForm edit={edit} editProfile={setEdit}/>
    </Container>
    </Scroll>
  );
};