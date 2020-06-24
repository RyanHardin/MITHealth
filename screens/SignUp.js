import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
    </View>
  );
};

SignUp.navigationOptions = {
  title: "",
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SignUp;
