import {View, Text, Image, Alert} from 'react-native';
import React from 'react';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Navigate from '../Navigation/Navigate';
import Signupscreen from '../screens/Signupscreen';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        style={{color: 'black', fontSize: 16}}
        onPress={() => {
          // console.warn('yooo');
          
          navigation.navigate('Signupscreen');
        }}>
        Dont have a account?Sign up now!
      </Text>
    </View>
  );
};

export default Signup;
