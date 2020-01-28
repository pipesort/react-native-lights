import 'react-native-gesture-handler';
import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';

import Homepage from './src/screens/Homepage';
import BottomSheet from './src/BottomSheet/BottomSheet';
import ColoredCards from './src/ColoredCards/ColoredCards';
import PinterestCards from './src/PinterestCards/PinterestCards';
import CardSlider from './src/CardSlider/CardSlider';
import Showpage from './src/Showpage';
import BottomSheetCards from './src/BottomSheetCards/BottomSheetCards';
import {SignInForm, SignUpForm} from './src/forms';
import {createStackNavigator} from '@react-navigation/stack';
import Otp from './src/Otp';
import LandingPage from './src/screens/landingPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
        <Stack.Screen name="ColoredCards" component={ColoredCards} />
        <Stack.Screen name="PinterestCards" component={PinterestCards} />
        <Stack.Screen name="CardSlider" component={CardSlider} />

        <Stack.Screen
          name="SignUpForm"
          options={{
            title: '',
          }}
          options={{headerShown: false}}
          component={SignUpForm}
        />
        <Stack.Screen
          name="Otp"
          options={{
            title: '',
          }}
          options={{headerShown: false}}
          component={Otp}
        />
        <Stack.Screen
          name="LandingPage"
          options={{
            title: '',
          }}
          options={{headerShown: false}}
          component={LandingPage}
        />
        <Stack.Screen name="BottomSheetCards" component={BottomSheetCards} />
        <Stack.Screen
          name="SignInForm"
          options={{headerShown: false}}
          component={SignInForm}
        />
        <Stack.Screen
          name="Showpage"
          options={{
            title: '',
          }}
          component={Showpage}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
