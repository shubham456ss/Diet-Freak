/* eslint-disable react/self-closing-comp *//* eslint-disable prettier/prettier */

import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Inputs = ({placeholderE, placeholderP ,email,setemail ,pass,setpass}) => {
  return (
    <View style={styles.main}>
      <TextInput placeholder={placeholderE} style={styles.input}
      value={email}
      onChangeText={text =>setemail(text)}
      ></TextInput>
      <TextInput
        placeholder={placeholderP}
        style={styles.input}
        value={pass}
        onChangeText={text =>setpass(text)}
        secureTextEntry></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#a8ac73',
    borderWidth: 0,
    borderRadius: 7,
    paddingHorizontal: 10,
    fontSize: 15,
    color:'black',
    // marginVertical: 10,

    // color: 'black',
  },
});

export default Inputs;
