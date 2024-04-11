/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import TabRoutes from './TabRoutes';
import ProfileScreen from '../screens/ProfileScreen';
import Calculator from '../screens/Calculator';
import About from '../screens/About';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoutButton from '../screens/Logout';
import MainScreen from '../screens/MainScreen';

// import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Mainstack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="Mainscreen"
        component={TabRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({color, size}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="CalculateCalorie"
        component={Calculator}
        options={{
          title: 'CalculateCalorie',
          drawerIcon: ({color, size}) => (
            <Ionicons name="fitness" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Dietplan"
        component={MainScreen}
        options={{
          title: 'Dietplan',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="food-variant"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="information"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Signout"
        component={LogoutButton}
        options={{
          title: 'Signout',
          drawerIcon: ({color, size}) => (
            <FontAwesome name="sign-out" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Mainstack;
