/* eslint-disable react-native/no-inline-styles */
/* eslint-disable radix */
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
import {
  Cuisine_Data,
  MotiveData,
  UnitData,
  GenderData,
  BodyFatData,
  Activity,
} from '../components/CalData';

export default function Calculator() {
  const [diet, setDiet] = useState('');
  const [motive, setMotive] = useState('');
  // const [fatPercent, setFatPercent] = useState(BodyFatData);
  const [unit, setUnit] = useState('');
  const [gender, setGender] = useState();
  const [height, setHeight] = useState('');
  const [inch, setInch] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLvl, setActivityLvl] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [result, setResult] = useState(0);
  const [motiveResult, setMotiveResult] = useState(0);

  function showCalorie() {
    let ans =
      10 * parseInt(weight) +
      6.25 * parseInt(height) -
      5.0 * parseInt(age);

    if (gender === 'Male') {
      ans += 5;
    } else {
      ans -= 161;
    }
    
    let res = activityLevel(ans);
    let motiveRes = motivation(res);
    setMotiveResult(motiveRes);

    if (motive === 'US-Standard') {
        convertToUS(); 
    }
    setResult(ans);
 
    setModalVisible(true);
  }

  function convertToUS() {//////////////

    if (inch >= 12) {
      setHeight(height + 1);
    }
    else {
     setHeight(height*12+inch); //cm
      console.log(height);
    }
  }

  function activityLevel(res) {

    switch (activityLvl) {
      case Activity[0].value:
        return res * Activity[0].value;

      case Activity[1].value:
        return res * Activity[1].value;

      case Activity[2].value:
        return res * Activity[2].value;

      case Activity[3].value:
        return res * Activity[3].value;

      case Activity[4].value:
        return res * Activity[4].value;

      case Activity[5].value:
        return res * Activity[5].value;
    }
  }

  function motivation(result) {

    switch (motive) {
      case MotiveData[0].value:
       return  result-(result * 0.2);

      case MotiveData[1].value:
        return result;

      case MotiveData[2].value:
      return result - result * 0.1;
    }
  }

  return (
    <View style={Styles.sectionContainer}>

      <SelectList
        label={'I want to'}
        data={MotiveData}
        value={motive}
        setValue={setMotive}
      />

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
        {unit === 'US-Standard' ? (
          <View >
            <TextInput
              onChangeText={setHeight}
              value={height}
              placeholder="Feet"
              labelboardType="numeric"
              placeholderTextColor={'#0008'}
            />

            <View style={{borderTopWidth: 1, borderTopColor: '#acacae'}}>
              <TextInput
                onChangeText={(inch)=>setInch(inch)}
                value={inch}
                placeholder=" Inch"
                labelboardType="numeric"
                placeholderTextColor={'#0008'}
              />
            </View>
          </View>
        ) : (
          <TextInput
            style={Styles.input}
            onChangeText={(h)=>setHeight(h)}
            value={height}
            placeholder="cm"
            labelboardType="numeric"
            placeholderTextColor={'#0008'}
          />
        )}
      </View>

      <View style={Styles.fieldSet}>
        <Text style={Styles.legend}>Weight</Text>
        <TextInput
          style={Styles.input}
          onChangeText={(w)=>setWeight(w)}
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
          onChangeText={(age)=>setAge(age)}
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
        data={Activity}
        value={activityLvl}
        setValue={setActivityLvl}
      />

      <Pressable style={Styles.btn} onPress={showCalorie}>
        <Text style={Styles.btn.text}>Calculate</Text>
      </Pressable>

      <ShowModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        allResult={[result, motiveResult, motive]}
      />
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
    color:'black',
  },
  fieldSet: {
    borderRadius: 8,
    borderWidth: 0.6,
    borderColor: '#acacad',
    backgroundColor: '#fff',
    color:'black'
  },
  legend: {
    color: 'black',
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#f8f4f4',
    paddingHorizontal: 3,
    zIndex: 99,
    fontSize: 14,
    letterSpacing: 1,
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
