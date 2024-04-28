/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Contextmain } from './src/screens/Authiopn';
import Appnav from './src/Navigation/Appnav';



function App() {

  return (
    <Contextmain>
      <NavigationContainer>
        <Appnav />
      </NavigationContainer>
    </Contextmain>
  );
}






export default App;
