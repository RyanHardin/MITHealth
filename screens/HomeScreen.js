import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require ('../assets/images/defaultimg.jpeg')}
        />
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
          Ryan Hardin
        </Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.group}>
            <View style={styles.titles}>
              <Ionicons
                style={styles.icons}
                name="ios-information-circle-outline"
                size={32}
                color="green"
              />
              <Text style={styles.titleHeaders}>Medical Details</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.button}>Health Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button}>Medical Id</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button}>Previous Scores</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.group}>
            <View style={styles.titles}>
              <Ionicons
                style={styles.icons}
                name="ios-person"
                size={32}
                color="green"
              />
              <Text style={styles.titleHeaders}>Account</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.button}>Health Records</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.group}>
            <View style={styles.titles}>
              <Ionicons
                style={styles.icons}
                name="ios-hand"
                size={32}
                color="green"
              />
              <Text style={styles.titleHeaders}>Privacy</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.button}>Apps</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button}>Devices</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#36485f',
  },

  body: {
    flex: 2,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
  },

  titles: {
    flexDirection: 'row',
  },
  icons: {
    paddingRight: 5,
  },
  titleHeaders: {
    paddingTop: 5,
    fontSize: 20,
  },
  group: {
    margin: 10,
  },
  button: {
    backgroundColor: '#ccc',
    fontSize: 20,
    margin: 5,
    padding: 10,
  },
});

HomeScreen.navigationOptions = {
  title: '',
};

export default HomeScreen;
