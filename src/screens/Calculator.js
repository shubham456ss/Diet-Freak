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
// import {cuisineData} from './MainScreen';
import {Cuisine_Data,MotiveData,UnitData,GenderData,BodyFatData,Activity,ActStrings} from '../components/CalData';

export default function Calculator() {
  const [diet, setDiet] = useState(Cuisine_Data);
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
      <SelectList
        label={'Current Diet'}
        data={Cuisine_Data}
        value={diet}
        setValue={setDiet}

        // onChangeDiet={setDiet}
      />

      <SelectList
        label={'I want to'}
        data={MotiveData}
        // onChangeMotive={setMotive}
        value={motive}
        setValue={setMotive}
      />

      <SelectList
        label={'Preffered Units'}
        data={UnitData}
        value={unit}
        setValue={setUnit}

        // onChangeUnit={setUnit}
      />

      <SelectList
        label={'Gender'}
        data={GenderData}
        onChangeGender={setGender}
        value={gender}
        setValue={setGender}
      />

      {/* <Text style={Styles.Title}></Text> */}

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
        // onChangeFat={setFatPercent}
        value={fatPercent}
        setValue={setFatPercent}
      />

      <SelectList
        label={'Activity Level'}
        data={ActStrings}
        onChangeActivity={setActivityLvl}
        value={activityLvl}
        setValue={setActivityLvl}
      />

      <Pressable style={Styles.btn} onPress={() => {}}>
        <Text style={Styles.btn.text}>Calculate</Text>
      </Pressable>
    </View>
  );
}

const Styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    gap:20,
    padding:20,
    justifyContent: 'space-between',

    // alignItems:'center',
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
    borderWidth: 1,
    borderColor: 'transparent',
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 15,
  },
  fieldSet: {
    // marginBottom: 20,
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
