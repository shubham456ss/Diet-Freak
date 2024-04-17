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
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'black',
    borderStyle:'solid',
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight:'bold',
    color: 'black',
    letterSpacing: 1,
    textDecorationLine:'none',
  },
});

export default Inputs;
