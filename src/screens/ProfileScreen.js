import React, { useContext } from 'react';
import {ScrollView ,View, Text, StyleSheet, Image} from 'react-native';
import { Newcontext } from './Authiopn';

const Profile = () => {
  const {name} = useContext(Newcontext)
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
            }}
          />
          <Text style={styles.username}>{name}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <Text style={styles.label}>Age: 30</Text>
            <Text style={styles.label}>Weight: 75 kg</Text>
            <Text style={styles.label}>Height: 180 cm</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Fitness Goals</Text>
            <Text style={styles.description}>
              - Lose weight and maintain a healthy BMI
            </Text>
            <Text style={styles.description}>
              - Build muscle strength and endurance
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Diet Plan</Text>
            <Text style={styles.description}>
              - Balanced diet consisting of fruits, vegetables, lean proteins,
              and whole grains
            </Text>
            <Text style={styles.description}>
              - Limiting processed foods, sugar, and unhealthy fats
            </Text>
            <Text style={styles.description}>
              - Staying hydrated by drinking plenty of water throughout the day
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  body: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    color: '#777',
  },
});

export default Profile;
