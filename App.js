import React from 'react';
import{NavigationContainer} 
from '@react-navigation/native';
import { createstackNavigator } 
from '@react-navigation/stack';
import HomeScreen from './screns/homescreen';
import SecondaryScreen from './screens/Secondary'
import CafeScreen from './screen/CafeScreen';
import BoloScreen from './screen/BoloScreen';
import PaoScreen from './screen/PaoScreen';
const Stack= createstackNavigator();
export default function App(){
  return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Secondary" component={SecondaryScreen}options={{title: 'Opções Deliciosas'}}/>
  <Stack.Screen name="Cafe" component={CafeScreen}options={{title: 'Nosso Café'}}/>
  <Stack.Screen name+"Bolo" component={BoloScreen}options={{title:"Bolo de Chocolate"}}/>
<Stack.Screen name="Pao" component={PaoScreen}options={{title:'Pao Caseiro'}}/>
</Stack.Navigator>
</NavigationContainer>
  );
  }