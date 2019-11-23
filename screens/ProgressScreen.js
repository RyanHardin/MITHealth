import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Progress Screen</Text>
      </ScrollView>
    </View>
  );
}

ProgressScreen.navigationOptions = {
  title: 'Progress',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
