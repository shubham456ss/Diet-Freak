/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, Button, ActivityIndicator,Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RenderHTML,{} from 'react-native-render-html';
import {ScrollView} from 'react-native-gesture-handler';
import ChartComponent from './../components/Chart';

const RecipeList = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const {id} = route.params || null;

  useEffect(() => {
    fetchData();
  }, [id]);

  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
    headers: {
      'X-RapidAPI-Key': 'a3d7d71d81msh2f2a5f9032a1aa5p17b599jsn16a1cea88816',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  };

  const tagsStyles = {
    p: {fontSize: 16, color: 'red'}, // Style for paragraphs
    strong: {fontWeight: 'bold'}, // Style for strong text
    em: { fontStyle: 'italic' }, // Style for emphasized text
    bold: {
      color:'red'
    },
  };

    

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" >
      <View style={style.container}>
        <Button title="Go Back" style={style.btn} onPress={goBack} />

        {data ? ( // <Text>{data.summary}</Text>
          <>
            <Image
              style={style.image}
              height={200}
              source={{
                uri: data?.image,
              }}
            />

            <Text style={style.text}>Summary</Text>

            <View style={style.summaryContainer}>
              <RenderHTML
                tagsStyles={{b: {color: 'red'}, a: {color: 'black'}}}
                baseStyle={{fontSize: 17, color: 'black', fontFamily: 'Arial'}}
                contentWidth={1}
                source={{html: data?.summary}}
              />
            </View>

            <Text style={style.text}>Recipe</Text>

            {data.analyzedInstructions?.map((items, index) =>
              items.steps.map((item, ind) => (
                <Text style={style.recipe} key={ind}>
                  <Text style={style.listStyle}>{'\u2B24'}</Text>
                  {item.step}
                </Text>
              )),
            )}
            <Text style={style.text}>Nutrients</Text>
            <ChartComponent/>
          </>
        ) : (
          <ActivityIndicator size="large" color="#000" />
        )}
      </View>
    </ScrollView>
  );
};

export default RecipeList;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#fff',
    elevation: 5,
  },
  btn: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  html: {
    marginTop:10,
    fontSize: 20,
  },
  summaryContainer: {
    paddingHorizontal: 10,
    // backgroundColor:'red'
  },
  listStyle: {
    fontSize:15,
    color: 'black',
    padding: 10,
    letterSpacing:10,
  },
  recipe: {
    color:'black',
    fontSize: 17,
    paddingHorizontal: 10,
  },
});