/* eslint-disable react/no-unstable-nested-components */ /* eslint-disable prettier/prettier */

import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// import { Home, Profile } from '../';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Calculator from '../screens/Calculator';
import LogoutButton from '../screens/Logout';

// import About from '../screens/About';
import { Modal } from 'react-native';
import RecipeList from './RecipeList';

// import About from '../screens/About';
import { ScrollView } from 'react-native';

const BottomTab = createBottomTabNavigator();

const TabRoutes = ({ navigation, route }) => {
  
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}

      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          position: 'absolute',
          bottom: 10,
        },
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 20,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        },
      }}>
      
      <BottomTab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calculate Calorie"
        component={Calculator}
        options={{
          tabBarLabel: 'Calorie Calculator',
          tabBarIcon: ({color, size}) => (
            <Fontisto name="fire" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            // <MaterialIcons name="settings" color={color} size={size} />
            <MaterialCommunityIcons
              name="account-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* <BottomTab.Group screenOptions={{presentation: 'modal'}}>
        <BottomTab.Screen name="Recipe" component={RecipeList} />
      </BottomTab.Group> */}
    </BottomTab.Navigator>
  );
};

export default TabRoutes;

