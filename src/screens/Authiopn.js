/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */ /* eslint-disable prettier/prettier */

import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Newcontext = createContext();

export const Contextmain = ({children}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertoken, setusertoken] = useState(null);
  const [name, setName] = useState('');
  const [login, isLogin] = useState(false);

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
      isLogin(true);
    } catch (error) {
      console.log(error);
    }
  };
  const saveName = async () => {
    try {
      console.log("name in save ame fun" ,name);
      await AsyncStorage.setItem('name', name);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to save email in AsyncStorage
  const saveEmail = async () => {
    try {
      await AsyncStorage.setItem('email', email);
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
        setName(storedName);
      }
    });
    // Load email from AsyncStorage
<<<<<<< HEAD
    AsyncStorage.getItem('email').then(storedEmail => {
      if (storedEmail) {
        setEmail(storedEmail);
      }
    });
  },[]);
=======
    
  }, []);
>>>>>>> 4c19106017884ea644e0faf2bb7ad0eba9ff6860

  return (
    <Newcontext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        loggin,
        logout,
        usertoken,
        saveEmail,
        saveName,
      
      }}>
      {children}
    </Newcontext.Provider>
  );
};
