import 'react-native-gesture-handler';
import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import Homepage from './src/screens/Homepage';
import BottomSheet from './src/components/BottomSheet';
import ColoredCards from './src/components/ColoredCards';
import CardSlider from './src/components/CardSlider';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="BottomSheet" component={BottomSheet} />
      <Stack.Screen name="ColoredCards" component={ColoredCards} />
      <Stack.Screen name="CardSlider" component={CardSlider} />
    </Stack.Navigator>
    </NavigationNativeContainer>
  );
};



export default App;
