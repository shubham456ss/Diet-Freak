/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// import axios from 'axios';
// import {API_KEY, API_HOST} from '@env';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypoicons from 'react-native-vector-icons/Entypo';
import Anticons from 'react-native-vector-icons/AntDesign';
import fetchApi from '../components/FetchApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env';
// import {Progress} from 'react-native-progress';



export default function Recipescreen() {
  const [query, setQuery] = useState('');
  const [cross, setCross] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  let d = Dimensions.get('screen').width;

  const url = `${API_URL}?query=${query}&minCalories=50`;
  
  console.warn(d);

  useEffect(() => {
    AsyncStorage.getItem('searchdata').then(value => {
      if (value !== null || value !== undefined) {
        setApiData(JSON.parse(value));
      }
    });
    console.log('=>>>>>', apiData);
  }, []);

  function handleInput(txt) {
    setQuery(txt);
  }

  async function showRecipe() {
    try {
      const result = fetchApi(url);

      if (query !== '') {
        setLoading(false);
        AsyncStorage.setItem('searchdata', JSON.stringify(result));

        AsyncStorage.getItem('searchdata').then(value => {
          if (value !== null || value !== undefined) {
            setApiData(JSON.parse(value));
            setLoading(true);
          }
        });
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.SearchBox}>
        {query ? (
          <TouchableOpacity
            onPress={() => {
              setQuery('');
            }}>
            <Entypoicons
              name="cross"
              size={25}
              color={'black'}
              style={{marginHorizontal: 10}}
            />
          </TouchableOpacity>
        ) : (
          <Ionicons
            name="search"
            size={25}
            color={'black'}
            style={{marginHorizontal: 10}}
          />
        )}

        <TextInput
          style={styles.InputSearch}
          keyboardType="default"
          value={query}
          onChangeText={handleInput}
          placeholder="Type Here ..."
          selectionColor="black"
          focusable
        />
        <TouchableOpacity onPress={showRecipe}>
          <Anticons
            name="arrowright"
            size={25}
            color={'black'}
            style={{marginEnd: 5}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        {/* <Text>{query}</Text> */}
        {(apiData && loading) ? (
          <FlatList
            data={apiData}
            renderItem={({item}) => <ListItem item={item} onPress={() => {}} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={myItemSeparator}
            ListEmptyComponent={myListEmpty}
            ListHeaderComponent={HeaderComponent}
          />
        ) : (
          <ActivityIndicator
            style={{
              height: 500,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            color={'black'}
            size={50}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputSearch: {
    width: '75%',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  SearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    margin: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    elevation: 4,
  },
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#bbeeff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    width: 300,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  item: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 15,
  },
});

////////////////////////////////////////////////////////////////////////////////////////////////

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
        onError={err => {
          console.log(err);
        }}
      />
      <View style={{padding: 5, flexWrap: 'nowrap'}}>
        <Text style={styles.text}>
          {`${item.title}`.charAt(0).toUpperCase() + `${item.title}`.substring(1)}
        </Text>
        <Text style={styles.item}>
          {`${Math.round(
             item.nutrition.nutrients.find(
              nutrient => nutrient.name === 'Calories',
            ).amount
          )
          } kcal`}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

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
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5,
      }}>
      List of Foods
    </Text>
  );
};
