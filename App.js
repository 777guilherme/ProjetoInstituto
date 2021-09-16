import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login'
import Cadastro from './src/screens/Cadastro';
import Home from './src/screens/Home'

const Menu = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >


        <Menu.Screen name="Login" component={Login} />
        <Menu.Screen name="Cadastro" component={Cadastro} />
        <Menu.Screen name="Home" component={Home} />
      </Menu.Navigator>
    </NavigationContainer>
  )
};