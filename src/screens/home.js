import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://freepngimg.com/convert-png/13182-fruit-png',
          }} // Replace 'header_image.png' with your header image
          style={styles.headerImage}
        />
        <View style={styles.header}>
          <Text style={styles.title}>
            Welcome to <Text style={styles.highlight}>DietFreak</Text>!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('creatediet')}>
          <Text style={styles.buttonText}>Get Your Diet Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Calorie Calculator')}>
          <Text style={styles.buttonText}> Calculate Calorie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Dietplan')}>
          <Text style={styles.buttonText}>Discover Recipes</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          {'"Believe you can and you\'re halfway there." - Theodore Roosevelt'}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  highlight: {
    color: '#4CAF50', // Customize highlight color as needed
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Arial',
  },
  headerImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555',
    marginTop: 20,
  },
});

export default HomePage;
