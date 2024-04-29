import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGrad = ({children, height,color}) => {
  return (
      <LinearGradient
      colors={color}
      style={{height: height}}
      start={{x: 0, y: 0}}
          end={{ x: 1, y: 0 }}
          angle={145}
          angleCenter={{x:1,y:0}}
          useAngle={true}
      >
          {children}
    </LinearGradient>
  );
};

export default LinearGrad;
