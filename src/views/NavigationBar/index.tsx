import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Icon } from './styles';
import theme from '../../global/styles/theme';

const HomeRoute = () => <Text>Home</Text>;

const SearchRoute = () => <Text>Search</Text>;

const ProductsRoute = () => <Text>Meu escambo</Text>;

const TransactionRoute = () => <Text>Negociações</Text>;

const ProfileRoutes = () => <Text>Perfile</Text>;


export function NavigationBar() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'search', title: 'Busca', icon: 'magnify' },
    { key: 'products', title: 'Escambo', icon: 'refresh' },
    { key: 'transactions', title: 'Negociações', icon: 'archive' },
    { key: 'profile', title: 'Perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    products: ProductsRoute,
    transactions: TransactionRoute,
    profile: ProfileRoutes,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
      barStyle={{ backgroundColor: '#FFFFFF' }}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.inactive}

    />
  );
};
