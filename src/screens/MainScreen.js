/* eslint-disable quotes */ /* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SelectList from '../components/SelectList';
import Generate from "../components/Generate";
import fetchApi from '../components/FetchApi';
import { API_URL } from '@env';


const Diet_Data = [
  {key: '1', label: 'pescetarian', value: 'pescetarian'},
  {key: '2', label: 'lacto vegetarian', value: 'lacto vegetarian'},
  {key: '3', label: 'ovo vegetarian', value: 'ovo vegetarian'},
  {key: '4', label: 'vegan', value: 'vegan'},
  {key: '5', label: 'paleo', value: 'paleo'},
  {key: '6', label: 'primal', value: 'primal'},
  {key: '7', label: 'vegetarian', value: 'vegetarian'},
];

const Meal_Data = [
  {key: '1', label: '1', value: '1'},
  {key: '2', label: '2', value: '2'},
  {key: '3', label: '3', value: '3'},
  {key: '4', label: '4', value: '4'},
  {key: '5', label: '5', value: '5'},
];

const Cuisine_Data = [
  {key: '1', label: 'indian', value: 'indian'},
  {key: '2', label: 'chinese', value: 'chinese'},
  {key: '3', label: 'italian', value: 'italian'},
  {key: '4', label: 'thai', value: 'thai'},
  {key: '5', label: 'southern', value: 'southern'},
  {key: '6', label: 'japanese', value: 'japanese'},
];

const items = [
  {
    id: 1079930,
    title: 'Crock Pot Pasta Bolognese Sauce',
    nutrition: {
      nutrients: [
        {name: 'Calories', amount: 174.105, unit: 'kcal'},
      ],
    },
  },
];


function MainScreen() {

  const [calorie, setCalorie] = useState('');
  const [cuisine, setCusine] = useState(Cuisine_Data);
  const [diet, setDiet] = useState(Diet_Data);
  const [meal, setMeal] = useState(Meal_Data);
  const [apiData, setApiData] = useState([]);

  const url = `${API_URL}?diet=${diet}&maxCalories=${calorie}&cuisine=${cuisine}`;

  async function GenerateData() {
      const results = await fetchApi(url);
      setApiData(results);
  }

  return (
    <SafeAreaView >
      <View style={Styles.sectionContainer}>

        <SelectList
          label={'Food Type'}
          data={Diet_Data}
          value={diet}
          setValue={setDiet}
        />

        <View style={Styles.fieldSet}>
          <Text style={Styles.legend}>I want to eat</Text>
          <TextInput
            style={Styles.input}
            search={false}
            onChangeText={setCalorie}
            value={calorie}
            placeholder="Calories"
            labelboardType="numeric"
            placeholderTextColor={'#0008'}
          />
        </View>

        <SelectList
          label={'Cuisine'}
          data={Cuisine_Data}
          value={cuisine}
          setValue={setCusine}
        />

        <Pressable style={Styles.btn} onPress={GenerateData}>
          <Text style={Styles.btn.text}>Generate</Text>
        </Pressable>

        <Generate apiData={apiData} calorie={parseFloat(calorie)} />

      </View>
    </SafeAreaView>
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

export default MainScreen;



