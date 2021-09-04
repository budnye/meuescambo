import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Icon } from './styles';
import theme from '../../../global/styles/theme';
import { Home } from '../Home';
import { Search } from '../Search';
import { Trade } from '../Trade';
import { Transactions } from '../Transactions';
import { Profile } from '../Profile';


const Tab = createMaterialBottomTabNavigator();

export function NavigationBar() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'search', title: 'Busca', icon: 'magnify' },
    { key: 'products', title: 'Escambo', icon: 'refresh' },
    { key: 'transactions', title: 'Negociações', icon: 'archive' },
    { key: 'profile', title: 'Perfil', icon: 'account' },
  ]);

  return (
    <Tab.Navigator
      initialRouteName="home"
      activeColor={theme.colors.primary}
      barStyle={{ backgroundColor: theme.colors.light }}
      shifting={false}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: 'Busca',
          tabBarIcon: ({ color }) => <Icon name="search" color={color} />,
        }}
      />
      <Tab.Screen
        name="products"
        component={Trade}
        options={{
          tabBarLabel: 'Escambo',
          tabBarIcon: ({ color }) => <Icon name="refresh" color={color} />,
        }}
      />
      <Tab.Screen
        name="transactions"
        component={Transactions}
        options={{
          tabBarLabel: 'Negociações',
          tabBarIcon: ({ color }) => <Icon name="suitcase" color={color} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
