import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View style={styles.root}>
    

      <Text style={styles.title}>Dietfreak</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    // padding:30,
  },

  title: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 70,
    color: '#323333',
  },
}); 

export default Title;
