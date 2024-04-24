/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import { Newcontext } from '../screens/Authiopn';
import Authstack from './AuthStack';
import Mainstack from './MainStack';


function Appnav() {
    const {usertoken} = useContext(Newcontext);
  return (
    <View style={styles.root}>
     {usertoken !== null ? <Mainstack/> : <Authstack/>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Appnav;
