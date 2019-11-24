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
  const [items, setItems] = useState([
    'Nvember 14, 2019    Score : 98',
    'Nvember 15, 2019    Score : 65',
    'Nvember 16, 2019    Score : 79',
    'Nvember 17, 2019    Score : 32',
    'Nvember 18, 2019    Score : 43',
    'Nvember 19, 2019    Score : 79',
    'Nvember 20, 2019    Score : 97',
    'Nvember 21, 2019    Score : 98',
    'Nvember 22, 2019    Score : 90',
    'Nvember 23, 2019    Score : 87',
  ]);

  return (
    <FlatList
      data={items}
      renderItem={itemData => (
        <TouchableOpacity style={styles.listItems}>
          <Text style={styles.text}>{itemData.item}</Text>
        </TouchableOpacity>
      )}
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
