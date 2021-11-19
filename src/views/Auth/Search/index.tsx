import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { ScreenLoader } from '../../../components/ScreenLoader';
import { Searchbar } from '../../../components/SearchBar';
import { Welcome } from '../../../components/Welcome';
import {
  GET_FEED,
  GET_PRODUCTS,
  GET_USER_PRODUCTS,
} from '../../../graphql/requests';
import { Gallery } from './Gallery';

import { Container, Title } from './styles';

export function Search({ navigation, route }) {
  const [search, setSearch] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const {
    data: { userProducts },
  } = useQuery(GET_USER_PRODUCTS);

  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
    variables: {
      search: search,
    },
  });

  const doSearch = (value: string) => {
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        setIsSearching(true);
        setSearch(value);
        refetch();
        setIsSearching(false);
      }, 300),
    );
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
      console.log('refetch');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      {userProducts?.length > 0 && <Searchbar action={doSearch} />}
      {loading || (isSearching && <ScreenLoader />)}
      {!loading && !isSearching && userProducts?.length > 0 && (
        <Gallery
          items={data.searchProducts}
          searchTerm={search}
          navigation={navigation}
        />
      )}
      {userProducts?.length === 0 && <Welcome navigation={navigation} />}
    </Container>
  );
}
