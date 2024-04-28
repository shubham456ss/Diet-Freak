/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HTML, {defaultSystemFonts} from 'react-native-render-html';
import {ScrollView} from 'react-native-gesture-handler';

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
    em: {fontStyle: 'italic'}, // Style for emphasized text
    bold: {
      color: 'red',
    },
    // Add more styles for other HTML tags as needed
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
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={style.container}>
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
            <HTML
              tagsStyles={tagsStyles}
              contentWidth={100}
              source={{html: data?.summary}}
              style={tagsStyles}
            />

            <Text style={style.text}>Recipe Steps</Text>

            {data.analyzedInstructions?.map((items, index) =>
              items.steps.map((item, ind) => (
                <Text
                  style={{fontWeight: 'bold', color: 'black', margin: 10}}
                  key={ind}>{`\u2B24 ${item.step}`}</Text>
              )),
            )}
          </>
        ) : (
          <ActivityIndicator size="large" color="#000" />
        )}
      </View>
      <Button title="Go Back" style={style.btn} onPress={goBack} />
    </ScrollView>
  );
};

export default RecipeList;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    backgroundColor: '#C2B97F',
    margin: 20,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#453B32',
    padding: 6,
    borderRadius: 10,
  },
  btn: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  html: {
    fontSize: 20,
  },
});
