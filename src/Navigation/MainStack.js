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


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Mainstack = ({navigate,route}) => {

  return (
    <Stack.Navigator initialRouteName='HomeDrawer' screenOptions={{headerShown:false}}>

      <Stack.Screen name="HomeDrawer" component={Drawerstack} />
     
      <Stack.Screen name="Modal" component={RecipeList} />

      <Stack.Screen name="Planner" component={Planner} />

      <Stack.Screen name="Gender" component={SelectGender} />
      
    </Stack.Navigator>
  );
}


function CustomDrawerContent(props) {
  const { logout } = useContext(Newcontext);
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />
      <DrawerItem icon={({color, size})=>(<MaterialIcons name="exit-to-app" size={size} color={color} />)} label="SignOut" onPress={logout} />
      
    </DrawerContentScrollView>
  );
}


const Drawerstack = ({ navigate, route }) => {

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: true}}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Mainscreen"
        component={MainScreen}
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
      {/* <Drawer.Screen
        name="gender"
        component={SelectGender}
        options={{
          title: 'Gender',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="information"
              size={size}
              color={color}
            />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="About"
        component={SevenDay}
        options={{
          title: '7day',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="information"
              size={size}
              color={color}
            />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Signout"
        component={LogoutButton}
        options={{
          title: 'Signout',
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="exit-to-app" size={size} color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default Mainstack;
