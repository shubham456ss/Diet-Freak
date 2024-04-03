/* eslint-disable eslint-comments/no-unlimited-disable *//* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { useState,useEffect} from 'react';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


export default function Routes() {

    const [userData,setUserData] = useState(null);

    useEffect(() => {
       getData();
    //    eslint-disable-next-line
      }, []);
      
     async function getData (){
          const data = await AsyncStorage.getItem('userData');
          const userdata = JSON.parse(data);
          setUserData(userdata);
        }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                { userData ? MainStack(Stack)
                    : AuthStack(Stack)
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}