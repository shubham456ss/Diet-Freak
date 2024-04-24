/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces *//* eslint-disable prettier/prettier */

import {View, StyleSheet, Image, ImageBackground,Animated} from 'react-native';
import React, {useState,useEffect, useContext} from 'react';
import Inputs from '../components/Inputs';
import Main_button from '../components/Login';
import Title from '../components/Title';
import Signup from '../components/Signup';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {Newcontext} from './Authiopn';
import {useNavigation} from '@react-navigation/native';
import {firebase_auth} from '../../firebase';



const Loginscreen = () => {
  const auth = firebase_auth;
  const {email, setEmail, password, setPassword,loggin,saveEmail} = useContext(Newcontext);
  const navigation = useNavigation();
     const [fadeAnim] = useState(new Animated.Value(0));

  const Onlogin = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
        loggin();
        saveEmail();
        setEmail(''),
        setPassword('');
      })
      .catch(error => {
        alert(error.message)
        console.warn("Email or password is incorrect/invalid")
        navigation.navigate('Loginscreen');
      });

    
  };

    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000, // Adjust duration as needed
          useNativeDriver: true,
        }
      ).start();
    }, []);

  

  return (
    <View style={styles.root}>
      <Animated.Image
        source={require('../assets/Gif/fruit.gif')} // Replace with your GIF source
        style={{
          width: '100%',
          height: 300,
          borderRadius: 20,
          opacity: fadeAnim,
        }}
      />
      <Title />
      <Inputs
        placeholderE="Email"
        placeholderP="Password"
        email={email}
        setEmail={setEmail}
        pass={password}
        setPass={setPassword}
      />
      <Main_button fun={Onlogin} purp="Login" />

      <Signup />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fef68d',
  },
});

export default Loginscreen;

