import React from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

const ListItem = ({item, deleteItem}) => {
  return(
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}></View>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Button //couldn't get Icon to load
          title='X'
          onPress={() => deleteItem(item.id)}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 18
  }
})

export default ListItem;