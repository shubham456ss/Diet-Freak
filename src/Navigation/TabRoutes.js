/* eslint-disable react/no-unstable-nested-components *//* eslint-disable prettier/prettier */


import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Home, Profile } from '../';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen'
import Calculator from '../screens/Calculator';
import LogoutButton from '../screens/Logout';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName="Home"
        >
            <BottomTab.Screen name="Home" component={MainScreen} />
            <BottomTab.Screen name="Calculator" component={Calculator} />
            <BottomTab.Screen name="Setting" component={LogoutButton} />
        </BottomTab.Navigator>

    );
};

export default TabRoutes;
