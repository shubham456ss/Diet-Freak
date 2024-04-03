/* eslint-disable semi *//* eslint-disable prettier/prettier */

import {createContext, useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Newcontext = createContext();

export const Contextmain = ({children}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [usertoken,setusertoken] = useState(null);
 

  const loggin = ()=>{
    setusertoken('wel');
    AsyncStorage.setItem('usertoken' , 'wel');
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
    isLoggedin();

  return (
    <Newcontext.Provider value={{email, setemail, password, setpassword,loggin,logout,usertoken}}>
      {children}
    </Newcontext.Provider>
  );
};

