import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const Login = ({navigation}) => {
  const [user, setUser] = useState ('');
  const [passWord, setPassword] = useState ('');

  const login = () => {
    console.log (`The username/Email: ${user}`);
    console.log (`The password: ${passWord}`);
    navigation.navigate ('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{`Hello Again.\nWelcome back`}</Text>
      <View style={{width: 300}}>
        <TextInput
          style={styles.input}
          placeholder="Username/Email"
          onChangeText={text => setUser (text)}
          value={user}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setPassword (value)}
          value={passWord}
        />
      </View>
      <Button title={'Login'} onPress={login} />
      <Button title={'Sign Up'} onPress={() => console.log ()} />
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
    borderBottomWidth: 0.5,
  },
});

export default Login;
