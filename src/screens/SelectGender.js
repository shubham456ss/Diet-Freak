/* eslint-disable space-infix-ops */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  KidFemale,
  KidMale,
  TeenFemale,
  TeenMale,
  AdultMale,
  AdultFemale,
  OldFemale,
  OldMale,
  Pregnant,
} from '../components/SvgComponent';

const SelectGender = ({ navigation, route }) => {
  
  const {gender} = route.params;

  const width = 150;
  const height = 150;

  return (
    <View style={gender ? styles.root : [{   padding: 10,justifyContent: 'center',alignItems:'center',gap:10}]}>

      <Text style={styles.text}>
        Select your Category
      </Text>
      {gender ? (
        <>
          <TouchableOpacity  onPress={() => {  navigation.navigate('Planner', {pathkey: 0});}}>
            <KidMale width={width} height={height} />
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => {  navigation.navigate('Planner', {pathkey:1})}}>
            <TeenMale width={width} height={height} />
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => {  navigation.navigate('Planner', {pathkey: 2})}}>
            <AdultMale width={width} height={height} />
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => {  navigation.navigate('Planner', {pathkey: 4})}}>
            <OldMale width={width} height={height} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity  onPress={() => {  navigation.navigate('Planner', {pathkey: 0})}}>
            <KidFemale width={width} height={height} />
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => {  navigation.navigate('Planner', {pathkey: 1})}}>
            <TeenFemale width={width} height={height} />
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => {  navigation.navigate('Planner', {pathkey: 3})}}>
            <AdultFemale width={width} height={height} />
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => {  navigation.navigate('Planner', {pathkey: 4})}}>
            <OldFemale width={width} height={height} />
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => {  navigation.navigate('Planner', {pathkey: 5})}}>
            <Pregnant width={width} height={height} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:10,
  },
  img: {
    height: 100,
    width: 150,
  },
  text: {
    color:'black',
    fontSize: 30,
    fontWeight:'bold',
  }
 
});
export default SelectGender;
