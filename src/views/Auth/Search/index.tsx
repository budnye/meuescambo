import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Searchbar } from '../../../components/SearchBar';
import { GET_FEED, GET_PRODUCTS } from '../../../graphql/requests';
import { Gallery } from './Gallery';

import { Container, Title } from './styles';

export function Search() {
  const [search, setSearch] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(0);
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
    variables: {
      search: search,
    },
  });

  const doSearch = (value: string) => {
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        setSearch(value);
        refetch();
        console.log('refetch');
      }, 300),
    );
  };

  if (error) {
    console.log(error);
  }
  return (
    <Container>
      {console.log(data)}
      <Searchbar action={doSearch} />
      {!loading && data?.searchProducts?.length > 0 && (
        <Gallery items={data.searchProducts} />
      )}
    </Container>
  );
}
