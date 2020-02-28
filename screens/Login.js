import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{`Hello Again.\nWelcome back`}</Text>
      <TextInput style={styles.input} placeholder="Username/Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button title={'Login'} onPress={() => navigation.navigate ('Home')} />
      <Button title={'Sign Up'} onPress={() => console.log ('Working')} />
    </View>
  );
};

Login.navigationOptions = {
  title: 'Vulcan Grip',
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  greeting: {
    textAlign: 'center',
    fontSize: 35,
  },
  input: {
    height: 40,
    borderBottomColor: 'grey',
  },
});

export default Login;
