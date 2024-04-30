import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import LinearGrad from './LinearGrad';

const data = [
  {name: 'Red', population: 20, color: 'red'},
  {name: 'Blue', population: 50, color: 'blue'},
  {name: 'Green', population: 30, color: 'green'},
];

const ChartComponent = () => {
  const height = 200;
  const color = ['lightgreen','white','orange'];
  return (
      <LinearGrad height={height} color = {color}>
        <PieChart
          data={data}
          width={Dimensions.get('screen').width-10}
          height={200}
          chartConfig={{
            decimalPlaces: 2,
            strokeWidth: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="#0001"
        paddingLeft="15"
        style={styles.chart}
        />
      </LinearGrad>
  );
};

export default ChartComponent;

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 10,
    marginBottom:10,
    borderRadius:10,
  },
  chart: {
    flex: 1,
    paddingHorizontal:10,
  }
});