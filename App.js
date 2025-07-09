import React from 'react';
import{NavigationContainer}
from'@react-navigation/native';
import{createStackNavigator}
from'@react-navigation/stack';
import HomeScreen from './screns/homescreen';
import SecondaryScreen from './sreeens/Secondary';
import CafeScreen from './screeens/CafeScreen';
import BoloScreen from './screeens/BoloScreen';
import PaoScreen from './screeens/PaoScreen';
const Stack= createStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component= {HomeScreen}options={{title:'Bem Vindo!'}}/
    <Stack.Screen name="Secondary" component={SecondaryScreen}options={{title:'Opções Deliciosas'}}/>
    <Stack.Screen name="Cafe" component={CafeScreen}options={{title:'Nosso Café'}}/>
    <Stack.Screen name="Bolo" component={BoloScreen}options={{title:'Bolo de Chocolate'}}/>
<Stack.Screen name="Pao" component={PaoScreen}options={{title:'Pao Caseiro'}}/>
</Stack.Navigator>
</NavigationContainer>
  );
  }

