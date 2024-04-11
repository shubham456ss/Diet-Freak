/* eslint-disable quotes *//* eslint-disable prettier/prettier */
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

// const persons = [
//     {key: "1", value: "Mobiles"},
//     {key: "2", value: "Appliances"},
//     {key: "3", value: "Cameras"},
//     {key: "4", value: "Computers"},
//     {key: "5", value: "Vegetables"},
//     {key: "6", value: "Diary Products"},
//     {key: "7", value: "Drinks"},
// ];

export default function List({genData}) {

  // const myItemSeparator = () => {
  //   return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
  //   };
  
  // const myListEmpty = () => {
  //   return (
  //     <View style={{ alignItems: "center" }}>
  //     <Text style={styles.item}>No data found</Text>
  //     </View>
  //   );
  // };
  
return (
  <View>
    <FlatList
      data={genData}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      keyExtractor={(item) => item.key}
      // ItemSeparatorComponent={myItemSeparator}
      // ListEmptyComponent={myListEmpty}
      // ListHeaderComponent={() => (
      //   <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
      //     List of Food
      //   </Text>
      // )}

    />
    </View>
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