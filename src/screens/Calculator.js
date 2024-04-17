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

import React, {useState} from 'react';
import SelectList from '../components/SelectList';
import ShowModal from '../components/Modal';
import {Cuisine_Data,MotiveData,UnitData,GenderData,BodyFatData,ActString} from '../components/CalData';

export default function Calculator() {

  const [diet, setDiet] = useState(Cuisine_Data);
  const [motive, setMotive] = useState(MotiveData);
  const [fatPercent, setFatPercent] = useState(BodyFatData);
  const [unit, setUnit] = useState(UnitData);
  const [gender, setGender] = useState(GenderData);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLvl, setActivityLvl] = useState(ActString);
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState(0);


  function calorieCal() {
    let ans = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5.0 * parseFloat(age);

    if (gender === "Male") {
       ans += 5;
    } else {
      ans -= 161;
    }
    setResult(ans);
    console.log(ans);
    setModalVisible(true);
  }

  function chart() {

    switch (activityLvl) {

      case ActString[0].value:
        return result * ActString[0].value;

      case ActString[1].value:
        return result * ActString[1].value;

      case ActString[2].value:
        return result * ActString[2].value;

      case ActString[3].value:
        return result * ActString[3].value;

      case ActString[4].value:
        return result * ActString[4].value;

      default:
        break;
    }

    let ans = result * 0.8;
    setResult(ans);

  }

  function showResult() {

    

  }


  return (
    <View style={Styles.sectionContainer}>

      {/* <SelectList
        label={'Current Diet'}
        data={Cuisine_Data}
        value={diet}
        setValue={setDiet}
      />

      <SelectList
        label={'I want to'}
        data={MotiveData}
        value={motive}
        setValue={setMotive}
      /> */}

      <SelectList
        label={'Preffered Units'}
        data={UnitData}
        value={unit}
        setValue={setUnit}
      />

      <SelectList
        label={'Gender'}
        data={GenderData}
        value={gender}
        setValue={setGender}
      />

      <View style={Styles.fieldSet}>
        <Text style={Styles.legend}>Height</Text>
        <TextInput
          style={Styles.input}
          search={false}
          onChangeText={setHeight}
          value={height}
          placeholder="in cm"
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
          placeholder="in kg"
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
          labelboardType="numeric"
          placeholderTextColor={'#0008'}
        />
      </View>

      {/* <SelectList
        label={'Body Fat'}
        data={BodyFatData}
        value={fatPercent}
        setValue={setFatPercent}
      /> */}

      <SelectList
        label={'Activity Level'}
        data={ActString}
        value={activityLvl}
        setValue={setActivityLvl}
      />

      <Pressable style={Styles.btn} onPress={calorieCal}>
        <Text style={Styles.btn.text}>Calculate</Text>
      </Pressable>

      <ShowModal modalVisible={modalVisible} setModalVisible={setModalVisible} result={result } />
    </View>
  );
}

const Styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    gap: 20,
    padding: 20,
    justifyContent: 'space-between',
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
    color:'black',
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#f8f4f4',
    paddingHorizontal: 3,
    zIndex: 99,
    fontSize: 14,
    letterSpacing:1,
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
