/* eslint-disable prettier/prettier */
import {View, StyleSheet, Image, Text, TextInput} from 'react-native';
import React, {useContext,useState} from 'react';
import Main_button from '../components/Login';
import Inputs from '../components/Inputs';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Newcontext} from './Authiopn';
import {firebase_auth} from '../../firebase';

const Signupscreen = () => {
  const auth = firebase_auth;
  const {email, setEmail, password, setPassword, name, setName,saveName} = useContext(Newcontext);
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();
  const onsignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
        setUserName('');
        saveName();
        alert('Success! You have successfully signed up');
        navigation.navigate('Loginscreen');
      })
      .catch(error => {
        alert(error.message);
      });
    
    
  };

  return (
    <View style={styles.root}>
      <Image
        source={require('../assets/Gif/fruit.gif')}
        style={{width: 400, height: 300, borderRadius: 20, marginBottom: 20}}
      />
      <TextInput
        style={styles.txt}
        placeholder="Enter Your Name"
        placeholderTextColor="rgba(128, 128, 128, 0.5)"
        value={userName}
        onChangeText={text => {
          setUserName(text);
          setName(text);
        }}
      />
      <Inputs
        placeholderE="Enter your Email"
        placeholderP="Enter Your Password"
        email={email}
        setEmail={setEmail}
        pass={password}
        setPass={setPassword}
      />

      <Main_button purp="Sign up" fun={onsignup} />
      <Text style={styles.title}>
        “A diet is when you watch what you eat and wish you could eat what you
        watch”- Hermione Gingold
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fef68d',
  },
  footer: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  title: {
    fontFamily:'IndieFlower-Regular',
    fontSize: 24,
    color: '#323333',
    marginTop: 20,
  },
  txt: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'black',
    borderStyle: 'solid',
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
    textDecorationLine: 'none',
  },
});
export default Signupscreen;
