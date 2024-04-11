/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {
  Text,
  View,
  ScrollView,
  ViewBase,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {Component, useState} from 'react';
import SelectList from '../components/SelectList';
import {cuisineData} from './MainScreen';
import {
  MotiveData,
  UnitData,
  GenderData,
  BodyFatData,
  Activity,
  ActStrings,
} from '../components/CalData';

export default function Calculator() {
  const [diet, setDiet] = useState(cuisineData);
  const [motive, setMotive] = useState(MotiveData);
  const [fatPercent, setFatPercent] = useState(BodyFatData);
  const [unit, setUnit] = useState(UnitData);
  const [gender, setGender] = useState(GenderData);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLvl, setActivityLvl] = useState(ActStrings);
  const [apiData, setApiData] = useState([]);

  return (
    <View style={Styles.sectionContainer}>
      <Text style={Styles.Title}> Calci</Text>

      <SelectList
        label={'Current Diet'}
        data={cuisineData}
        onChangeDiet={setDiet}
      />

      <SelectList
        label={'I want to'}
        data={MotiveData}
        onChangeMotive={setMotive}
      />

      <SelectList
        label={'Preffered Units'}
        data={UnitData}
        onChangeUnit={setUnit}
      />

      <SelectList
        label={'Gender'}
        data={GenderData}
        onChangeGender={setGender}
      />

      <Text style={Styles.Title}></Text>

      <View style={Styles.fieldSet}>
        <Text style={Styles.legend}>Height</Text>
        <TextInput
          style={Styles.input}
          search={false}
          onChangeText={setHeight}
          value={height}
          placeholder="Calories"
          labelboardType="numeric"
          placeholderTextColor={'#0008'}
        />
      </View>

      <View style={Styles.fieldSet}>
        <Text style={Styles.legend}>Weight</Text>
        <TextInput
          style={Styles.input}
          search={false}
          onChangeText={setWeight}
          value={weight}
          placeholder="Calories"
          labelboardType="numeric"
          placeholderTextColor={'#0008'}
        />
      </View>

      <View style={Styles.fieldSet}>
        <Text style={Styles.legend}>Age</Text>
        <TextInput
          style={Styles.input}
          search={false}
          onChangeText={setAge}
          value={age}
          placeholder="Calories"
          labelboardType="numeric"
          placeholderTextColor={'#0008'}
        />
      </View>

      <SelectList
        label={'Body Fat'}
        data={BodyFatData}
        onChangeFat={setFatPercent}
      />

      <SelectList
        label={'Activity Level'}
        data={ActStrings}
        onChangeActivity={setActivityLvl}
      />

      <Pressable style={Styles.btn} onPress={() => {}}>
        <Text style={Styles.btn.text}>Calculate</Text>
      </Pressable>
    </View>
  );
}

const Styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    width: '100%',
    height: 48,
    margin: 'auto',
    borderWidth: 1,
    borderColor: 'transparent',
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 15,
  },
  fieldSet: {
    borderRadius: 8,
    borderWidth: 0.6,
    borderColor: '#acacad',
    backgroundColor: '#fff',
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    zIndex: 999,
    fontSize: 14,
  },
  btn: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: 'black',
    color: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    text: {
      color: '#fff',
      fontSize: 18,
    },
  },
});
