/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signupscreen from '../screens/Signupscreen';
import LogoutButton from '../screens/Logout';
import Loginscreen from '../screens/Loginscreen';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

const Authstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Loginscreen">
      <Stack.Screen name="Loginscreen" component={Loginscreen} />
      <Stack.Screen name="Signupscreen" component={Signupscreen} />
      <Stack.Screen name="Homescreen" component={LogoutButton} />
    </Stack.Navigator>
  );
};

export default Authstack;
