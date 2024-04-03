/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signupscreen from '../screens/Signupscreen';
import Initialscreen from '../screens/Loginscreen';
import LogoutButton from '../screens/Logout';

const Stack = createNativeStackNavigator();

const Authstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Initialscreen">
      <Stack.Screen name="Initial" component={Initialscreen} />
      <Stack.Screen name="Signupscreen" component={Signupscreen} />
      <Stack.Screen name="Homescreen" component={LogoutButton} />
    </Stack.Navigator>
  );
};

export default Authstack;
