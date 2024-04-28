// import { Newcontext } from './Authiopn';

// const ProfileComponent = () => {
//   const {name} = useContext(Newcontext);

import React, {useState,useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  PixelRatio,
  Touchable,
} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';

const ProfileComponent = () => {
  const [name, setName] = useState('Shubham ');
  const [age, setAge] = useState('30');
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [dietaryPreferences, setDietaryPreferences] = useState(
    'Vegetarian, Low Carb',
  );
  const [favoriteFoods, setFavoriteFoods] = useState('Salmon, Avocado, Quinoa');
  const [isEditing, setIsEditing] = useState(false);
  const [DummyImage, setDummyImage] = useState(
    'https://as1.ftcdn.net/v2/jpg/01/03/15/44/1000_F_103154410_fYWuEf2HuAAYZoAZrCy1zLJtQYz9DC3i.jpg',
  );
  const [avatarSource, setAvatarSource] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 1,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        return;
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setProfileImage(response.assets[0]);
      }
    });
  };

  const handleSave = () => {
    // Save user information to database or perform other actions
    setIsEditing(false);
  };

  const handleImageChange = () => {
    // Implement logic to change profile image
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={handleChoosePhoto}>
            {profileImage ? (
              <Image
                source={{
                  uri:
                    `data:${profileImage.type};base64,${profileImage.base64}` ||
                    profileImage.uri,
                }}
                style={styles.Image}
              />
            ) : (
              <Image source={{uri: DummyImage}} style={styles.Image} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>User Details</Text>
        <Text style={styles.attribute}>Name: {name}</Text>
        <Text style={styles.attribute}>Age: {age}</Text>
        <Text style={styles.attribute}>Weight: {weight} kg</Text>
        <Text style={styles.attribute}>Height: {height} cm</Text>
        <Text style={styles.highlightedAttribute}>Email: {email}</Text>
        <Text style={styles.highlightedAttribute}>
          Phone Number: {phoneNumber}
        </Text>

        <Text style={styles.subtitle}>Dietary Preferences:</Text>
        <Text style={styles.attribute}>{dietaryPreferences}</Text>

        <Text style={styles.subtitle}>Favorite Foods:</Text>
        <Text style={styles.attribute}>{favoriteFoods}</Text>

        {isEditing ? (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Age"
              value={age}
              onChangeText={text => setAge(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Weight (kg)"
              value={weight}
              onChangeText={text => setWeight(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Height (cm)"
              value={height}
              onChangeText={text => setHeight(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Dietary Preferences"
              value={dietaryPreferences}
              onChangeText={text => setDietaryPreferences(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Favorite Foods"
              value={favoriteFoods}
              onChangeText={text => setFavoriteFoods(text)}
            />
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsEditing(!isEditing)}>
          <Text style={styles.buttonText}>{isEditing ? 'Cancel' : 'Edit'}</Text>
        </TouchableOpacity>

        {isEditing ? (
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  DummyImageContainer: {
    position: 'relative',
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  DummyImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: 5,
  },
  cameraIcon: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666',
  },
  attribute: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  highlightedAttribute: {
    fontSize: 16,
    marginBottom: 10,
    color: '#007bff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
  },
  avatarContainer: {
    paddingTop: 10,
    backgroundColor: '#fff',
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  touchable: {
    position: 'relative',
    borderRadius: 100,
  },
});

export default ProfileComponent;

// {
//   "assets": [{

//     "base64": "/9j/4AAQSkZJRgABAQAAAQABAAD/surprised-baby-face-phone-is-cute-baby-cute-baby-boy-baby.jpg",
//     "fileSize": 6059,
//     "height": 75,
//     "originalPath": "/storage/emulated/0/Download/desktop-wallpaper-surprised-baby-face-phone-is-cute-baby-cute-baby-boy-baby.jpg",
//     "type": "image/jpeg",
//     "uri": "file:///data/user/0/com.app_test/cache/rn_image_picker_lib_temp_98430e60-9bcc-479e-b5dc-5485ab63ae3c.jpg",
//     "width": 100,

//   }]
