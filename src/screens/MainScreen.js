/* eslint-disable quotes */ /* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, {useState} from 'react';
>>>>>>> 4c19106017884ea644e0faf2bb7ad0eba9ff6860
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import SelectList from '../components/SelectList';
import Generate from '../components/Generate';
import fetchApi from '../components/FetchApi';
import {API_URL} from '@env';
import ModalList from '../components/ModalList';
<<<<<<< HEAD
import {
  Cuisine_Data,
  Diet_Data,
  Meal_Data
} from '../components/CalData';
import AsyncStorage from '@react-native-async-storage/async-storage';
=======
import {Cuisine_Data, Diet_Data, Meal_Data} from '../components/CalData';
import { ScrollView } from 'react-native-gesture-handler';
>>>>>>> 4c19106017884ea644e0faf2bb7ad0eba9ff6860

function MainScreen() {
  const [calorie, setCalorie] = useState('');
  const [cuisine, setCusine] = useState(Cuisine_Data);
  const [diet, setDiet] = useState(Diet_Data);
  const [apiData, setApiData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const url = `${API_URL}?diet=${diet}&maxCalories=${calorie}&cuisine=${cuisine}`;

  useEffect(() => {
    AsyncStorage.getItem('apidata').then((value) => {
      if (value !== null || value !== undefined) {
        setApiData(JSON.parse(value));
      }
      });
    console.log('---------------');
  }, []);
  
  async function GenerateData() {
<<<<<<< HEAD

    if (apiData.length) {
      await AsyncStorage.removeItem('apidata', (err) => {
        console.log(err);
        console.log("clearing data");
      });
    }

    const result = await fetchApi(url);
    if (result !== null && result !== undefined) {
      await AsyncStorage.setItem('apidata', JSON.stringify(result));
    }

     AsyncStorage.getItem('apidata').then(value => {
       if (value !== null || value !== undefined) {
         setApiData(JSON.parse(value));
       }
     });
=======
    const results = await fetchApi(url);
    setApiData(results);
>>>>>>> 4c19106017884ea644e0faf2bb7ad0eba9ff6860
  }

  return (
      <SafeAreaView>
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

<<<<<<< HEAD
        <Generate apiData={apiData} calorie={parseFloat(calorie)} />

        {/* <ModalList
=======
          <Pressable style={Styles.btn} onPress={GenerateData}>
            <Text style={Styles.btn.text}>Generate</Text>
          </Pressable>

          <Generate apiData={apiData} calorie={parseFloat(calorie)} />

          {/* <ModalList 
>>>>>>> 4c19106017884ea644e0faf2bb7ad0eba9ff6860
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          apiData={apiData}
          calorie={parseFloat(calorie)}
        /> */}
        </View>
      </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'column',
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 10,
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
    margin: 'auto',
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
    // marginTop: 20,
    // marginBottom: 15,
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
