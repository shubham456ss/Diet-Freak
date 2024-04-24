// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */

// import React from 'react';
// import { Text , StyleSheet, View ,ImageBackground} from 'react-native';
// import Row from './Row';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const About = () => {
//   return (
     
//        <View style={style.container}>
//       <ImageBackground
//         style={style.image}
//         source={require('../assets/home-img.jpg')}
//         blurRadius={25}
//       >
//       </ImageBackground>


//                     <Text style={Styles.heading}>Why is Diet plan required ?</Text>
//                     <Text style={Styles.para}>
//                         A healthy eating plan gives your body the nutrients it needs every day while staying within your
//                         daily calorie goal for weight loss. A healthy eating plan also will lower your risk for heart disease
//                         and other health conditions.
//                     </Text>

//                 <Row gap={10}>
//                     <Icon style={Styles.icon} color={'black'} name="check-square-o"  />
//                     <Text style={Styles.label}>Heart Health</Text>
//                 </Row>
//                     <Text style={Styles.para}>Healthy eating habits can improve your heart health and common prevent heart diseases.</Text>
//                    <Row gap={10}>
//                         <Icon  style={Styles.icon} color={'black'}  name="check-square-o"  />
//                         <Text style={Styles.label}>Energy Levels</Text>
//                    </Row>
//                     <Text style={Styles.para}>If you eat a healthy, balanced diet, you will feel better and more energized.
//                             Furthermore, if you eat property, then it means your body is getting all
//                             of the nutrients it needs to function properly, which will improve your energy levels.
//                     </Text>

//                     <Row gap={10}>
//                         <Icon style={Styles.icon} color={'black'} name="check-square-o" />
//                         <Text style={Styles.label}>Improved memory</Text>
//                     </Row>
//                     <Text style={Styles.para}>
//                         Eating healthy increases blood flow to the brain which help prevent brain diseases like Alzheimers, dementia, and cognitive decline.
//                     </Text>
//         </View>
//   );
// };
// export default About;

// const Styles = StyleSheet.create({

//     view:{
//       flex:1,
//     },
//     heading:{
//           fontSize:20,
//           color:'black',
//           fontWeight:'bold',
//       },
//     headingPara:{
//         marginHorizontal:10,
//         fontSize:16,
//         lineHeight:20,
//       },
//     para:{
//         fontSize:16,
//         margin:0,
//       },
//     label:{
//           fontSize:18,
//           fontWeight:'bold',
//           color:'black',
//           letterSpacing:2,
//       },
//       icon:{
//         fontSize:15,
//       },
//   });

  
// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: 300,
//   },
//   image: {
//     flex: 1,
//     height: '100%',
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomWidth: 2,
//     borderBottomColor: 'black',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     letterSpacing: 5,
//     color: 'white',
//     textShadowOffset: {width: 3, height: 1},
//     textShadowColor: '#000',
//     textShadowRadius: 5,
//   },
//   butText: {
//     fontSize: 18,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.9,
//     color: 'white',
//   },
//   pressable: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 32,
//     borderRadius: 25,
//     elevation: 3,
//     backgroundColor: 'black',
//     borderWidth: 2,
//     bottom: -30,
//   },
// });