import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

export default function ExerciseScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Exercise Screen</Text>
      </ScrollView>
    </View>
  );
}

ExerciseScreen.navigationOptions = {
  title: 'Exercise',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
