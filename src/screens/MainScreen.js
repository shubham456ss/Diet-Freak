/* eslint-disable quotes */ /* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SelectList from '../components/SelectList';
import List from '../components/List';
import {Axios} from 'axios';
import Generate from '../components/Generate';

const diet = [
  {key: '1', label: 'pescetarian', value: 'pescetarian'},
  {key: '2', label: 'lacto vegetarian', value: 'lacto vegetarian'},
  {key: '3', label: 'ovo vegetarian', value: 'ovo vegetarian'},
  {key: '4', label: 'vegan', value: 'vegan'},
  {key: '5', label: 'paleo', value: 'paleo'},
  {key: '6', label: 'primal', value: 'primal'},
  {key: '7', label: 'vegetarian', value: 'vegetarian'},
];

const meal = [
  {key: '1', label: '1', value: '1'},
  {key: '2', label: '2', value: '2'},
  {key: '3', label: '3', value: '3'},
  {key: '4', label: '4', value: '4'},
  {key: '5', label: '5', value: '5'},
];

export const cuisineData = [
  {key: '1', label: 'indian', value: 'indian'},
  {key: '2', label: 'chinese', value: 'chinese'},
  {key: '3', label: 'italian', value: 'italian'},
  {key: '4', label: 'thai', value: 'thai'},
  {key: '5', label: 'southern', value: 'southern'},
  {key: '6', label: 'japanese', value: 'japanese'},
];

function MainScreen() {
  const [calorie, onChangeCalorie] = useState('');
  const [cuisine, setCusine] = useState(cuisine);
  const [apiData, setApiData] = useState([]);

  //   async function GenerateData(){

  //     const options = {
  //       method: 'GET',
  //       url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
  //       params: {
  //         cuisine: `${cuisine}`,
  //         diet: 'vegetarian',
  //         type: 'main course',
  //         sort: 'calories',
  //         sortDirection: 'asc',
  //         minCarbs: '10',
  //         maxCarbs: '100',
  //         minProtein: '5',
  //         maxProtein: '100',
  //         minCalories: '50',
  //         maxCalories: `${calorie}`,
  //         minFat: '15',
  //         maxFat: '100',
  //         minCalcium: '0',
  //         maxCalcium: '100',
  //         minCholesterol: '0',
  //         maxCholesterol: '100',
  //         minSugar: '0',
  //         maxSugar: '100',
  //         minZinc: '0',
  //         maxZinc: '100',
  //         calorie: '30',
  //       },
  //       headers: {
  //         'X-RapidAPI-label': 'a3d7d71d81msh2f2a5f9032a1aa5p17b599jsn16a1cea88816',
  //         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       // const response = await Axios.request(options);
  //       // console.log(response.data);

  //     } catch (error) {
  //       console.log(error);
  //     }
  // }

  return (
    <SafeAreaView>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic" > */}
      <View style={Styles.sectionContainer}>
        <Text style={Styles.Title}> </Text>

        <SelectList label={'Food Type'} data={diet} />

        <Text style={Styles.Title}></Text>

        <View style={Styles.fieldSet}>
          <Text style={Styles.legend}>I want to eat</Text>
          <TextInput
            style={Styles.input}
            search={false}
            onChangeText={onChangeCalorie}
            value={calorie}
            placeholder="Calories"
            labelboardType="numeric"
            placeholderTextColor={'#0008'}
          />
        </View>

        <SelectList label={'In Meals'} data={meal} />

        <SelectList label={'Cuisine'} data={cuisineData} />

        <Pressable style={Styles.btn} onPress={() => {}}>
          <Text style={Styles.btn.text}>Generate</Text>
        </Pressable>

        {/* <List genData={diet}/> */}

        {/* <Generate apiData={apiData} calorie={calorie}/> */}
      </View>
      {/* </ScrollView> */}
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
