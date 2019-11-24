import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};

Login.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
  },
});
