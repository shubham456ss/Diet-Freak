/* eslint-disable semi */ /* eslint-disable prettier/prettier */

import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Newcontext = createContext();

export const Contextmain = ({children}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [usertoken, setusertoken] = useState(null);
  const [name, setname] = useState('');

  const loggin = () => {
    setusertoken('wel');
    AsyncStorage.setItem('usertoken', 'wel');
  };
  const logout = () => {
    AsyncStorage.removeItem('usertoken');
    setusertoken(null);
  };

  const isLoggedin = async () => {
    try {
      let user = await AsyncStorage.getItem('usertoken');
      setusertoken(user);
    } catch (error) {
      console.log(error);
    }
  };
  const saveName = async username => {
    try {
      await AsyncStorage.setItem('name', username);
      setname(username);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to save email in AsyncStorage
  const saveEmail = async useremail => {
    try {
      await AsyncStorage.setItem('email', useremail);
      setemail(useremail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Check if user is logged in
    isLoggedin();

    // Load name from AsyncStorage
    AsyncStorage.getItem('name').then(storedName => {
      if (storedName) {
        setname(storedName);
      }
    });
    // Load email from AsyncStorage
    
  }, []);

  return (
    <Newcontext.Provider
      value={{
        email,
        setemail:saveEmail,
        password,
        setpassword,
        loggin,
        logout,
        usertoken,
        name,
        setname:saveName,
      
      }}>
      {children}
    </Newcontext.Provider>
  );
};
