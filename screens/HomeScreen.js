import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/userProfile.jpg')}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>Roderick Smith</Text>
        <View style={styles.bodyContent}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Ionicons
              name="ios-information-circle-outline"
              size={32}
              color="green"
              style={{paddingVertical: 15}}
            />
            <Text style={styles.text}>Medical Details</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Health Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Medical ID</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Previous Scores</Text>
          </TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Ionicons
              name="ios-person"
              size={32}
              color="green"
              style={{paddingVertical: 15}}
            />
            <Text style={styles.text}>Account</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Health Records</Text>
          </TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Ionicons
              name="ios-hand"
              size={32}
              color="green"
              style={{paddingVertical: 15}}
            />
            <Text style={styles.text}>Privacy</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Apps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Devices</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#36485f',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 80,
  },
  name: {
    fontSize: 40,
    alignItems: 'center',
    height: 45,
    fontWeight: 'bold',
  },
  body: {
    margin: 50,
    alignItems: 'center',
    flex: 3,
  },
  bodyContent: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});

export default HomeScreen;
