/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp *//* eslint-disable prettier/prettier */

import {View, TextInput, StyleSheet} from 'react-native';

const Inputs = ({placeholderE, placeholderP ,email,setEmail ,pass,setPass}) => {
  return (
    <View style={styles.main}>
      <TextInput
        placeholderTextColor="rgba(128, 128, 128, 0.5)"
        placeholder={placeholderE}
        style={styles.input}
        value={email}
        onChangeText={text=>setEmail(text)}></TextInput>
      
      <TextInput
        placeholderTextColor="rgba(128, 128, 128, 0.5)"
        placeholder={placeholderP}
        style={styles.input}
        value={pass}
        onChangeText={setPass}
        secureTextEntry>
        </TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'black',
    borderStyle:'solid',
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight:'bold',
    color: 'black',
    letterSpacing: 1,
    textDecorationLine:'none',
  },
});

export default Inputs;
