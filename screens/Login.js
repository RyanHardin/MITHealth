import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (user != "" && passWord != "") {
      navigation.navigate("Home");
    } else {
      setError("Please insert correct usename or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{`Hello Again,\nWelcome back`}</Text>
      <Text style={{ padding: 15, color: "red" }}>{error}</Text>
      <View style={{ width: 400 }}>
        <TextInput
          style={styles.input}
          placeholder="Username/Email"
          onChangeText={(text) => setUser(text)}
          value={user}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          value={passWord}
        />
      </View>
      <Button title={"Sign In"} onPress={login} style={{ width: 350, padding: 5 }} />

      <TouchableOpacity style={{ padding: 10 }}>
        <Text>
          New to Vulcan Grip?
          <Text
            style={{ fontWeight: "bold", color: "rgb(41, 139, 217)" }}
            onPress={() => navigation.navigate("Register")}>
            {" "}
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Login.navigationOptions = {
  title: "",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  greeting: {
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 20,
    paddingBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
  },
});

export default Login;
