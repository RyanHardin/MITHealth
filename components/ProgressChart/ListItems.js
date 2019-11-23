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
    'Value 1',
    'Value 2',
    'Value 3',
    'Value 4',
    'Value 5',
    'Value 6',
    'Value 7',
    'Value 8',
    'Value 9',
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
