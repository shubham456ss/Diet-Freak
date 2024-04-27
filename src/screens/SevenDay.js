import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const SevenDay = ({navigation, route}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Select your gender</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Gender', {gender: true});
        }}>
        <Image style={styles.img} source={require('../assets/images/m1.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Gender', {gender: false});
        }}>
        <Image style={styles.img} source={require('../assets/images/f1.png')} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',

    // gap:-30,
    // backgroundColor: '#fef68d',
  },
  img: {
    height: 250,
    width: 250,
  },
  text: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowRadius: 10,
    textShadowColor: 'white',
  },
});
export default SevenDay;
