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
  Button,
  Image,
  TouchableOpacity,
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    fontWeight:'bold',
   flexWrap:'wrap',
    marginTop: 5,
    fontSize: 15,
  },
  text: {
    fontSize: 15,
    fontWeight:'bold',
    color:'black',
  },
  flat: {
    flex: 1,
  },
});
export default Generate;
