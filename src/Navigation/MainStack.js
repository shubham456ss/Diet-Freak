/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {createDrawerNavigator,DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import React ,{useContext}from 'react';
// import TabRoutes from './TabRoutes';
import ProfileScreen from '../screens/ProfileScreen';
import Calculator from '../screens/Calculator';
// import About from '../components/About';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import LogoutButton from '../screens/Logout';
import MainScreen from '../screens/MainScreen';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeList from './RecipeList';
import SevenDay from '../screens/SevenDay';
import SelectGender from './../screens/SelectGender';
import {Newcontext} from '../screens/Authiopn';
import Planner from '../screens/Planner';
import ChartComponent from './../components/Chart';
import LinearGrad from '../components/LinearGrad';
import HomePage from '../screens/Homescreen';
import Generate from '../components/Generate';
import Recipescreen from '../screens/Recipescreen';
// import ChartComponent from './../components/Chart';
import { StyleSheet, Button } from 'react-native';
import TabRoutes from './TabRoutes';
import Aboutscreen from '../screens/Aboutscreen';

 

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Mainstack = ({ navigate, route }) => {

  
  return (
    <Stack.Navigator initialRouteName='HomeDrawer' screenOptions={{headerShown:false}}>

      <Stack.Screen name="HomeDrawer" component={Drawerstack} />
     
      <Stack.Screen name="Modal" component={RecipeList} />

      <Stack.Screen name="Planner" component={Planner} />

      <Stack.Screen name="Gender" component={SelectGender} />

      <Stack.Screen name="Diet" component={MainScreen} />

        <Stack.Screen name="recipe" component={Recipescreen} />
      
    </Stack.Navigator>
  );
}


// function CustomDrawerContent(props) {

//   return (
//     <DrawerContentScrollView {...props} >
//       <DrawerItemList {...props} />
//       <DrawerItem icon={({color, size})=>(<MaterialIcons name="exit-to-app" size={size} color={color} />)} label="SignOut"  />
//     </DrawerContentScrollView>
//   );
// }


const Drawerstack = ({ navigate, route }) => {

  const { logout } = useContext(Newcontext);

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: true}}
      // drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Mainscreen"
        component={HomePage}
        options={{
          headerTitle: 'Diet Freak',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            letterSpacing: 1,
          },
          headerRight: () => (
            <MaterialIcons
              name="exit-to-app"
              size={25}
              color="black"
              style={{marginEnd: 10}}
              onPress={logout}
            />
          ),
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
        name="Calorie Calculator"
        component={Calculator}
        options={{
          title: 'Calorie Calculator',
          drawerIcon: ({color, size}) => (
            <Ionicons name="fitness" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Dietplan"
        component={SevenDay}
        options={{
          title: '7 Day Dietplan',
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
        component={Aboutscreen}
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
    </Drawer.Navigator>
  );
};

// const styles = StyleSheet.create({

//   headerstyle: {
//    letterSpacing:1,
//   }
// })

export default Mainstack;
