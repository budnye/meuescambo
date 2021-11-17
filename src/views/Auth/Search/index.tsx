import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { ScreenLoader } from '../../../components/ScreenLoader';
import { Searchbar } from '../../../components/SearchBar';
import { GET_FEED, GET_PRODUCTS } from '../../../graphql/requests';
import { Gallery } from './Gallery';

import { Container, Title } from './styles';

export function Search({ navigation, route }) {
  const [search, setSearch] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
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
      <Searchbar action={doSearch} />
      {loading || isSearching ? (
        <ScreenLoader />
      ) : (
        <Gallery
          items={data.searchProducts}
          searchTerm={search}
          navigation={navigation}
        />
      )}
    </Container>
  );
}
