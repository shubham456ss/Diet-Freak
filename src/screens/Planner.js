/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
import {View, Text, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import HTML from '../assets/planner/updated_pregnancy_diet.html'

const Planner = ({ navigation, route }) => {
  const { pathkey } = route.params || '../assets/planner/updated_kids.html';
  // const filepath = `file:///C:/Users/shubh/Desktop/App_test/src/assets/planner/${path}`;

  const [link, setLink] = useState('');

  function Link() {

    switch (pathkey) {

      case pathkey:
        return (<WebView
        originWhitelist={['*']}
        source={require('../assets/planner/updated_kids.html')}
        />)
      
      case pathkey:
        return (
          <WebView
            originWhitelist={['*']}
            source={require('../assets/planner/updated_kids.html')}
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
