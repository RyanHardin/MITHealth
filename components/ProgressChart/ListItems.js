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
    'Nvember 14, 2019',
    'Nvember 15, 2019',
    'Nvember 16, 2019',
    'Nvember 17, 2019',
    'Nvember 18, 2019',
    'Nvember 19, 2019',
    'Nvember 20, 2019',
    'Nvember 21, 2019',
    'Nvember 22, 2019',
    'Nvember 23, 2019',
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
    borderColor: 'black',
    padding: 20,
    marginVertical: 15,
    marginLeft: 45,
  },

  text: {
    fontSize: 15,
  },
});

export default ListItems;
