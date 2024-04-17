/* eslint-disable react/no-unstable-nested-components */ /* eslint-disable prettier/prettier */

import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// import { Home, Profile } from '../';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';
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
// export const TabRoutes = () => {
//   return (
//     <BottomTab.Navigator
//       tabBar={tabsProps => (
//         <>
//           <BottomTabBar {...tabsProps} />
//         </>
//       )}
//       initialRouteName="Home">
//       <BottomTab.Screen
//         name="Home"
//         component={MainScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="Calculator"
//         component={Calculator}
//         options={{
//           tabBarLabel: 'Calculate',
//           tabBarIcon: ({color, size}) => (
//             <MaterialIcons name="calculate" color={color} size={size} />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="Setting"
//         component={LogoutButton}
//         options={{
//           tabBarLabel: 'Setting',
//           tabBarIcon: ({color, size}) => (
//             <MaterialIcons name="settings" color={color} size={size} />
//           ),
//         }}
//       />
//     </BottomTab.Navigator>
//   );

