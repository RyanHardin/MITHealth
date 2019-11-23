import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function ExerciseScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.exContainer}>
        <TouchableOpacity style={styles.exercise}>
          <Image
            style={{width: 150, height: 150}}
            source={require('./../assets/images/airhockey.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.exercise}>
          <Image
            style={{width: 150, height: 150}}
            source={require('./../assets/images/pool.jpeg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.exContainer}>
        <TouchableOpacity style={styles.exercise}>
          <Image
            style={{width: 150, height: 150}}
            source={require('./../assets/images/Blocks.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.exercise}>
          <Image
            style={{width: 150, height: 150}}
            source={require('./../assets/images/drumming.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.exContainer}>
        <TouchableOpacity style={styles.exercise}>
          <Image
            style={{width: 150, height: 150}}
            source={require('./../assets/images/pingpong.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.exercise}>
          <Image
            style={{
              width: 150,
              height: 150,
            }}
            source={require('./../assets/images/basketball.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

ExerciseScreen.navigationOptions = {
  title: 'Exercises',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  exContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  exercise: {
    width: 150,
    height: 150,
  },
});
