import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login'
import Cadastro from './src/screens/Cadastro';
import Home from './src/screens/Home';
import EsqueceuSenha from '../ProjetoInstituto/src/screens/EsqueceuSenha';
import Projetos from './src/screens/Projetos';
import QuemSomos from './src/screens/QuemSomos';
import Recursos from './src/screens/Recursos';
import Tempo from './src/screens/Tempo';

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
        <Menu.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Menu.Screen name="Projetos" component={Projetos} />
        <Menu.Screen name="QuemSomos" component={QuemSomos} />
        <Menu.Screen name="Recursos" component={Recursos} />
        <Menu.Screen name="Tempo" component={Tempo} />
        
      </Menu.Navigator>
    </NavigationContainer>
  )
};