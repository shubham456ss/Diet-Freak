/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {signOut} from 'firebase/auth';
import {firebase_auth} from '../../firebase';
import {useNavigation} from '@react-navigation/native';
import { Newcontext } from './Authiopn';
import { useContext } from 'react';

const LogoutButton = () => {
  const {logout} = useContext(Newcontext)
  const navigation = useNavigation();
  const out = ()=>{
    navigation.navigate('Initial');
  }
  const handleLogout = () => {
    const auth = firebase_auth;

    signOut(auth)
      .then(() => {
        logout();
        out();

      })
      .catch(error => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LogoutButton;
