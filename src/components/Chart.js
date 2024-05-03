import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import LinearGrad from './LinearGrad';

// const data = [
//   {name: 'Red', population: 20, color: 'red'},
//   {name: 'Blue', population: 50, color: 'blue'},
//   {name: 'Green', population: 30, color: 'green'},
// ];

const d = [
  {
    name: 'Calories',
    amount: 174.105,
    unit: 'kcal',
    color: 'red',
  },
  {
    name: 'Protein',
    amount: 17.351,
    unit: 'g',
    color: 'blue',
  },
  {
    name: 'Fat',
    amount: 5.58495,
    unit: 'g',
    color: 'green',
  },
  {
    name: 'Carbohydrates',
    amount: 11.9648,
    unit: 'g',
    color: 'orange',
  },
];

const ChartComponent = ({
  data,
  height,
  width = Dimensions.get('screen').width,
  margin,
  borderRadius,
}) => {
  const color = ['lightgreen', 'white', 'orange'];
  return (
    <LinearGrad
      height={height}
      color={color}
      margin={margin}
      borderRadius={borderRadius}>
      <PieChart
        data={d}
        width={width}
        height={height}
        chartConfig={{
          strokeWidth: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor="amount"
        backgroundColor="#0001"
        paddingLeft="15"
        style={{ borderRadius: borderRadius }}
        absolute
      />
    </LinearGrad>
  );
};

export default ChartComponent;
