import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const ListItems = () => {
  const DATA = [
    {
      date: 'November 1, 2019    Score : 98',
      id: '1',
    },
    {
      date: 'November 3, 2019    Score : 65',
      id: '2',
    },
    {
      date: 'November 6, 2019    Score : 79',
      id: '3',
    },
    {
      date: 'November 7, 2019    Score : 32',
      id: '4',
    },
    {
      date: 'November 8, 2019    Score : 43',
      id: '5',
    },
    {
      date: 'November 12, 2019    Score : 79',
      id: '6',
    },
    {
      date: 'November 15, 2019    Score : 97',
      id: '7',
    },
    {
      date: 'November 16, 2019    Score : 98',
      id: '8',
    },
    {
      date: 'November 20, 2019    Score : 90',
      id: '9',
    },
    {
      date: 'November 25, 2019    Score : 87',
      id: '10',
    },
  ];

  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.listItems} id={item.id}>
          <Text style={styles.text}>{item.date}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  listItems: {
    width: '80%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgb(132,198,166)',
    padding: 20,
    marginVertical: 15,
    marginLeft: 45,
  },

  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
});

export default ListItems;
