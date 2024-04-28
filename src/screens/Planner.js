/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const Planner = ({ navigation, route }) => {
  const { pathkey } = route.params;

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
