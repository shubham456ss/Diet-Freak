/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';


function Generate({ apiData, calorie }) {
  
  const navigation = useNavigation();

  // const [apiResult, setApiResult] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [tempFilteredData, totalCalorie] = filterDataByCalorie(apiData,calorie);

  function filterDataByCalorie(apiData, calorie) {
    let totalCalorie = 0;
    const tempFilteredData = [];

    for (let i = 0; i < apiData.length; i++) {
      const nutrition = apiData[i].nutrition;
      if (nutrition) {
        const nutrients = nutrition.nutrients;
        if (nutrients) {
          const caloriesNutrient = nutrients.find(
            nutrient => nutrient.name === 'Calories',
          );
          if (caloriesNutrient) {
            totalCalorie += caloriesNutrient.amount;
            if (totalCalorie <= calorie + 200) {
              tempFilteredData.push(apiData[i]);
            } else {
              break;
            }
          }
        }
      }
    }

    return [tempFilteredData, totalCalorie];
  }

  const myItemSeparator = () => {
    return <View style={{height: 5, backgroundColor: 'transparent'}} />;
  };

  const myListEmpty = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.item}>Data not found</Text>
      </View>
    );
  };

  const HeaderComponent = () => {
    return (
      <Text
        style={{
          fontSize: 22,
          textAlign: 'center',
          marginTop: 20,
          padding:10,
          color:'black',
          fontWeight: 'bold',
          marginBottom: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          elevation:5,
        }}>
        List of Foods
      </Text>
    );
  };

  // const ListItems
  const ListItem = ({item, onPress}) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 5,
          backgroundColor: 'white',
          borderRadius: 5,
          elevation: 2,
        }}>
        <Image
          height={70}
          width={70}
          source={{
            uri: item.image,
          }}
          borderRadius={5}
        />
        <View style={{padding: 5,flexWrap:'nowrap'}}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.item}>
            {
              item.nutrition.nutrients.find(
                nutrient => nutrient.name === 'Calories',
              ).amount
            }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

<<<<<<< HEAD
   return (
     <FlatList
       nestedScrollEnabled
       data={tempFilteredData}
       renderItem={({item}) => (
         <ListItem item={item} onPress={()=>{navigation.navigate('Modal',{id:item.id})}}/>
       )}
       keyExtractor={item => item.id}
       ItemSeparatorComponent={myItemSeparator}
       ListEmptyComponent={myListEmpty}
       ListHeaderComponent={HeaderComponent}
     />
   );
=======
  // Example usage:
  // const items = [
  //     {
  //         id: 1079930,
  //         title: "Crock Pot Pasta Bolognese Sauce",
  //     nutrition: {
  //           name:"yello",
  //             nutrients: [
  //                 { name: "Calories", amount: 174.105, unit: "kcal" },
  //             ]
  //         }
  //     },
  // ];

  return (
    <FlatList
      nestedScrollEnabled
      data={tempFilteredData}
      renderItem={({item}) => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightgrey',
            borderRadius: 10,
            marginTop: 8,
          }}>
          <Image
            height={70}
            width={70}
            source={{
              uri: item.image,
            }}
            borderRadius={5}
          />
          <View
            style={{
              flex: 1,
              margin: 5,
              height: 70,
              padding: 10,
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.item}>
              Calories:
              {
                item.nutrition.nutrients.find(
                  nutrient => nutrient.name === 'Calories',
                ).amount
              }
            </Text>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={HeaderComponent}
    />
  );
>>>>>>> 4c19106017884ea644e0faf2bb7ad0eba9ff6860
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
<<<<<<< HEAD
    fontWeight:'bold',
   flexWrap:'wrap',
=======
>>>>>>> 4c19106017884ea644e0faf2bb7ad0eba9ff6860
    marginTop: 5,
    fontSize: 15,
    fontWeight: '900',
    color: 'grey',
  },
  text: {
    color: 'black',
    fontSize: 15,
<<<<<<< HEAD
    fontWeight:'bold',
    color:'black',
=======
    fontFamily: 'popins',
    flexWrap: 'nowrap',
    fontWeight: 'bold',
>>>>>>> 4c19106017884ea644e0faf2bb7ad0eba9ff6860
  },
  flat: {
    flex: 1,
  },
});
export default Generate;
