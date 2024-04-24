/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, Button, ActivityIndicator,Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HTML from 'react-native-render-html';
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
      <View style={{flex: 1}}>
        <Button title="Go Back" onPress={goBack} />

        {data ? ( // <Text>{data.summary}</Text>
          <>
            <Image
              height={200}
              source={{
                uri: data?.image,
              }}
            />
            <Text style={style.text}>{`Summary : ${id}`}</Text>
            <HTML contentWidth={100} source={{html: data?.summary}} />
            <Text>Some Step Recipe</Text>
            {data.analyzedInstructions?.map((items, index) =>
              items.steps.map((item, ind) => (
                <Text
                  style={{fontWeight: 'bold', color: 'black'}}
                  key={ind}>{`\u2B24 ${item.step}`}</Text>
              ))
            )}
          </>
        ) : (
          <ActivityIndicator size="large" color="#0f0" />
        )}
      </View>
    </ScrollView>
  );
};

export default RecipeList;

const style = StyleSheet.create({
  text: {
    margin: 50,
    fontSize: 18,
    
  }
})