import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Main_button = ({fun, purp}) => {
  return (
    
    <TouchableOpacity onPress={fun} style={styles.main}>
      <Text style={styles.tex}>{purp}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 0.4,
    borderRadius: 7,
    marginVertical: 8,
    paddingVertical: 15,
    backgroundColor: '#396a55',
  },
  tex: {
    color: 'white',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Main_button;
