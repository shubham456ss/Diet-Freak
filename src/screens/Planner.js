/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
import {View, Text, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
// import HTML from '../assets/planner/updated_pregnancy_diet.html'

const Planner = ({ navigation, route }) => {
  const { pathkey } = route.params || '../assets/planner/updated_kids.html';

  const [link, setLink] = useState('');
  console.log(pathkey);

  function Link() {

    switch (pathkey) {
      case 0:
        return (
          <WebView
            originWhitelist={['*']}
            source={require('../assets/planner/updated_kids.html')}
          />
        );
      case 1:
        return (
          <WebView
            originWhitelist={['*']}
            source={require('../assets/planner/updated_teens.html')}
          />
        );

        case 2:
           return (
             <WebView
               originWhitelist={['*']}
               source={require('../assets/planner/updated_men.html')}
             />
           );
        case 3:
           return (
             <WebView
               originWhitelist={['*']}
               source={require('../assets/planner/updated_women.html')}
             />
           );
        case 4:
           return (
             <WebView
               originWhitelist={['*']}
               source={require('../assets/planner/updated_senior_citizen.html')}
             />
           );
        case 5:
           return (
             <WebView
               originWhitelist={['*']}
               source={require('../assets/planner/updated_pregnancy_diet.html')}
             />
           );
        
        default:
        break;
    }
 
  }

  return (
    <View style={styles.root}>
      <Link/>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default Planner;
