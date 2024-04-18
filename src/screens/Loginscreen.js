/* eslint-disable no-trailing-spaces *//* eslint-disable prettier/prettier */

import {View, StyleSheet, Image} from 'react-native';
import React, {useState, useContext} from 'react';
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
  const {email, setemail, password, setpassword,loggin} = useContext(Newcontext);
  const navigation = useNavigation();

  const Onlogin = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
        loggin();
        navigation.navigate('Homescreen');
      })
      .catch(error => {
        navigation.navigate('Loginscreen');
        alert(error.message)
        console.warn("Email or password is incorrect/invalid")
      });


  };

  return (
    <View style={styles.root}>
      <Image
        source={require('../assets/Gif/fruit.gif')}
        style={{width: 400, height: 300, borderRadius: 20}}
      />
      <Title />
      <Inputs
        placeholderE="Email"
        placeholderP="Password"
        email={email}
        setemail={setemail}
        pass={password}
        setpass={setpassword}
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
