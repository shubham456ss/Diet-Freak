/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { FlatList, StyleSheet, Text, View,Button, Image } from 'react-native';
import React, { useEffect, useState } from 'react';



function Generate({ apiData, calorie }) {

  console.log("apidatat---------->",apiData);

  // const [apiResult, setApiResult] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [ tempFilteredData , totalCalorie ] = filterDataByCalorie(apiData, calorie);
  // setApiResult(pureData);

  function filterDataByCalorie(){
    let totalCalorie = 0;
    const tempFilteredData = [];

    for (let i = 0; i < apiData.length; i++) {
      const nutrition = apiData[i].nutrition;
      if (nutrition) {
        const nutrients = nutrition.nutrients;
        if (nutrients) {
          const caloriesNutrient = nutrients.find(
            (nutrient) => nutrient.name === 'Calories'
          );
          if (caloriesNutrient) {
            totalCalorie += caloriesNutrient.amount;
            if (totalCalorie <= calorie) {
              tempFilteredData.push(apiData[i]);
            } else {
              break;
            }
          }
        }
      }
    }

    return [ tempFilteredData , totalCalorie];
  };

  const myItemSeparator = () => {
    return (
      <View
        style={{height: 1, backgroundColor: 'grey', marginHorizontal: 10}}
      />
    );
  };

  const myListEmpty = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  const HeaderComponent = () => {
     return (
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              marginTop: 20,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            List of Food
          </Text>
        )}

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
    // <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <FlatList scrollEnabled={true} scrollsToTop={true}
        data={tempFilteredData}
        renderItem={({item}) => (
          <View>
            {/* <Image
        source={{
          uri: item.image,
        }}
      /> */}
            <Text >{tempFilteredData.length}</Text>
            
            <Text >{item.title}</Text>
            <Text style={styles.item}>{item.nutrition.nutrients.find(nutrient => nutrient.name === "Calories").name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        ListHeaderComponent={HeaderComponent}
      />
    // </ScrollView>
    
    //  <View>
  
    //   <Text>Data from API:</Text>
    //   {tempFilteredData.map((item, index) => (
    //     <View key={index}>
    //       <Text>Title: {item.title}</Text>
    //       <Text>Calories: {item.nutrition.nutrients.find(nutrient => nutrient.name === "Calories").amount}</Text>
    //     </View>
    //   ))}
    //   <Text>Total Calorie: {totalCalorie}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});
export default Generate;

 // return (
    
  //  <FlatList 
  //       data={filteredData}
  //       renderItem={({item}) => (
  //         <>
  //           <Text >{item.title}</Text>
  //           <Text style={styles.item}>{item.nutrition.nutrients[0].name}</Text>
  //         </>
  //       )}
  //       keyExtractor={item => item.id}
  //       ItemSeparatorComponent={myItemSeparator}
  //       ListEmptyComponent={myListEmpty}
  //       ListHeaderComponent={HeaderComponent}
  //     />
  
  
  
  
  
  // const myItemSeparator = () => {
  //   return (
  //     <View
  //       style={{height: 1, backgroundColor: 'grey', marginHorizontal: 10}}
  //     />
  //   );
  // };

  // const myListEmpty = () => {
  //   return (
  //     <View style={{alignItems: 'center'}}>
  //       <Text style={styles.item}>No data found</Text>
  //     </View>
  //   );
  // };

  // const HeaderComponent = () => {
  //    return (
  //         <Text
  //           style={{
  //             fontSize: 30,
  //             textAlign: 'center',
  //             marginTop: 20,
  //             fontWeight: 'bold',
  //             textDecorationLine: 'underline',
  //           }}>
  //           List of Food
  //         </Text>
  //       )}
