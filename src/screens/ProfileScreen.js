// import React, {useState ,useContext} from 'react';
// import { Newcontext } from './Authiopn';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from 'react-native';

// const ProfileComponent = () => {
//   const {name} = useContext(Newcontext);

//   const [age, setAge] = useState('30');
//   const [weight, setWeight] = useState('70');
//   const [height, setHeight] = useState('170');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleSave = () => {
//     // Save user information to database or perform other actions
//     setIsEditing(false);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.profileImageContainer}>
//         <Image
//           source={{
//             uri: 'https://as1.ftcdn.net/v2/jpg/01/03/15/44/1000_F_103154410_fYWuEf2HuAAYZoAZrCy1zLJtQYz9DC3i.jpg',
//           }} // Placeholder image URL
//           style={styles.profileImage}
//         />
//       </View>

//       <Text style={styles.title}>{name}</Text>
//       <Text style={styles.attribute}>Age: {age}</Text>
//       <Text style={styles.attribute}>Weight: {weight} kg</Text>
//       <Text style={styles.attribute}>Height: {height} cm</Text>

//       {isEditing ? (
//         <View>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Name"
//             value={name}
//             onChangeText={text => setName(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Age"
//             value={age}
//             onChangeText={text => setAge(text)}
//             keyboardType="numeric"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Weight (kg)"
//             value={weight}
//             onChangeText={text => setWeight(text)}
//             keyboardType="numeric"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Height (cm)"
//             value={height}
//             onChangeText={text => setHeight(text)}
//             keyboardType="numeric"
//           />
//         </View>
//       ) : null}

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => setIsEditing(!isEditing)}>
//         <Text style={styles.buttonText}>{isEditing ? 'Cancel' : 'Edit'}</Text>
//       </TouchableOpacity>

//       {isEditing ? (
//         <TouchableOpacity style={styles.button} onPress={handleSave}>
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableOpacity>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   profileImageContainer: {
//     marginBottom: 20,
//     borderRadius: 75,
//     overflow: 'hidden',
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   attribute: {

//     fontSize: 16,
//     marginBottom: 10,
//     color: 'black',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     width: '100%',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 12,
//     borderRadius: 5,
//     marginTop: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default ProfileComponent;
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileComponent = () => {
  const [name, setName] = useState('John Doe');
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
  const [profileImage, setProfileImage] = useState(
    'https://as1.ftcdn.net/v2/jpg/01/03/15/44/1000_F_103154410_fYWuEf2HuAAYZoAZrCy1zLJtQYz9DC3i.jpg',
  );

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
        <TouchableOpacity onPress={handleImageChange}>
          <View style={styles.profileImageContainer}>
            <Image source={{uri: profileImage}} style={styles.profileImage} />
            <View style={styles.cameraIconContainer}></View>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>Profile</Text>
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
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
    borderRadius: 75,
    overflow: 'hidden',
  },
  profileImage: {
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
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileComponent;
