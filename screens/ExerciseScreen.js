import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-material-ui";

export default function ExerciseScreen() {
  const images = [
    require("./../assets/images/airhockey.png"),
    require("./../assets/images/pool.jpeg"),
    require("./../assets/images/Blocks.png"),
    require("./../assets/images/pingpong.png"),
    require("./../assets/images/drumming.png"),
    require("./../assets/images/basketball.png"),
  ];

  const cards = images.map((icon, i) => (
    <View key={i} style={styles.exercise}>
      <TouchableOpacity style={styles.exercise}>
        <Image style={{ width: 150, height: 150 }} source={icon} />
      </TouchableOpacity>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Text>Exercise</Text>
    </View>
  );
}

ExerciseScreen.navigationOptions = {
  title: "Exercises",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 15,
    backgroundColor: "#fff",
  },
  exercise: {
    width: 150,
    height: 150,
  },
});
