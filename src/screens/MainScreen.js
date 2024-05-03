/* eslint-disable quotes */ /* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SelectList from '../components/SelectList';
import Generate from '../components/Generate';
import fetchApi from '../components/FetchApi';
import {API_URL} from '@env';
import ModalList from '../components/ModalList';
import {Cuisine_Data, Diet_Data, Meal_Data} from '../components/CalData';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MainScreen() {
  const [calorie, setCalorie] = useState(null);
  const [cuisine, setCusine] = useState(null);
  const [diet, setDiet] = useState(null);
  const [apiData, setApiData] = useState([]);

  const url = `${API_URL}?diet=${diet}&maxCalories=${calorie}&cuisine=${cuisine}`;

  function isInputFilled(){
    
    if (diet === null || calorie === '' || cuisine === null) {
      Alert.alert("Alert","Please select all fields");
      return false;
    }
    return true;
  }
  async function GenerateData() {

    try {
      if(isInputFilled()){
    
      const result = await fetchApi(url);

          if (result !== null && result !== undefined) {
            await AsyncStorage.setItem('apidata', JSON.stringify(result));
          }

          AsyncStorage.getItem('apidata').then(value => {
            if (value !== null || value !== undefined) {
              setApiData(JSON.parse(value));
            }
          });
    }
    }
    catch (error) {
      Alert.alert('Found Error')
    }
    
    return;
  }

  return (
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
            onChangeText={(text)=>setCalorie(text)}
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

        {/* <ModalList
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          apiData={apiData}
          calorie={parseFloat(calorie)}
        /> */}
      </View>
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

/*
{
  "results": [
    {
      "id": 1079930,
      "title": "Crock Pot Pasta Bolognese Sauce",
      "image": "https://img.spoonacular.com/recipes/1079930-312x231.jpg",
      "imageType": "jpg",
      "nutrition": {
        "nutrients": [
          {
            "name": "Calories",
            "amount": 174.105,
            "unit": "kcal"
          },
          {
            "name": "Protein",
            "amount": 17.351,
            "unit": "g"
          },
          {
            "name": "Fat",
            "amount": 5.58495,
            "unit": "g"
          },
          {
            "name": "Carbohydrates",
            "amount": 11.9648,
            "unit": "g"
          },
          {
            "name": "Alcohol",
            "amount": 0,
            "unit": "g"
          },
          {
            "name": "Caffeine",
            "amount": 0,
            "unit": "mg"
          },
          {
            "name": "Copper",
            "amount": 0.415894,
            "unit": "mg"
          },
          {
            "name": "Calcium",
            "amount": 94.7062,
            "unit": "mg"
          },
          {
            "name": "Cholesterol",
            "amount": 41.8467,
            "unit": "mg"
          },
          {
            "name": "Choline",
            "amount": 0,
            "unit": "mg"
          },
          {
            "name": "Fluoride",
            "amount": 0,
            "unit": "mg"
          },
          {
            "name": "Saturated Fat",
            "amount": 2.30895,
            "unit": "g"
          },
          {
            "name": "Vitamin A",
            "amount": 548.522,
            "unit": "IU"
          },
          {
            "name": "Vitamin C",
            "amount": 16.3089,
            "unit": "mg"
          },
          {
            "name": "Vitamin D",
            "amount": 0.189065,
            "unit": "µg"
          },
          {
            "name": "Vitamin E",
            "amount": 2.48981,
            "unit": "mg"
          },
          {
            "name": "Vitamin K",
            "amount": 11.8465,
            "unit": "µg"
          },
          {
            "name": "Vitamin B1",
            "amount": 0.168313,
            "unit": "mg"
          },
          {
            "name": "Vitamin B2",
            "amount": 0.348004,
            "unit": "mg"
          },
          {
            "name": "Vitamin B3",
            "amount": 6.32077,
            "unit": "mg"
          },
          {
            "name": "Vitamin B5",
            "amount": 1.37698,
            "unit": "mg"
          },
          {
            "name": "Vitamin B6",
            "amount": 0.529558,
            "unit": "mg"
          },
          {
            "name": "Vitamin B12",
            "amount": 1.34097,
            "unit": "µg"
          },
          {
            "name": "Fiber",
            "amount": 3.85943,
            "unit": "g"
          },
          {
            "name": "Folate",
            "amount": 32.3166,
            "unit": "µg"
          },
          {
            "name": "Folic Acid",
            "amount": 0,
            "unit": "µg"
          },
          {
            "name": "Iron",
            "amount": 3.83587,
            "unit": "mg"
          },
          {
            "name": "Magnesium",
            "amount": 52.4366,
            "unit": "mg"
          },
          {
            "name": "Manganese",
            "amount": 0.379435,
            "unit": "mg"
          },
          {
            "name": "Phosphorus",
            "amount": 224.386,
            "unit": "mg"
          },
          {
            "name": "Potassium",
            "amount": 868.492,
            "unit": "mg"
          },
          {
            "name": "Selenium",
            "amount": 14.215,
            "unit": "µg"
          },
          {
            "name": "Sodium",
            "amount": 788.536,
            "unit": "mg"
          },
          {
            "name": "Sugar",
            "amount": 9.26969,
            "unit": "g"
          },
          {
            "name": "Zinc",
            "amount": 3.71029,
            "unit": "mg"
          }
        ]
      }
    },
    {
      "id": 543261,
      "title": "Crock Pot Meaty Pasta Sauce",
      "image": "https://img.spoonacular.com/recipes/543261-312x231.jpg",
      "imageType": "jpg",
      "nutrition": {
        "nutrients": [
          {
            "name": "Calories",
            "amount": 222.082,
            "unit": "kcal"
          },
          {
            "name": "Protein",
            "amount": 20.6132,
            "unit": "g"
          },
          {
            "name": "Fat",
            "amount": 6.91609,
            "unit": "g"
          },
          {
            "name": "Carbohydrates",
            "amount": 16.3475,
            "unit": "g"
          },
          {
            "name": "Alcohol",
            "amount": 0,
            "unit": "g"
          },
          {
            "name": "Caffeine",
            "amount": 0,
            "unit": "mg"
          },
          {
            "name": "Copper",
            "amount": 0.491763,
            "unit": "mg"
          },
          {
            "name": "Calcium",
            "amount": 120.564,
            "unit": "mg"
          },
          {
            "name": "Cholesterol",
            "amount": 46.8712,
            "unit": "mg"
          },
          {
            "name": "Choline",
            "amount": 0,
            "unit": "mg"
          },
          {
            "name": "Fluoride",
            "amount": 0,
            "unit": "mg"
          },
          {
            "name": "Saturated Fat",
            "amount": 2.16401,
            "unit": "g"
          },
          {
            "name": "Vitamin A",
            "amount": 4732.83,
            "unit": "IU"
          },
          {
            "name": "Vitamin C",
            "amount": 47.9919,
            "unit": "mg"
          },
          {
            "name": "Vitamin D",
            "amount": 0.0755987,
            "unit": "µg"
          },
          {
            "name": "Vitamin E",
            "amount": 4.08307,
            "unit": "mg"
          },
          {
            "name": "Vitamin K",
            "amount": 27.2461,
            "unit": "µg"
          },
          {
            "name": "Vitamin B1",
            "amount": 0.226447,
            "unit": "mg"
          },
          {
            "name": "Vitamin B2",
            "amount": 0.279547,
            "unit": "mg"
          },
          {
            "name": "Vitamin B3",
            "amount": 7.30806,
            "unit": "mg"
          },
          {
            "name": "Vitamin B5",
            "amount": 1.2229,
            "unit": "mg"
          },
          {
            "name": "Vitamin B6",
            "amount": 0.750133,
            "unit": "mg"
          },
          {
            "name": "Vitamin B12",
            "amount": 1.69341,
            "unit": "µg"
          },
          {
            "name": "Fiber",
            "amount": 6.21281,
            "unit": "g"
          },
          {
            "name": "Folate",
            "amount": 51.9206,
            "unit": "µg"
          },
          {
            "name": "Folic Acid",
            "amount": 0,
            "unit": "µg"
          },
          {
            "name": "Iron",
            "amount": 5.46861,
            "unit": "mg"
          },
          {
            "name": "Magnesium",
            "amount": 71.9753,
            "unit": "mg"
          },
          {
            "name": "Manganese",
            "amount": 0.567597,
            "unit": "mg"
          },
          {
            "name": "Phosphorus",
            "amount": 242.696,
            "unit": "mg"
          },
          {
            "name": "Potassium",
            "amount": 1078.35,
            "unit": "mg"
          },
          {
            "name": "Selenium",
            "amount": 15.0333,
            "unit": "µg"
          },
          {
            "name": "Sodium",
            "amount": 1154.6,
            "unit": "mg"
          },
          {
            "name": "Sugar",
            "amount": 12.3131,
            "unit": "g"
          },
          {
            "name": "Zinc",
            "amount": 4.64193,
            "unit": "mg"
          }
        ]
      }
    }
  ],
  "offset": 0,
  "number": 10,
  "totalResults": 2
}
*/