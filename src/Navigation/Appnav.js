/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import { Newcontext } from '../screens/Authiopn';
import TabRoutes from './TabRoutes';
import Authstack from './AuthStack';


function Appnav() {
    const {usertoken} = useContext(Newcontext);
  return (
    <View style={styles.root}>
     {usertoken !== null ? <TabRoutes/> : <Authstack/>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Appnav;
