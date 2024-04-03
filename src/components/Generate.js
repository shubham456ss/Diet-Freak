/* eslint-disable react-native/no-inline-styles */ /* eslint-disable react/react-in-jsx-scope */ /* eslint-disable quotes */ /* eslint-disable prettier/prettier */

import {ScrollView, FlatList, StyleSheet, Text, View} from 'react-native';

function Generate({apiData,calorie}) {

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

  function knapsack(items, targetValue) {
    // Shuffle the items randomly
    items.sort(() => Math.random() - 0.5);

    // Initialize matrix for dynamic programming
    const dp = Array(items.length + 1)
      .fill(null)
      .map(() => Array(targetValue + 1).fill(0));

    // Build DP matrix
    for (let i = 1; i <= items.length; i++) {
      for (let j = 1; j <= targetValue; j++) {
        if (items[i - 1].value <= j) {
          dp[i][j] = Math.max(
            dp[i - 1][j],
            dp[i - 1][j - items[i - 1].value] + items[i - 1].value,
          );
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    // Find the value closest to the target without exceeding it
    let closestValue = 0;
    for (let v = targetValue; v >= 0; v--) {
      if (dp[items.length][v] <= targetValue) {
        closestValue = dp[items.length][v];
        break;
      }
    }

    // Backtrack to find selected items
    let selectedItems = [];
    let i = items.length;
    let j = closestValue;
    while (i > 0 && j > 0) {
      if (dp[i][j] !== dp[i - 1][j]) {
        selectedItems.push(items[i - 1].name);
        j -= items[i - 1].value;
      }
      i--;
    }

    return selectedItems.reverse();
  }

  // // Example usage:
  // const apiResult = [
  //   {key: 1, name: 'Item 1', value: 300},
  //   {key: 2, name: 'Item 2', value: 200},
  //   {key: 3, name: 'Item 3', value: 400},
  //   {key: 4, name: 'Item 4', value: 600},
  // ];


  const selectedItems = knapsack(apiData, calorie);

  return (
    // <ScrollView contentInsetAdjustmentBehavior="automatic">
      <FlatList
        data={selectedItems}
        renderItem={({item}) => (
          <>
            <Text>{item.name}</Text>
            <Text style={styles.item}>{item.value}</Text>
          </>
        )}
        keyExtractor={item => item.key}
        // ItemSeparatorComponent={myItemSeparator}
        // ListEmptyComponent={myListEmpty}
        // ListHeaderComponent={() => (
        //   <Text
        //     style={{
        //       fontSize: 30,
        //       textAlign: 'center',
        //       marginTop: 20,
        //       fontWeight: 'bold',
        //       textDecorationLine: 'underline',
        //     }}>
        //     List of Food
        //   </Text>
        // )}
      />
    // </ScrollView>
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
