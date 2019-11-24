import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Chart from '../components/ProgressChart/Chart';
import List from '../components/ProgressChart/ListItems';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Chart />
      </View>
      <View style={styles.infoContainer}>
        <List />
      </View>
    </View>
  );
}

ProgressScreen.navigationOptions = {
  title: 'Progress',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },

  chartContainer: {
    flex: 1,
    paddingTop: 35,
  },
  infoContainer: {
    flex: 2,
    backgroundColor: 'rgb(27, 33, 44)',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
