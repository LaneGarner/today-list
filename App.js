import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { Today } from "./components/Today";
import dummy from './dummy.json'

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.listItem}>{title}</Text>
  </View>
);

export default function App() {

    const [showAddToday, setShowAddToday] = useState(false)
  

  // const renderItem = ({ item }) => (
  //   <Item title={item} />
  // );
  

  return (
    <SafeAreaView style={styles.container}>
      <Today showAddToday={showAddToday} setShowAddToday={setShowAddToday} />
      {/* <View>
        <Text style={styles.header}>Today List</Text>
          {!showAddToday &&
          <Button title="New" onPress={handleNewToday} />
          }
          {showAddToday && (
          <View>
            <TextInput style={styles.input} placeholder="Enter new todo" />
            <Button title="Add" onPress={handleAddToday} />
          </View>)}
          <FlatList
            data={dummy.today}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.index}
          />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: '100',
    marginTop: 20,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
    borderRadius: 3,
    marginTop: 15,
  },
  listItemContainer: {
    fontSize: 10,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
